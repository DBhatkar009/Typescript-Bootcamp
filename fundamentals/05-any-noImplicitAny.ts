const myRollNumbers: number[] = [1,2,3,4,5,6,7,8,9,10]; // Array of numbers
myRollNumbers.push(11);

console.log("roll numbers are: " + myRollNumbers);

const somethingBookValue: any = "this is a something book of typescript"; // Using any type
// This Allows you to assign any type of value to the variable
// However, it is not recommended to use 'any' as it defeats the purpose of Typescript's type system.
console.log("Something is: " + somethingBookValue);

const mixedUserRoles: any[] = ["admin", "user", "guest", 10, true, {name: "Tarak Mehta"}]; // Array of mixed types
console.log("User Roles are: " + mixedUserRoles);


console.log(updateUserDetails("Tarak Mehta", 45, "India"));

function updateUserDetails(userName: string, userAge: number, userCity: string){ // Function with type annotations
    // this function takes three parameters: userName, userAge, and userRole
    return`User Name: ${userName}, User age: ${userAge}, User Role: ${userCity}`;
}






