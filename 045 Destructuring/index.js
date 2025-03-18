// Destructuring = extract values from arrays and objects,
//                  the assign them to variables in a convenient way
//                  [] = to perform array destructuring
//                  {} = to perform object destructuring

// ---------------- EXAMPLE 1 -----------------
//  SWAP THE VALUE OF 2 VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// ---------------- EXAMPLE 2 -----------------
//  SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// ---------------- EXAMPLE 3 -----------------
//  ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors1 = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor] = colors1;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

// ---------------- EXAMPLE 4 -----------------
//  EXTRACT VALUES FROM OBJECTS

const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  job: "Chef",
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 34,
};

// const {firstName, lastName, age, job} = person1;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

const { firstName, lastName, age, job = "Unemployed" } = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);


