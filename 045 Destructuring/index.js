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

