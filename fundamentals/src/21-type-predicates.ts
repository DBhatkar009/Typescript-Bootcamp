// understanding typescript unknown Types
let garden: any;
garden = [];
garden = {};
garden = "";
garden = 58;
garden = Function;
garden = null;
garden = undefined;
garden = false;


let value1: undefined = garden;
let value2: any = garden;
let value3: [] = garden;
let value4: {} = garden;
let value5: string = garden;
let value6: number = garden;
let value7: boolean = garden;
let value8: null = garden;


let home: unknown;
home = "";
home = 56;
home: true;
home = Function;
home = [];
home = null;
home =  {};
home = undefined;

if(typeof home === "string"){
    let val: string = home
}

// let val: string = home;// Error given because of home is undefined or Unknown 
// let val1: string = home; // if you want not becaming an error on val1 or more 
// let val2: number = home; // then assign value for home
// let val3: boolean = home;
// let val4: null = home;
// let val5: undefined = home;
// let val6: [] = home;
// let val7: {} = home;
// let val8: Function = home;



interface Car {
    name: string;
    model: string;
    price: number;
}

const car: unknown = {
    name: "Audi",
    model: "5445AD",
    price: 5000
}

if(isCar(car)){
   const box = car?.name
   console.log(box);
   
}

function isCar(value: unknown): value is Car{
  const car = value as Car;
  return car?.model != null && car?.name != null;
}