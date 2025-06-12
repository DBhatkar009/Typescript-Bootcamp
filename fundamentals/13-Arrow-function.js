var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Arrow functions are a more concise syntax for writing function expressions in TypeScript Or JavaScript.
// They are particularly useful for maintaining the context of 'this' in callbacks and methods.
function courseTitle(course, callback) {
    var _this = this;
    debugger;
    this.course = course; // 'this' refers to the current context, which is the course object
    setTimeout(function () {
        var _a, _b;
        callback((_b = (_a = _this.course) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : "No title provided");
    }, 1000);
}
// Example usage of the courseTitle function with a callback
var cb = function (title) { return console.log("Call back Function Save Successfully: ", title); };
courseTitle({ title: "Typescript Fundamentals" }, cb); // Output: Call back Function Save Successfully:  
debugger;
// Typescript Fundamentals
//.......................................................................................................
// Typescript Arrow function Spread Operators & Destructing
// Arrow functions can also be used with destructuring and spread operators for cleaner code.
var userNumbers = [1, 2, 3, 4];
console.log("userNumbers:", userNumbers); // Output: userNumbers: [ 1, 2, 3, 4 ]
var newUserNumbers = __spreadArray(__spreadArray([], userNumbers, true), [5, 6, 7, 8, 9, 10], false); // Using Spread Operator to create a new array with additional numbers
console.log("newUserNumbers:", newUserNumbers); // Output: newUserNumbers: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
var one = userNumbers[0], two = userNumbers[1], three = userNumbers[2], four = userNumbers[3];
console.log("Destructured values:", one, two, three, four); // Output: Destructured values: 1 2 3 4
//# sourceMappingURL=13-Arrow-function.js.map