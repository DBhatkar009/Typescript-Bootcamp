"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var userFile = {
    name: "peter parker",
    age: 25,
    isSpiderman: true,
    address: {
        city: "New York",
        state: "NY",
        country: "USA"
    },
    hobbies: ["photography", "web-slinging", "science"]
};
addUserDetails(userFile); // Calling the function to demonstrate object destructuring
function addUserDetails(userFile) {
    var name = userFile.name, others = __rest(userFile, ["name"]); // Destructuring the userFile object to extract name and the rest of the properties into others
    console.log("My name is ".concat(name, " and I am ").concat(others.isSpiderman ? "a Spiderman" : "a Common Man"));
}
