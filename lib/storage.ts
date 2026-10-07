import {env} from 'cloudflare:workers';
export function storage(){if(!env.DB)throw new Error('Library database unavailable');return env.DB;}
