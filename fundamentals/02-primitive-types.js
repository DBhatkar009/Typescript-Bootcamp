"use strict";
// primitive types in typescript
// Typescript supports 7 primitive types:
// number, string, boolean, null, undefined, symbol, bigint
// Typescript Type Inference 
// Typescript Type Annotations
var total = 200;
var price = 300;
var subTotoal = total + price;
console.log("Sub Total is: ".concat(subTotoal));
var fName = "dev mentor";
var greeting = "Learning Typescript With Me";
console.log("greeting:" + greeting + ": " + fName);
console.log("greetings: ".concat(greeting, ": ").concat(fName)); // Templates string Template literal
var isDriverLicensed = false;
if (isDriverLicensed) {
    console.log("you can drive the car \uD83D\uDE99");
}
else {
    console.log("you cannot drive the car \uD83D\uDE99");
}
var user = null;
console.log("user: ".concat(user));
var userName = undefined;
console.log("userNmae: ".concat(userName));
var uniqueId = Symbol("014554adafe045ebf456465fegr");
console.log("uniqueId:", uniqueId);
var bigNumber = BigInt(145454887878798798785156135154654);
console.log("bigNumber:", bigNumber);
// Type Inference Type Annotations
console.log("The Total is: ".concat(addNumbers(200, 300, 400)));
function addNumbers(a, b, c) {
    var total = a + b + c;
    return "Total is: ".concat(total);
}
// Working on Objects
var userObj = {
    firstName: "Jethalal",
    lastName: "Gada",
    age: 40,
    isActive: true,
    address: {
        city: "mumbai",
        state: "maharashtra",
        country: "Inda",
        pincode: 400001,
    }
};
console.log("userObj:", userObj);
