// understanding typescript unknown Types
var garden;
garden = [];
garden = {};
garden = "";
garden = 58;
garden = Function;
garden = null;
garden = undefined;
garden = false;
var value1 = garden;
var value2 = garden;
var value3 = garden;
var value4 = garden;
var value5 = garden;
var value6 = garden;
var value7 = garden;
var value8 = garden;
var home;
home = "";
home = 56;
home: true;
home = Function;
home = [];
home = null;
home = {};
home = undefined;
if (typeof home === "string") {
    var val_1 = home;
}
var val = home; //
var val1 = home;
var val2 = home;
var val3 = home;
var val4 = home;
var val5 = home;
var val6 = home;
var val7 = home;
var val8 = home;
var car = {
    name: "Audi",
    model: "5445AD",
    price: 5000
};
if (isCar(car)) {
    var box = car === null || car === void 0 ? void 0 : car.name;
    console.log(box);
}
function isCar(value) {
    var car = value;
    return (car === null || car === void 0 ? void 0 : car.model) != null && (car === null || car === void 0 ? void 0 : car.name) != null;
}
