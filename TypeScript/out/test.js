// This is a string type
let myname = "Bob";
// The below is a literal type
const myname2 = "Bob";
let userRole = "admin";
let nextUserId = 1;
const users = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_smith", role: "contributor" },
    { id: nextUserId++, username: "alice_jones", role: "admin" },
    { id: nextUserId++, username: "charlie_brown", role: "member" },
];
function updateUser(id, updates) {
    const user = users.find(userObj => userObj.id === id);
    if (!user) {
        console.error("User not found!");
        return;
    }
    Object.assign(user, updates);
}
// Utility Types and Omit Type
// Omit takes in a type and a string or union of strings property names and returns a new type with those properties removed (Omit<Type, "" | "">)
// Take everything from the User type except the "id" attribute which is provided in the function logic
function addNewUser(newUser) {
    const id = nextUserId++;
    const user = Object.assign({ id }, newUser);
    users.push(user);
    return user;
}
// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });
addNewUser({ username: "joe_schmoe", role: "member" });
console.log(users);
//# sourceMappingURL=test.js.map