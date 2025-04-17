// date objects = objects that contain values that represents
//                dates and times.
//                  these date objects can be changed and formatted


//date now.
const date = new Date();


//Date (year, month, day, hour, minute, second, ms)
let customDate = new Date(2001, 0, 1, 2,3,4,5);

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
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let dayOfWeek = date.getDay();

switch(dayOfWeek){

    case 1:
        dayOfWeek = "Monday";
        // console.log(`Its Monday`);
        break;
    case 2:
        dayOfWeek = "Tuesday";
        // console.log(`Its Tuesday`);
        break;
    case 3:
        dayOfWeek = "Wednesday";
        // console.log(`Its Wednesday`);
        break;
    case 4:
        dayOfWeek = "Thursday";
        // console.log(`Its Thursday`);
        break;
    case 5:
        dayOfWeek = "Friday";
        // console.log(`Its Friday`);
        break;
    case 6:
        dayOfWeek = "Saturday";
        // console.log(`Its Saturday`);
        break;
    case 0:
        dayOfWeek = "Sunday";
        // console.log(`Its Sunday`);
        break;
    default:
        console.log(`Thats not a day`);      
}


console.log("year: " + year);
console.log("month: " + (month + 1));
console.log("day: " + day);
console.log("hours: " + hours);
console.log("minutes: " + minutes);
console.log("seconds: " + seconds);
console.log("day of the week: " + dayOfWeek);

// -------------- we can set date too
date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);

console.log(date);

//-----can compare date too

// usual date format is : YYYY-MM-DD
let date1 = new Date("2023-12-31");
let date2 = new Date("2024-01-01");

if(date2 > date1){
    console.log(`HAPPY NEW YEAR!`);
}

let birthday1 = new Date("2001-10-22");
let birthday2 = new Date("1968-02-06");

if(birthday1 > birthday2){
    console.log("b1 is younger.");
}
else{
    console.log("b1 is older.");
}
