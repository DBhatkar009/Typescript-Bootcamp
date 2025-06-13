// Rest Function Argument Example
interface coursebook { // Defining an interface for coursebook details
    title: string;
    description: string;
    price: number;
}

let coursebookDetails1: coursebook = { // Creating a coursebook object
    title: "Learn Javascript",
    description: "A comprehensive guide to mastering JavaScript.",
    price: 39.99
}

let coursebookDetails2: coursebook = { // Another coursebook object
    title: "Learn TypeScript",
    description: "A comprehensive guide to mastering TypeScript.",
    price: 29.99
}

function getBookCourseDetails(message: string, ...courses: coursebook[]): void{ // Using rest parameter to accept multiple coursebook objects
 console.log(message);

  for(let key of courses){
    console.log(key.title);
    
  }
}


getBookCourseDetails("This course is available", coursebookDetails1, coursebookDetails2);


function createNewCourse(title: string, description: string, price: number) : coursebook{ // Function to create a new course using the coursebook interface
 console.log(`Creating a new course: ${title} this course is available for ${price} dollars & description: ${description}`);

 return { // Using object create notation to return a new course object
    title,
    description,
    price
    }
 }

 const newCourse = createNewCourse("Learn Node.js", "A comprehensive guide to mastering Node.js.", 49.99);// Creating a new course using the function
 console.log("New course created: ", newCourse);
 