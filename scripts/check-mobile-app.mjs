import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';

const manifest=JSON.parse(await fs.readFile('public/manifest.webmanifest','utf8'));
assert.equal(manifest.display,'standalone');
assert.equal(manifest.id,'/');
assert.equal(manifest.scope,'/');
assert.equal(manifest.start_url,'/');
for(const icon of [...manifest.icons,{src:'/icons/apple-touch-icon.png',sizes:'180x180'}]){
  const png=await fs.readFile('public'+icon.src);
  assert.equal(png.subarray(1,4).toString(),'PNG');
  assert.equal(`${png.readUInt32BE(16)}x${png.readUInt32BE(20)}`,icon.sizes);
  assert.equal(png[25],2,'Home Screen icons use an opaque RGB background');
}

// Exercise the worker without browser networking. Private responses must never
// reach the cache, even if their server cache-control headers change later.
const handlers=new Map(),cached=new Map(),deleted=[],fetches=[];
const cache={addAll:async paths=>{for(const path of paths)cached.set(path,new Response(path))},match:async path=>cached.get(path)?.clone()};
let disconnected=false;
vm.runInNewContext(await fs.readFile('public/sw.js','utf8'),{
  URL,Response,
  self:{location:{origin:'https://emfaxis.com'},addEventListener:(name,handler)=>handlers.set(name,handler),clients:{claim:async()=>{}}},
  caches:{open:async()=>cache,keys:async()=>['emf-axis-offline-v0','emf-axis-offline-v1','unrelated-cache'],delete:async key=>{deleted.push(key);return true}},
  fetch:async request=>{fetches.push(request.url);if(disconnected)throw new Error('offline');return new Response('fresh response')},
});
let pending;
handlers.get('install')({waitUntil:promise=>pending=promise});await pending;
assert.deepEqual([...cached.keys()],['/offline.html','/offline-retry.js']);
handlers.get('activate')({waitUntil:promise=>pending=promise});await pending;
assert.deepEqual(deleted,['emf-axis-offline-v0']);
function request(path,extra={}){
  let response;
  handlers.get('fetch')({request:{url:'https://emfaxis.com'+path,method:'GET',mode:'navigate',...extra},respondWith:promise=>response=promise});
  return response;
}
for(const path of ['/api/library','/api/library?x=1','/login','/signin-with-chatgpt','/signout-with-chatgpt','/auth/callback','/.well-known/test'])assert.equal(request(path),undefined,path+' must bypass worker');
assert.equal(request('/api/library',{method:'POST'}),undefined);
assert.equal(request('/research/cosmos',{mode:'cors'}),undefined,'RSC/API fetches must bypass worker');
assert.equal(request('/',{url:'https://example.com/'}),undefined);
assert.equal(await (await request('/sources/wifi')).text(),'fresh response');
assert.equal(await (await request('/library')).text(),'fresh response');
disconnected=true;
assert.equal(await (await request('/sources/wifi')).text(),'/offline.html');
assert.equal(await (await request('/library')).text(),'/offline.html','offline library can only show a generic notice');
assert.equal(await (await request('/offline-retry.js',{mode:'cors'})).text(),'/offline-retry.js');
assert.deepEqual([...cached.keys()],['/offline.html','/offline-retry.js'],'no account/research response was cached');

const origin=process.env.EMF_CHECK_ORIGIN;
if(origin){
  for(const path of ['/app','/manifest.webmanifest','/sw.js','/offline.html','/offline-retry.js',...manifest.icons.map(i=>i.src),'/icons/apple-touch-icon.png']){
    const response=await fetch(origin+path);assert.equal(response.status,200,path);
    if(path==='/manifest.webmanifest')assert.equal((await response.json()).display,'standalone');
    if(path==='/sw.js')assert.match(response.headers.get('content-type'),/javascript/);
    if(path==='/app'){
      const html=await response.text();
      for(const text of ['viewport-fit=cover','rel="manifest"','apple-touch-icon','apple-mobile-web-app-title','App navigation','Add to Home Screen'])assert(html.includes(text),text);
    }
  }
}
console.log(JSON.stringify({status:'PASS',icons:4,manifest:true,offlineFallback:true,privateCacheIsolation:true,httpAssets:!!origin}));
