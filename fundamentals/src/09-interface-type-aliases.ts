// Typescript allows you to define a variable that can only take a specific set of values, known as literal types.
interface ModelUser { // Interface is a way to define the structure of an object
    readonly name: string, // readonly makes the property immutable
    // readonly properties cannot be changed after they are assigned
   age: string | number,
   isActive: boolean,
   role: string,
    permission: string[]
}

const modeUser: ModelUser = {
   name: 'john',
   age: 30,
   isActive: true,
   role: 'admin',
    permission: ["read", "write", "execute"],
    technology: "typescript"

}
//modeUser.name = "jane"; // Error: Cannot assign to 'name' because it is a read-only property.
console.log("modelUser: ", modeUser);

const techUser: ModelUser =  {
    name: 'oliver',
   age: 25,
   isActive: true,
   role: 'developer',
    permission: ["read", "write"],
    technology: "javascript"

}

interface ModelUser{ // Interface can be re-declared and extended
    technology: string
}

techUser.age = "24"
console.log("techUser: ", techUser);


type UserD = {
      readonly name: string,
   age: string | number,
   isActive: boolean,
   role: string,
    permission: string[],
    technology: string
}

const userD: ExtendedUserD = {
    name: 'david',
    age: 28,
    isActive: true,
    role: 'designer',
    permission: ["read", "write"],
    technology: "figma",
    location: "new york",
    department: "design"
}
 console.log("userD: ", userD);

 /*type UserD = { // Type aliases cannot be re-declared, but can be extended using intersection (&)
   // optional property
}*/
type ExtendedUserD = UserD & { // Extending the UserD type with additional properties
    location: string,
    department: string
}
// userD.name = "daniel"; // Error: Cannot assign to 'name' because it is a read-only property.
 
//userD.name = "daniel"; // Error: Cannot assign to 'name' because it is a read-only property.