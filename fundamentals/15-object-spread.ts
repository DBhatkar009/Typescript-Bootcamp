//Typescript Object Spread Operator
// The object spread operator (...) allows you to create a new object by copying properties from an existing object.
interface UserDetails {// Defining an interface for user details
    name: string;
    age: number;
    isSpiderman: boolean;
    address: {
        city: string;
        state: string;
        country: string;
    }
    hobbies: string[];
}
const userDetails = {
    name: "peter parker",
    age: 25,
    isSpiderman: true,
    address: {
        city: "New York",
        state: "NY",
        country: "USA"
    },
    hobbies: ["photography", "web-slinging", "science"]
}

let userDetailsCopy = {...userDetails} // Using object spread operator to create a copy of userDetails

console.log("userDetailsCopy:", userDetailsCopy);

// Modifying the copy to demonstrate that it is a shallow copy
// userDetails.address.city = "los angeles"; 
// userDetails.address.state = "CA";
// userDetails.address.country = "USA";

console.log(userDetailsCopy);
