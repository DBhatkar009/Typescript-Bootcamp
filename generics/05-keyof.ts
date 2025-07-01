const SmartWatch: SmartPhone= {
   brand: "Motorola",
   model: "M0524",
   price: 40000
}


type newSmartWatch = keyof SmartPhone;


export function updateSmartWatch<T, K extends keyof T>(data: T, property: K){
  return data[property];
}


const ourResult = updateSmartWatch(SmartWatch, "model");