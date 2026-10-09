import {investigator} from '@/lib/investigator';

export function OrcidLink({compact=false}:{compact?:boolean}){
 return <span className="orcid-identity"><a className="orcid-link" href={investigator.orcidUrl} target="_blank" rel="me noreferrer" aria-label={'View '+investigator.name+'’s ORCID record: '+investigator.orcid}><img src="/brand/orcid-id-unauthenticated.webp" alt="ORCID iD" width={24} height={24}/><span>{compact?investigator.orcid:investigator.orcidUrl}</span></a><span className="orcid-status">(unauthenticated)</span></span>
}
