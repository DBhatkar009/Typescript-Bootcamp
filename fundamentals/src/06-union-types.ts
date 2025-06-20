// Union Types in Typescript
// Union types allow a variable to hold multiple types of values.
let uniqueIdData: string | number = "jvb46546464566bf4gb4fb466"
uniqueIdData = 56000; 

let uniqueSymbol: string  | number = 10000;
console.log("uniqueSymbol:", uniqueSymbol);

const newData: (string | number )[] = [5000, 500, 478, "this is a string", "this is another string"];
console.log("union type data: ", newData);


// Union Types in Typescript
// Union Types allow a variable to hold multiple types of values.
// it is defined using the pipe (|) symbol.
// Example: A variable can be either a string or a number.
// this is useful when you want to alloe a variable to hold multiple types of values.
console.log(getUserId(548877832154));
function getUserId (userId: string | number): string {
    if(typeof userId === "string"){
        return `userId is a string: ${userId}`;
    } else{
        return `userId is a number: ${userId}`;
    }
}

const thisIsMe: string | number | null = null; // Union type with null
if (thisIsMe === null){
    console.log((`this is me is null`));
} else{
    console.log(`this is me is: ${thisIsMe}`);
    
}

const userAge: number | null = null; // Uinon type with using --strictNullChecks
console.log(userAge);



let createUser: number | null;
createUser!.toString(); // Using non-null assertion operator (!) to tell typescript that createUser is not null or undefined



