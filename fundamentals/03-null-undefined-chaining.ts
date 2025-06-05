// This code Demonstrates the use of null and undefined in Typescript, Along with optional Chaining.
let simplePerson: any;
console.log(`person name: ${simplePerson}`);

if(!simplePerson){
    console.log("simple person is null or undefined");
} else {
    console.log("simple person is defined: " + simplePerson );
}


const person = {
    name: "Tarak Mehta",
    age: 45,
    book: {
        title: "Tarak Mehta ka ultah chashma"
    }
}

if(person?.book?.title){
    console.log(`book title is: ${person.book.title}`);
}