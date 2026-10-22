import assert from 'node:assert/strict';
const origin='http://127.0.0.1:5173',url=origin+'/api/library';
const auth={Cookie:'__sites_local_auth=1','Content-Type':'application/json',Origin:origin};
const baseline=await (await fetch(url,{headers:auth})).json();assert(Array.isArray(baseline.items),'library read');
const tested=[];
try{
 for(const [kind,itemId] of [['source','5g'],['outcome','dna-damage']]){
  assert(!baseline.items.some(i=>i.kind===kind&&i.itemId===itemId),'test record already exists; preserve it');
  const body=JSON.stringify({kind,itemId,note:'Temporary local EMF route validation'});
  assert.equal((await fetch(url,{method:'POST',headers:auth,body})).status,200);tested.push({kind,itemId});
  const read=await (await fetch(url,{headers:auth})).json();assert(read.items.some(i=>i.kind===kind&&i.itemId===itemId&&i.note==='Temporary local EMF route validation'));
 }
 assert.equal((await fetch(url,{method:'POST',headers:{'Content-Type':'application/json',Origin:origin},body:JSON.stringify({kind:'source',itemId:'5g'})})).status,401);
 assert.equal((await fetch(url,{method:'POST',headers:auth,body:JSON.stringify({kind:'source',itemId:'not-real'})})).status,400);
 assert.equal((await fetch(url,{method:'POST',headers:{...auth,Origin:'https://invalid.example'},body:JSON.stringify({kind:'source',itemId:'5g'})})).status,403);
 const anon=await (await fetch(url)).json();assert.equal(anon.user,null);assert.deepEqual(anon.items,[]);
 console.log(JSON.stringify({status:'PASS',scope:'Local fixture only; production sign-in not asserted',sourceSave:true,outcomeSave:true,noteReadback:true,anonymousDenied:true,invalidIDDenied:true,crossOriginDenied:true}));
}finally{for(const item of tested)assert.equal((await fetch(url,{method:'DELETE',headers:auth,body:JSON.stringify(item)})).status,200);}
