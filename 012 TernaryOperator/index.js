// ternary operator = a shortcut to if{} and else{} statement.
// condition ? codeIfTrue : codeIfFalse ;

let age = 21;
let message = age >= 18 ? "You're an adult" : "You're a kid" ;
console.log(message);

let time = 9;
let greeting = time < 12 ? "Good Morning" : "Good Afternoon" ;
console.log(greeting);

// boolean in ternary operator

let isStudent = false;
let confirm = isStudent ? "You are a student" : "You are not a student" ;
console.log(confirm);

let purchaseAmount = 12;
let discount = purchaseAmount >= 100 ? 10: 0 ;
discount = purchaseAmount - (purchaseAmount * (discount/100));
console.log(`Total Payment: $${discount}`);