"use strict";
var myBookOfRead = ['Harry Potter', 'Order of pheonix', 255];
// function expression with object interfaces
var bookShowRoom = function (title, subtitle, lessoncount) {
    console.log("My name is ".concat(title, ", I am ").concat(subtitle, " years old and I work at ").concat(lessoncount, ".")); // function to get user detail`
    return [title, subtitle, lessoncount]; // returning the user details as an object
};
console.log(myBookOfRead);
