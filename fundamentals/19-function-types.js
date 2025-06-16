// function types
// function declaration
function add(x, y) {
    return x + y; // function to add two numbers
}
console.log("Function Declaration result: ", add(66, 55)); // calling the function and logging the result
// function expression with object interfaces
var getUpdateUserDetails = function (name, age, companyName) {
    console.log("My name is ".concat(name, ", I am ").concat(age, " years old and I work at ").concat(companyName, ".")); // function to get user detail`
    var details = {
        name: name,
        age: age,
        companyName: companyName
    };
    return details; // returning the user details as an object
};
var result = getUpdateUserDetails("david", 30, "Tech Solutions");
console.log(result); // logging the result of the function call
var newUserDetails = function (name, age, companyName) {
    console.log("My name is ".concat(name, ", I am ").concat(age, " years old and I work at ").concat(companyName, ".")); // function to get user detail
    return {
        name: name,
        age: age,
        companyName: companyName
    };
};
var newResult = newUserDetails("Mary", 28, "Graphics Inc.");
console.log(newResult);
