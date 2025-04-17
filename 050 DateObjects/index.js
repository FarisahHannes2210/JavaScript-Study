// date objects = objects that contain values that represents
//                dates and times.
//                  these date objects can be changed and formatted


//date now.
const date = new Date();


//Date (year, month, day, hour, minute, second, ms)
let customDate = new Date(2024, 0, 1, 2,3,4,5);

//given amount of time in ms since epic(when the date since my computer starts began)
let dateBackThen = new Date(0);

let trysomething = new Date(1700000000000);

console.log(date);
console.log(customDate);

console.log(dateBackThen);
console.log(trysomething);

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hours = date.getHours();

console.log("year: " + year);
console.log("month: " + (month + 1));
console.log("day: " + day);
console.log("hours: " + hours);
