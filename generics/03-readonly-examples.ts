interface SmartPhone {
    brand: string,
    model: string,
    price: number
}

interface SmartPhoneUpdate {
    readonly brand: string,
    readonly model: string,
    readonly price: number
}


function getNewPhone(phone: SmartPhone): Readonly<SmartPhone>{
    // Return a new object with the same properties as phone
    return { ...phone };
}


const purchase = getNewPhone({
    brand: "Samsung",
    model: "SM30s",
    price: 17000
});

// purchase.brand = ""

