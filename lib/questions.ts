import data from './questions.json';
export const questions=data;
export const questionById=(id:string)=>questions.find(q=>q.id.toLowerCase()===id.toLowerCase());
