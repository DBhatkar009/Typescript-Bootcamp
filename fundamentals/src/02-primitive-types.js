"use strict";
// primitive types in typescript
// Typescript supports 7 primitive types:
// number, string, boolean, null, undefined, symbol, bigint
// Typescript Type Inference 
// Typescript Type Annotations
const total = 200;
const itemPrice = 300;
const subTotoal = total + itemPrice;
console.log(`Sub Total is: ${subTotoal}`);
const fName = "dev mentor";
const greeting = "Learning Typescript With Me";
console.log("greeting:" + greeting + ": " + fName);
console.log(`greetings: ${greeting}: ${fName}`); // Templates string Template literal
const isDriverLicensed = false;
if (isDriverLicensed) {
    console.log(`you can drive the car 🚙`);
}
else {
    console.log(`you cannot drive the car 🚙`);
}
const user = null;
console.log(`user: ${user}`);
const userName = undefined;
console.log(`userNmae: ${userName}`);
const uniqueId = Symbol("014554adafe045ebf456465fegr");
console.log("uniqueId:", uniqueId);
const bigNumber = BigInt(145454887878798798785156135154654);
console.log("bigNumber:", bigNumber);
// Type Inference Type Annotations
console.log(`The Total is: ${addNumbers(200, 300, 400)}`);
function addNumbers(a, b, c) {
    const total = a + b + c;
    return `Total is: ${total}`;
}
// Working on Objects
const userObj = {
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
