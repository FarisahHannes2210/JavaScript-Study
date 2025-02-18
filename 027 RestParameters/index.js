//rest parameters = (...rest) allow a function work with a variable
// number of arguments by bundling them into an array.

//spread = (...) expand an array into seperate elements
//rest = bundles seperate elements into an array

//---------------openfridge------------------

// function openFridge(...foods){
//     console.log(...foods);

// }

// function getFood(...foods){
//     return foods;
// }

// const food1 = "pizza";
// const food2 = "sushi";
// const food3 = "pasta";  
// const food4 = "burger";

// // openFridge(food1, food2, food3, food4);

// const foods = getFood(food1, food2, food3, food4);

//----------------NUmbers-------------------

// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result = result + number;
//     }
//     return result;
// }

// function getAverage(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result = result + number;
//     }
//     return result/numbers.length;
// }

// const total = sum(1,3,4,5,6,3,4);
// console.log(`Your total is $${total}`);

// const average = getAverage(1,3,4,5,6,3,4);
// console.log(`Your average is ${Math.floor(average)}`);


//---------------combine strings-----------------

function combineStrings(...name){

return name.join(" ");

}

const fullName = combineStrings("Mr", "Spongebob", "Squarepants");

console.log(fullName);



