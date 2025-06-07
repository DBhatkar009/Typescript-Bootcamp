// Importing a constant from another module
import { COURSE_AUTHOR, COURSE_DURATION, COURSE_LEVEL, COURSE_TYPE } from './10-modules-export.ts'


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
    myCourse as courseTypeAll
}