// This is a string type
let myname =  "Bob" 
// The below is a literal type
const myname2 = "Bob"


// Unions
type UserRole = "guest" | "admin" | "member"
let userRole: UserRole = "admin"

// Utility Types and Partial Utility Type
// Like a function they take other types in as a parameter and return a new type, with some changes made to it
// Built-in to Typescript; Perform commonly-needed modifications to existing types
// Use Generics syntax (<>)
type User = {
  id: number
  username: string
  role: "member" | "contributor" | "admin"
}

// Makes all the attributes of the object as optional
type updatedUser = Partial<User>

let nextUserId: number = 1;

const users: User[] = [
  { id: nextUserId++, username: "john_doe", role: "member" },
  { id: nextUserId++, username: "jane_smith", role: "contributor" },
  { id: nextUserId++, username: "alice_jones", role: "admin" },
  { id: nextUserId++, username: "charlie_brown", role: "member" },
];

function updateUser(id: number, updates: updatedUser) {
  const user: User = users.find(userObj => userObj.id === id);
  if (!user) {
    console.error("User not found!")
    return;
  }
  Object.assign(user, updates);
}

// Utility Types and Omit Type
// Omit takes in a type and a string or union of strings property names and returns a new type with those properties removed (Omit<Type, "" | "">)
// Take everything from the User type except the "id" attribute which is provided in the function logic
function addNewUser(newUser: Omit<User, "id">): User {
    const id: number = nextUserId++;
    const user: User = {id, ...newUser};
    users.push(user);
    return user;
}

// Generics
// Add flexibility to existing functions, types, etc
// Act like function parameters, but for types
// Use angle brackets syntax (<>)
// Dive deeper into TypeScript Generics in the documentations
const gameScores = [14, 21, 33, 42, 59];

const favoriteThings = [
  "raindrops on roses",
  "whiskers on kittens",
  "bright copper kettles",
  "warm woolen mittens"
];

const voters = [
  { name: "Alice", age: 42 },
  { name: "Bob", age: 77 }
];

function getLastItem<Type>(array: Type[]): Type | undefined {
  return array[array.length - 1];
}

console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));

// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });
addNewUser({username: "joe_schmoe", role: "member"});
console.log(users)