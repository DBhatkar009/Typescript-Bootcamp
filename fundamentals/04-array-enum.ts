const count: number[] = [1, 2, 3, 4, 5];

count.push(6);
// numbers.push("this is a name");

console.log(`Numbers are: ${count}`)


// Using Enum in Typescript

enum Direction {
    Up = 100,
    Down,
    Left,
    Right
}
const bookName = {
    title: "Typescript Fundamentals",
    Type: Direction.Down
}

console.log(bookName);
