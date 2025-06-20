"use strict";
var coursebookDetails1 = {
    title: "Learn Javascript",
    description: "A comprehensive guide to mastering JavaScript.",
    price: 39.99
};
var coursebookDetails2 = {
    title: "Learn TypeScript",
    description: "A comprehensive guide to mastering TypeScript.",
    price: 29.99
};
function getBookCourseDetails(message) {
    var courses = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        courses[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var _a = 0, courses_1 = courses; _a < courses_1.length; _a++) {
        var key = courses_1[_a];
        console.log(key.title);
    }
}
getBookCourseDetails("This course is available", coursebookDetails1, coursebookDetails2);
var createNewCourse = function (title, description, price) {
    console.log("Creating a new course: ".concat(title, " this course is available for ").concat(price, " dollars & description: ").concat(description));
    return {
        title: title,
        description: description,
        price: price
    };
};
var newCourse = createNewCourse("Learn Node.js", "A comprehensive guide to mastering Node.js.", 49.99); // Creating a new course using the function
console.log("New course created: ", newCourse);
console.log(typeof createNewCourse); // Displaying the type of the new course object
console.log(typeof newCourse); // Displaying the type of the new course object
