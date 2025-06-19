var paper = ["paperBook", "paperBoat", "paperDish"];
// let map: never = "France";
// map = 56;
var cake = "Chocolet Cake";
var bestSmartPhone = "Samsung";
if (bestSmartPhone == "Samsung") {
}
else if (bestSmartPhone == "Motorola") {
}
else {
    isSmartPhoneAvailable(bestSmartPhone);
}
function isSmartPhoneAvailable(value) {
    throw new Error("unexpected value: ".concat(value));
}
