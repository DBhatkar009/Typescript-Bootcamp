export interface HashId {
   id: string,
   printId();
}


export interface HashTitle extends HashId {
    title: string
}