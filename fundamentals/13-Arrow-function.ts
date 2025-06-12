// Arrow functions are a more concise syntax for writing function expressions in TypeScript Or JavaScript.
// They are particularly useful for maintaining the context of 'this' in callbacks and methods.
function courseTitle(course, callback:Function){ // Arrow function with callback
    this.course = course; // 'this' refers to the current context, which is the course object
    setTimeout(()=>{ // Using arrow function to maintain the context of 'this'
        callback(this.course?.title?? "No title provided");
    },1000)
}

// Example usage of the courseTitle function with a callback
const cb = (title: string) => console.log("Call back Function Save Successfully: ", title);

courseTitle({title: "Typescript Fundamentals"}, cb); // Output: Call back Function Save Successfully:  Typescript Fundamentals

//.......................................................................................................

// Typescript Arrow function Spread Operators & Destructing
// Arrow functions can also be used with destructuring and spread operators for cleaner code.

let userNumbers = [1,2,3,4];
console.log("userNumbers:", userNumbers); // Output: userNumbers: [ 1, 2, 3, 4 ]

let newUserNumbers = [...userNumbers, 5, 6, 7, 8, 9, 10]; // Using Spread Operator to create a new array with additional numbers
console.log("newUserNumbers:", newUserNumbers); // Output: newUserNumbers: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const [one, two, three, four] = userNumbers;
console.log("Destructured values:", one, two, three, four); // Output: Destructured values: 1 2 3 4
