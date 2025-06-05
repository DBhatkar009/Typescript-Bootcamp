var _a;
// This code Demonstrates the use of null and undefined in Typescript, Along with optional Chaining.
var simplePerson;
console.log("person name: ".concat(simplePerson));
if (!simplePerson) {
    console.log("simple person is null or undefined");
}
else {
    console.log("simple person is defined: " + simplePerson);
}
var person = {
    name: "Tarak Mehta",
    age: 45,
    book: {
        title: "Tarak Mehta ka ultah chashma"
    }
};
if ((_a = person === null || person === void 0 ? void 0 : person.book) === null || _a === void 0 ? void 0 : _a.title) {
    console.log("book title is: ".concat(person.book.title));
}
