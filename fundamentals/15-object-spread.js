"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userDetails = {
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
var userDetailsCopy = __assign({}, userDetails); // Using object spread operator to create a copy of userDetails
console.log("userDetailsCopy:", userDetailsCopy);
// Modifying the copy to demonstrate that it is a shallow copy
// userDetails.address.city = "los angeles"; 
// userDetails.address.state = "CA";
// userDetails.address.country = "USA";
console.log(userDetailsCopy);
