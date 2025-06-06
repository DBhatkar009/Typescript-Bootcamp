var modeUser = {
    name: 'john',
    age: 30,
    isActive: true,
    role: 'admin',
    permission: ["read", "write", "execute"],
    technology: "typescript"
};
//modeUser.name = "jane"; // Error: Cannot assign to 'name' because it is a read-only property.
console.log("modelUser: ", modeUser);
var techUser = {
    name: 'oliver',
    age: 25,
    isActive: true,
    role: 'developer',
    permission: ["read", "write"],
    technology: "javascript"
};
techUser.age = "24";
console.log("techUser: ", techUser);
var userD = {
    name: 'david',
    age: 28,
    isActive: true,
    role: 'designer',
    permission: ["read", "write"],
    technology: "figma",
    location: "new york",
    department: "design"
};
console.log("userD: ", userD);
// userD.name = "daniel"; // Error: Cannot assign to 'name' because it is a read-only property.
//userD.name = "daniel"; // Error: Cannot assign to 'name' because it is a read-only property.
