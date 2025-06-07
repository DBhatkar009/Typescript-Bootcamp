// Importing a constant from another module
import { COURSE_AUTHOR, COURSE_DURATION, COURSE_LEVEL, COURSE_TYPE } from './10-modules-export.ts'
import { feature1, feature2, COURSE_LEVEL1 } from "./11-module-reExport/11-module-reExport.ts"; // Importing features and course level from another module
// Importing a constant from another module


const myCourse = COURSE_TYPE;

console.log("Course Type: " + myCourse);
// Output: Course Type: TypeScript Fundamentals
// Importing a constant from another module

const myCourseDuration = COURSE_DURATION;
console.log("Course Duration: " + myCourseDuration + " hours");

const myCourseAuthor = COURSE_AUTHOR;
console.log("course author: " + myCourseAuthor);

const courseLevel = COURSE_LEVEL;
console.log("course level: " + courseLevel);


export {
    myCourse as courseTypeAll // Exporting the course type as courseTypeAll
}


import * as constants from './12-default-export' // Importing all exports from the 12-default-export module as constants

constants.BUSINESS_LAPTOPS
constants.LAPTOP_MODEL
// constants.getLaptopDetails(); // Calling the function to get laptop details

import getLaptopDetails from './12-default-export' // Importing the default export from the 12-default-export module;

getLaptopDetails(); // Calling the function to get laptop details