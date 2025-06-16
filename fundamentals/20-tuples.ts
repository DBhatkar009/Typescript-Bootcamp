interface BooksRoom{
      title: string,
      subtitle: string,
      lessoncount: number
}

type BookOfAdventure = [string, string, number];

const myBookOfRead: BookOfAdventure = ['Harry Potter', 'Order of pheonix', 255];

// function expression with object interfaces
const bookShowRoom = function(title: string, subtitle: string, lessoncount: number): BookOfAdventure {
    console.log(`My name is ${title}, I am ${subtitle} years old and I work at ${lessoncount}.`); // function to get user detail`

    return [title, subtitle, lessoncount]; // returning the user details as an object
}

console.log(myBookOfRead);
