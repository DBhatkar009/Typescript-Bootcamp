"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseTypeAll = void 0;
// Importing a constant from another module
var _10_modules_export_ts_1 = require("./10-modules-export.ts");
// Importing a constant from another module
var myCourse = _10_modules_export_ts_1.COURSE_TYPE;
exports.courseTypeAll = myCourse;
console.log("Course Type: " + myCourse);
// Output: Course Type: TypeScript Fundamentals
// Importing a constant from another module
var myCourseDuration = _10_modules_export_ts_1.COURSE_DURATION;
console.log("Course Duration: " + myCourseDuration + " hours");
var myCourseAuthor = _10_modules_export_ts_1.COURSE_AUTHOR;
console.log("course author: " + myCourseAuthor);
var courseLevel = _10_modules_export_ts_1.COURSE_LEVEL;
console.log("course level: " + courseLevel);
var constants = require("./12-default-export"); // Importing all exports from the 12-default-export module as constants
constants.BUSINESS_LAPTOPS;
constants.LAPTOP_MODEL;
// constants.getLaptopDetails(); // Calling the function to get laptop details
var _12_default_export_1 = require("./12-default-export"); // Importing the default export from the 12-default-export module;
(0, _12_default_export_1.default)(); // Calling the function to get laptop details
