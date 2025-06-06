// primitive types in typescript
// Typescript supports 7 primitive types:
// number, string, boolean, null, undefined, symbol, bigint
// Typescript Type Inference 
// Typescript Type Annotations
const total: number = 200;
const price: number = 300;

const subTotoal: number = total + price;
console.log(`Sub Total is: ${subTotoal}`);


const fName: string = "dev mentor";
const greeting: string = "Learning Typescript With Me";

console.log("greeting:" + greeting + ": " + fName);
console.log(`greetings: ${greeting}: ${fName}`); // Templates string Template literal


const isDriverLicensed: boolean = false;

if (isDriverLicensed) {
    console.log(`you can drive the car 🚙`);
} else {
    console.log(`you cannot drive the car 🚙`);
}

const user: null = null;
console.log(`user: ${user}`);

const userName: undefined = undefined;
console.log(`userNmae: ${userName}`);

const uniqueId: symbol = Symbol("014554adafe045ebf456465fegr");
console.log("uniqueId:", uniqueId);

const bigNumber: bigint = BigInt(145454887878798798785156135154654);
console.log("bigNumber:", bigNumber);



// Type Inference Type Annotations
console.log(`The Total is: ${addNumbers(200, 300, 400)}`);
function addNumbers(a: number, b: number, c: number){ // Function with type annotations
    const total = a + b + c;
    return `Total is: ${total}`;
}


// Working on Objects

const userObj: { 
    firstName: string;
    lastName: string;
    age: number;
    isActive: boolean;
    address: {
        city: string;
        state: string;
        country: string;
        pincode: number;
    }
} = {
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
}

console.log("userObj:", userObj);
