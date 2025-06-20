"use strict";
let coursebookDetails1 = {
    title: "Learn Javascript",
    description: "A comprehensive guide to mastering JavaScript.",
    price: 39.99
};
let coursebookDetails2 = {
    title: "Learn TypeScript",
    description: "A comprehensive guide to mastering TypeScript.",
    price: 29.99
};
function getBookCourseDetails(message, ...courses) {
    console.log(message);
    for (let key of courses) {
        console.log(key.title);
    }
}
getBookCourseDetails("This course is available", coursebookDetails1, coursebookDetails2);
const createNewCourse = (title, description, price) => {
    console.log(`Creating a new course: ${title} this course is available for ${price} dollars & description: ${description}`);
    return {
        title,
        description,
        price
    };
};
const newCourse = createNewCourse("Learn Node.js", "A comprehensive guide to mastering Node.js.", 49.99); // Creating a new course using the function
console.log("New course created: ", newCourse);
console.log(typeof createNewCourse); // Displaying the type of the new course object
console.log(typeof newCourse); // Displaying the type of the new course object
