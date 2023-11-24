import { apiKey } from "./util.js";
console.log(apiKey);

// objects and classes

const user = {
  name: "max",
  age: 34,
  greet() {
    console.log("hello");
    console.log(this.age);
  },
};

user.greet();

class User {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }

  greet() {
    console.log("Hi!");
  }
}

const user2 = new User(30, "chris");

console.log(user2);
user2.greet();

// ----------------------------------------

// Arrays

const hobbies = ["coding", "gym", "video games"];

const index = hobbies.findIndex((item) => item == "sports");

console.log(index);

const transformed = hobbies.map((item) => {
  return item.toUpperCase();
});

console.log(transformed);

// --------------------------------------------

// Destructing

const userNameData = ["chris", "east"];

const [firstName, lastName] = userNameData;

console.log(firstName, lastName);

const user3 = {
  name: "max",
  age: 34,
  greet() {
    console.log("hello");
    console.log(this.age);
  },
};

const { name: userName, age } = user3;
console.log(userName, age);

// -------------------------------------

// Spread operator

const newHobbies = [...hobbies, "test"];

console.log(newHobbies);

const user4 = {
  name: "max",
  age: 34,
};

const extendedUser = {
  ...user4,
  idAdmin: true,
};

console.log(extendedUser);
// ------------------------------------
