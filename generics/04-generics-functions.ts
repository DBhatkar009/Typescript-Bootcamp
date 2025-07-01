interface Phone {
    brand: string,
    model: string,
    price: number
}

interface SmartPhoneUpdate {
    readonly brand: string,
    readonly model: string,
    readonly price: number
}


export function smartPhone(phone: Phone): Readonly<Phone>{
    // Return a new object with the same properties as phone
    return Object.freeze(phone);
}


function luxerousBike(bike: Bike): Readonly<Bike>{
      return Object.freeze(bike);     
}


function luxerousPurchase<T extends object>(input: T): Readonly<T>{
         return Object.freeze(input);
}

const purchaseItems: Phone ={ 
    brand: "Samsung", 
    model: "SM30s",
    price: 17000

}

const purchaseComputers: Phone = {
    brand: "DELL", 
    model: "Inspiron 5593",
    price: 69000

}

const purchase1 = luxerousPurchase(purchaseItems);
const newLogic = luxerousPurchase(purchaseComputers);

// purchase.brand = ""


const purchase2 = luxerousPurchase<Bike>({
     bikeBrand: "Honda",
     bikeModel: "CB650R",
     bikePrice: 1196000
});

interface Bike {
    bikeBrand: string,
    bikeModel: string,
    bikePrice: number
}

// interface Computer {
//     Brand: string,
//     Model: string,
//     Price: number
// }