"use strict";
const paper = ["paperBook", "paperBoat", "paperDish"];
// let map: never = "France";
// map = 56;
const cake = "Chocolet Cake";
let bestSmartPhone = "Samsung";
if (bestSmartPhone == "Samsung") {
}
else if (bestSmartPhone == "Motorola") {
}
else {
    isSmartPhoneAvailable(bestSmartPhone);
}
function isSmartPhoneAvailable(value) {
    throw new Error(`unexpected value: ${value}`);
}
