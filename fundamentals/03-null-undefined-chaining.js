var _a, _b, _c;
// This code Demonstrates the use of null and undefined in Typescript, Along with optional Chaining.
var simplePerson;
console.log("person name: ".concat(simplePerson));
if (!simplePerson) {
    console.log("simple person is null or undefined");
}
else {
    console.log("simple person is defined: " + simplePerson);
}
// Optinal Chaining in Typescript
var person = {
    name: "Tarak Mehta",
    age: 45,
    book: {
        title: "Tarak Mehta ka ultah chashma"
    }
};
if ((_a = person === null || person === void 0 ? void 0 : person.book) === null || _a === void 0 ? void 0 : _a.title) { // Using Optional Chaining
    console.log("book title is: ".concat(person.book.title));
}
var course = {
    name: "Typescript Fundamentals",
    book: {
        title: "Typescript for Beginners"
    }
};
var title = (_c = (_b = course === null || course === void 0 ? void 0 : course.book) === null || _b === void 0 ? void 0 : _b.title) !== null && _c !== void 0 ? _c : "No Title Available"; // Using Optional Chaining and Nullish Coalescing
console.log("course title: ".concat(title));
//Using Optional Chaining With Functions Error Handling
// This function will check if the book property exists in the course object
getBookTitle(course);
function getBookTitle(course) {
    if (!(course === null || course === void 0 ? void 0 : course.book)) { // check if course.book exists
        console.log("Book title is Not Available");
        return;
    }
    else {
        console.log("the book title is: ".concat(course.book.title));
    }
}
