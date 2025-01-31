//type conversion*****
//change the data type of a value into another (string, number, boolean)

let age;

age = window.prompt("How old are you?"); 
// anything from window prompt is a string, so need to change into Number first

age += 1;

console.log(typeof age, age);

age = Number(age); // conversion

age += 1;

console.log(typeof age, age);

///testinggg

console.log(`test: pizza******`);

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(typeof x, x);
console.log(typeof y, y);
console.log(typeof z, z);

//use numbers to number, string and boolean

console.log(`test: 0*****`);

let a = 0;
let b = 0;
let c = 0;

a = Number(a);
b = String(b);
c = Boolean(c);

console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);

console.log(`test: empty string`);

let d = "";
let e = "";
let f = "";

d = Number(d);
e = String(e);
f = Boolean(f);

console.log(typeof d, d);
console.log(typeof e, e);
console.log(typeof f, f);

console.log(`test: no value at all`);

let h;
let i;
let j;

h = Number(h);
i = String(i);
j = Boolean(j);

console.log(typeof h, h);
console.log(typeof i, i);
console.log(typeof j, j);








