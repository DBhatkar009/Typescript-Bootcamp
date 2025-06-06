
// Type Aliases in Typescript
// Type aliases allow you to create a new name for a type.
// they can be used to create more readable and maintainable code.
type laptopTypes = "gaming" | "business" | "ultrabook" | "2-in-1";

let laptop: laptopTypes = "gaming";
console.log("Laptop type: " , laptop);

type DellLaptop = {
     brand: string,
    model: string,
    type: string,
    price: number,
    isAvailable: boolean
}

const dell: DellLaptop = {
    brand: "Dell",
    model: "XPS 13",
    type: "ultrabook",
    price: 999.99,
    isAvailable: true
}
console.log("dell laptop: ", dell);
