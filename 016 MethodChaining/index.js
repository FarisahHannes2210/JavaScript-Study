// method chaining =  calling one method after another in
//  one continous line of code

//------ NO METHOD CHAINING ---------


let username = window.prompt("Enter your Username: ");

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraLetters = username.slice(1);
// extraLetters = extraLetters.toLowerCase();

// username = letter + extraLetters;
// console.log("no method chaining: " + username);



//------ METHOD CHAINING ---------

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log("method chaining: " + username);




