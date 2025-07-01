export interface TV {
    brand: string,
    model: string,
    price: number
}


// export interface SMARTTVUPDATE {
//     brand?: string,
//     model?: string,
//     price?: number
// }

export function smartTv(tvId: string, update: Partial<TV>){

}


smartTv("1", {
   brand: "This is the Lg Tv Brand"
});

smartTv("2", {
   model: "LG25487A"
});

smartTv("3", {
   price: 200
});