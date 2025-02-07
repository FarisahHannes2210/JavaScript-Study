//arithmetic operators

console.log(`Arithmetic operators*****`);

// + operator
let students = 30;
students = students + 1;

//- operator
let classOfThisSchool;
classOfThisSchool = 6;
classOfThisSchool = classOfThisSchool - 4;

console.log(`the amount of student in this class is ${students}`);

console.log(`Theres ${classOfThisSchool} of classes in this school`);

students = students * 2;
console.log(`the amount of student(multiply) in this class is ${students}`);

students = students/3;
console.log(`the amount of student(divide) in this class is ${students}`);

// ** this is the power of 2

students = students ** 2;
console.log(`the amount of student(power of 2) in this class is ${students}`);

students = students ** 3;
console.log(`(power of 3) in this class is ${students}`);

//remainder operator(modulus)
students = students % 8;
console.log(`(remainder operator) in this class is ${students}`);

//augmented assigment operators*****
students += 1;
console.log(`(augmented assignment +1) in this class is ${students}`);

students -= 2;
console.log(`(augmented assignment -1) in this class is ${students}`);

students *= 3;
console.log(`(augmented assignment *3) in this class is ${students}`);

//increment operator*****
students ++;
console.log(`(increment operator) in this class is ${students}`);

console.log(`operator precedence****`);

//**operator precedence*****
// 1. parenthesis()
// 2. exponents **2
// 3. multiplication
// 4. addition & subtraction */

let result = 1 + 6 * 5 - 2 **2;
console.log(` result is: ${result}`);

let expo = 2**2;
console.log(` exponent is: ${expo}`);

let mull = 6*5;
console.log(` multi is: ${mull}`);

result = 1 + mull - expo;
console.log(` result is to see if correct: ${result}`);

let ress = (3+5) * 2 /4;
console.log(` ress is: ${ress}`);














