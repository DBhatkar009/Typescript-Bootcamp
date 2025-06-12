// Object create notation in TypeScript
// Object create notation in TypeScript allows you to create objects using a more concise syntax.
// It is particularly useful for creating objects with predefined properties and values without needing to define a class or constructor.
// Object create notation in TypeScript
interface COURSE {
    title: string;
    description: string;
    price: number;
}

const title= "learn Nodejs",
      description = "A comprehensive guide to mastering Node.js.",
      price = 49.99;

const coursePurchase: COURSE = { // Using object create notation to create a coursePurchase object
    title,
    description,
    price
}

console.log("coursePurchase:", coursePurchase);
