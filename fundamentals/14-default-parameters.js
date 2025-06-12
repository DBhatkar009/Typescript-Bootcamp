// Typescript allows you to set default values for function parameters.
// This is useful when you want to provide a default value for a parameter if it is not provided by the caller.
function greet(name, age, isDriversLicenseHolder) {
    if (name === void 0) { name = "guest"; }
    if (age === void 0) { age = 18; }
    if (isDriversLicenseHolder === void 0) { isDriversLicenseHolder = true; }
    console.log("Hello ".concat(name, ", you are ").concat(age, " years old and your driver's license status is: ").concat(isDriversLicenseHolder ? "Holder" : "Not a holder"));
}
greet(); // Output: Hello guest, you are 18 years old and your driver's license status is: Not a holder
