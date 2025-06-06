// Union Types in Typescript
// Union types allow a variable to hold multiple types of values.
var uniqueIdData = "jvb46546464566bf4gb4fb466";
uniqueIdData = 56000;
var uniqueSymbol = 10000;
console.log("uniqueSymbol:", uniqueSymbol);
var newData = [5000, 500, 478, "this is a string", "this is another string"];
console.log("union type data: ", newData);
// Union Types in Typescript
// Union Types allow a variable to hold multiple types of values.
// it is defined using the pipe (|) symbol.
// Example: A variable can be either a string or a number.
// this is useful when you want to alloe a variable to hold multiple types of values.
console.log(getUserId(548877832154));
function getUserId(userId) {
    if (typeof userId === "string") {
        return "userId is a string: ".concat(userId);
    }
    else {
        return "userId is a number: ".concat(userId);
    }
}
var thisIsMe = null; // Union type with null
if (thisIsMe === null) {
    console.log(("this is me is null"));
}
else {
    console.log("this is me is: ".concat(thisIsMe));
}
var userAge = null; // Uinon type with using --strictNullChecks
console.log(userAge);
var createUser;
createUser.toString(); // Using non-null assertion operator (!) to tell typescript that createUser is not null or undefined
