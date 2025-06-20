"use strict";
const userFile = {
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
    const { name, ...others } = userFile; // Destructuring the userFile object to extract name and the rest of the properties into others
    console.log(`My name is ${name} and I am ${others.isSpiderman ? "a Spiderman" : "a Common Man"}`);
}
