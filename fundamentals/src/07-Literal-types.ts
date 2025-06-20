// Literal types in Typescript
const jUser: "john" = "john"; //literal types 
console.log("Literal types in string: ", jUser);

const jUser2: 500 = 500; // literal types in number
console.log("Literal types in number: ", jUser2);

const yUser: "Yes" | "No" | "Maybe" = "Maybe";
console.log("Literal Types in Union: ", yUser);

let userRoleAs: "admin" | "user" | "guest" | "superadmin" = "guest" // literal types in union
userRoleAs = "guest";
userRoleAs = "superadmin" // valid assignment

