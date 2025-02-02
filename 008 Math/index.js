//Math: built in object that provides 
// a collection of properties and method

console.log(Math.PI);
console.log(Math.E); //eulers number

let x = 34.56;
let y = 7;
let z;

z = Math.round(x);
let n = 8;

console.log(`z rounded: ${z}`);



Math.pow(2, 4); //2 to the power of 4
Math.sqrt(36); //square root
Math.abs(-4); //absolute value (make number positive)
Math.min(2, 3, 4, 5, 6, 7); //finds the minimum value
Math.max(2, 3, 4, 5, 6, 7); //finds the maximum value
Math.floor(2.9); //rounds down
Math.ceil(2.9); //rounds up
Math.random(); //random number
Math.trunc(x); // yeet any decimal portion
Math.log(7); //log
Math.sin(3); //sine
Math.cos(78); //cosine
Math.tan(5); //tangent
console.log(Math.sign(7));

///The Math.sign() method retuns whether a number is 
// negative, positive or zero::::
// If the number is positive, this method returns 1.
// If the number is negative, it returns -1.
// If the number is zero, it returns 0.

let h = Math.max(x,y,z,n);

console.log(`maximum value: `+ h);


