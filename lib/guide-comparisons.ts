import type {EvidenceRow} from './evidence';

/** Curated reading examples drawn from the existing canonical comparisons. */
const comparisonIds:Record<string,string[]>={
 basics:['phone-brain','elf-leukaemia','rf-sperm-cells','5g-skin-temperature'],
 wireless:['phone-brain','phone-young-brain','wifi-sleep-direct','cordless-meningioma','bluetooth-exposure'],
 'power-lines':['elf-leukaemia','v5-transformer-child-leukaemia','blanket-leukaemia'],
 symptoms:['base-symptoms','phone-headache','phone-memory','phone-tinnitus'],
 sleep:['5g-sleep','wifi-sleep-direct','v4-phone-sleep-cosmos','v5-e02-t04-r174'],
 fertility:['phone-semen','phone-pregnancy','induction-pregnancy','rf-sperm-cells'],
 children:['phone-young-brain','v4-mobile-child-cognition','elf-leukaemia','baby-monitors-exposure'],
 measurement:['smart-meters-exposure','induction-hobs-exposure','electric-vehicles-exposure','bluetooth-exposure'],
 'animal-studies':['rf-animal-cancer','v4-rf-japanese-animal-cancer','v5-wifi-rat-reproductive','v5-e03-t05-r222']
};
export function comparisonsForGuide(id:string,evidenceRows:EvidenceRow[]){return (comparisonIds[id]||[]).map(id=>evidenceRows.find(row=>row.id===id)).filter(row=>row!==undefined);}
