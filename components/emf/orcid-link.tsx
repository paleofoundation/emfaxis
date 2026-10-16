import {investigator} from '@/lib/investigator';

type IdentityProps={name?:string;orcidUrl?:string;profileHref?:string};

export function OrcidLink({name=investigator.name,orcidUrl=investigator.orcidUrl}:IdentityProps={}){
 return <a className="orcid-link" href={orcidUrl} target="_blank" rel="me noreferrer" aria-label={`View ${name}’s ORCID record`} title={`View ${name}’s ORCID record`}><img src="/brand/orcid-id.gif" alt="" aria-hidden="true" width={20} height={20}/></a>
}

export function AuthorIdentity({name=investigator.name,orcidUrl=investigator.orcidUrl,profileHref}:IdentityProps={}){
 return <span className="author-identity">{profileHref?<a className="author-name" href={profileHref}>{name}</a>:<span className="author-name">{name}</span>}<OrcidLink name={name} orcidUrl={orcidUrl}/></span>
}
