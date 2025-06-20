"use strict";
// understanding typescript unknown Types
let garden;
garden = [];
garden = {};
garden = "";
garden = 58;
garden = Function;
garden = null;
garden = undefined;
garden = false;
let value1 = garden;
let value2 = garden;
let value3 = garden;
let value4 = garden;
let value5 = garden;
let value6 = garden;
let value7 = garden;
let value8 = garden;
let home;
home = "";
home = 56;
home: true;
home = Function;
home = [];
home = null;
home = {};
home = undefined;
if (typeof home === "string") {
    let val = home;
}
const car = {
    name: "Audi",
    model: "5445AD",
    price: 5000
};
if (isCar(car)) {
    const box = car?.name;
    console.log(box);
}
function isCar(value) {
    const car = value;
    return car?.model != null && car?.name != null;
}
