"use strict";
// This code Demonstrates the use of null and undefined in Typescript, Along with optional Chaining.
let simplePerson;
console.log(`person name: ${simplePerson}`);
if (!simplePerson) {
    console.log("simple person is null or undefined");
}
else {
    console.log("simple person is defined: " + simplePerson);
}
// Optinal Chaining in Typescript
const person = {
    name: "Tarak Mehta",
    age: 45,
    book: {
        title: "Tarak Mehta ka ultah chashma"
    }
};
if (person?.book?.title) { // Using Optional Chaining
    console.log(`book title is: ${person.book.title}`);
}
const course = {
    name: "Typescript Fundamentals",
    book: {
        title: "Typescript for Beginners"
    }
};
const coTitle = course?.book?.title ?? "No Title Available"; // Using Optional Chaining and Nullish Coalescing
console.log(`course title: ${coTitle}`);
//Using Optional Chaining With Functions Error Handling
// This function will check if the book property exists in the course object
getBookTitle(course);
function getBookTitle(course) {
    if (!course?.book) { // check if course.book exists
        console.log("Book title is Not Available");
        return;
    }
    else {
        console.log(`the book title is: ${course.book.title}`);
    }
}
