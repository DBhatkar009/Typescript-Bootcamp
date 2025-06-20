"use strict";
const courseName = "Typescript Bootcamp Version 3.0";
// Let, Const & Var Declarations Differences
if (courseName) {
    let subTitle = "Learn Typescript Fundamentals & practice with coding exercises V3";
}
console.log(subTitle);
printCourseName(courseName);
// printCourseName(200);
// printCourseName(true);
// printCourseName({ name: "typescript"});
function printCourseName(name) {
    console.log("welcome to " + name.toUpperCase());
}
