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


