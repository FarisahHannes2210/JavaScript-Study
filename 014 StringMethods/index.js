//String methods: allow you to manipulate 
// and work with texts (Strings)

let userName = "FunkyHobbit   ";

console.log(userName.charAt(9)); // get letter on its index.
console.log(userName.indexOf("n")); // get index of letter(first that appear)
console.log(userName.lastIndexOf("b")); // get index of letter(last that appear)
console.log(userName.length); // get length

userName = userName.trim();  // trim any white spaces
console.log(userName);
// console.log(userName);

userName = userName.toUpperCase(); // make all into uppercase
console.log(userName);

userName = userName.toLowerCase(); // make all into lowercase
console.log(userName);

userName = userName.repeat(3); // repeat string n times
console.log(userName);

//============================================================

let otter = "Martini The Troublemaker";
let result = otter.startsWith(" ");
let backResult = otter.endsWith(" ");
let includeResult = otter.includes(" ");
console.log("front have whitespace: " + result);
console.log("back have whitespace: " + backResult);
console.log("includes whitespace: " + includeResult);

if(result){
    console.log(`Your otter's name cant begin with a whitespace`);

}
else{
    console.log(`${otter}?? What a nice name!!`);
}

//============================================================

let phoneNumber = "123-456-789";
console.log(`Not Replaced: ${phoneNumber}`);

//replace all "-" into nothing whatever we want
phoneNumber = phoneNumber.replaceAll("-", "@");
console.log(`Replaced: ${phoneNumber}`);

//============================================================
let idNumber = "890212-889";
console.log(`Not padded: ${idNumber}`);

//pad start with smth using "0" until theres n lengths
idNumber = idNumber.padStart(15, "0");
console.log(`Padded at the Start: ${idNumber}`);

//============================================================

let cattoId = "2837464";
console.log(`Not end padded: ${cattoId}`);

//pad end with smth using "0" until theres n lengths
cattoId = cattoId.padEnd(15, "0");
console.log(`Padded at the end: ${cattoId}`);



