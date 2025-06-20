"use strict";
// function types
// function declaration
function add(x, y) {
    return x + y; // function to add two numbers
}
console.log("Function Declaration result: ", add(66, 55)); // calling the function and logging the result
// function expression with object interfaces
const getUpdateUserDetails = function (name, age, companyName) {
    console.log(`My name is ${name}, I am ${age} years old and I work at ${companyName}.`); // function to get user detail`
    const details = {
        name,
        age,
        companyName
    };
    return details; // returning the user details as an object
};
const result = getUpdateUserDetails("david", 30, "Tech Solutions");
console.log(result); // logging the result of the function call
const newUserDetails = (name, age, companyName) => {
    console.log(`My name is ${name}, I am ${age} years old and I work at ${companyName}.`); // function to get user detail
    return {
        name,
        age,
        companyName
    };
};
const newResult = newUserDetails("Mary", 28, "Graphics Inc.");
console.log(newResult);
