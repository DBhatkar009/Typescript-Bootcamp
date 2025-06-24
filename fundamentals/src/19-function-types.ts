// function types
// function declaration
function add(x: number, y: number): number {
    return x + y; // function to add two numbers
}
console.log("Function Declaration result: ", add(66, 55)); // calling the function and logging the result

// function expression
interface GetUpdateUserDetails{
      name: string,
      age: number,
      companyName: string
}
// function expression with object interfaces
const getUpdateUserDetails = function (name: string, age: number, companyName: string):  GetUpdateUserDetails{
    console.log(`My name is ${name}, I am ${age} years old and I work at ${companyName}.`); // function to get user detail`
    const details = {
        name,
        age,
        companyName
    };
    return details; // returning the user details as an object
}

const result = getUpdateUserDetails("david", 30, "Tech Solutions");
console.log(result); // logging the result of the function call

// function expression with arrow function syntax
type GetUserDetails = (name: string, age: number, companyName: string) => GetUpdateUserDetails;

const newUserDetails: GetUserDetails = (name, age, companyName) =>{
   console.log(`My name is ${name}, I am ${age} years old and I work at ${companyName}.`); // function to get user detail
   return {
    name,
    age,
    companyName
   };
}

const newResult = newUserDetails("Mary", 28, "Graphics Inc.");
console.log(newResult);
