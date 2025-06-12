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
