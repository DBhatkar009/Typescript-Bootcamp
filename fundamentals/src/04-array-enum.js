"use strict";
const count = [1, 2, 3, 4, 5];
count.push(6);
// numbers.push("this is a name");
console.log(`Numbers are: ${count}`);
// Using Enum in Typescript
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 100] = "Up";
    Direction[Direction["Down"] = 101] = "Down";
    Direction[Direction["Left"] = 102] = "Left";
    Direction[Direction["Right"] = 103] = "Right";
})(Direction || (Direction = {}));
const bookName = {
    title: "Typescript Fundamentals",
    Type: Direction.Down
};
console.log(bookName);
