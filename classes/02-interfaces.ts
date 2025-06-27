export interface HashId {
   id: string,
   printId(): void;
}


export interface HashTitle extends HashId {
    title: string
}