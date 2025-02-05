//string slicing = creating a substring from
//a portion of another string
// string.slice(start, end)

const fullName = "Funky Hobbit Time";

let firstName = fullName.slice(0, 8);
console.log(firstName);

let middleName = fullName.slice(6, 8);
console.log(middleName);

let lastName = fullName.slice(13);
console.log(lastName);

let firstChar = fullName.slice(0,1);
console.log(firstChar);

let lastChar = fullName.slice(-1);
console.log(lastChar);

let moreLastChar = fullName.slice(-3);
console.log(moreLastChar);

//make it more dynamic to use(combine slice with indexOf method)

let newFirstName = fullName.slice(0,fullName.indexOf(" "));
console.log(newFirstName);

let newFirstMiddleName = fullName.slice(0,fullName.lastIndexOf(" "));
console.log(newFirstMiddleName);

let newLastName = fullName.slice(fullName.lastIndexOf(" ")+1);
console.log(newLastName);

const email = "FunkyHobbit1@gmail.com";

let username = email.slice(0, email.indexOf("@"));
console.log(`Username: ${username}`);

let extension = email.slice(email.indexOf("@") + 1);
console.log(`Extension: ${extension}`);
