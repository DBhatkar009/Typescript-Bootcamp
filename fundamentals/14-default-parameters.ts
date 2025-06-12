// Typescript allows you to set default values for function parameters.
// This is useful when you want to provide a default value for a parameter if it is not provided by the caller.
function greet(name: string = "guest", age: number = 18, isDriversLicenseHolder: boolean = true){
    console.log(`Hello ${name}, you are ${age} years old and your driver's license status is: ${isDriversLicenseHolder ? "Holder" : "Not a holder"}`);
}

greet();// Output: Hello guest, you are 18 years old and your driver's license status is: Not a holder
