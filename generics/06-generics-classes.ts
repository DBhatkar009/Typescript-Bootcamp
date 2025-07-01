class comicKeys<K, V>{

    constructor(
       public readonly key: K,
       public readonly value: V
    ){

    }

    print(){
        console.log(`key: ${this.key} and value: ${this.value}`);
        
    }
}

const p1 = new comicKeys(1, "25");
const vlue1 = p1.value;

const p2 = new comicKeys("40", 45);
const vlue2 = p2.value;

const marvel: Comic = {
    title: "Captain America",
    subtitle: "Civil War",
    pages: 400
}


const r1 = new comicKeys(marvel, "56");
const result1 = r1.value;

const r2 = new comicKeys("20", marvel);
const result2 = r2.value;

interface Comic {
    title: string,
    subtitle: string,
    pages: number
}
