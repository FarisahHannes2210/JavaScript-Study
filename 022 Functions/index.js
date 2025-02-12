//function = a set of reusable code

function happyBirthday(){
    console.log(`Happy Birthday to you!`);
}

function birthdayName(name, age){
    console.log(`Happy Birthday dear ${name}!`);
    console.log(`You are ${age} years old.`);
}


    let name = window.prompt("Whats your name?");
    let age = window.prompt("How old are you?");
    age = Number(age);

    happyBirthday();
    happyBirthday();
    birthdayName(name, age);
    happyBirthday();

//------new functionnn----

console.log("-----New Function----");

let result;
function add(x, y){
    result = x + y;
    return result;
}
function subtract(x,y){
    return x - y;
}
function isEven(number){
    // if(number % 2 === 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    return number % 2 === 0 ? true : false;

}

function isValidEmail(email){

    return email.includes("@")? true : false;
    
}

let answer = add(9,6);
console.log(`Answer for add is: ${answer}`);
// subtract(8,4);
console.log(`Answer for subtract is: ${subtract(8,4)}`);

let number = window.prompt(`give me a number`);
number = Number(number);

console.log(`Is ${number} an even number? ${isEven(number)}`);

console.log(`------CHECK EMAIL------`);
let email = window.prompt(`Email please:`);
console.log(`Email: ${email}`);
console.log(`Valid Email: ${isValidEmail(email)}`);


