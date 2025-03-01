// .filter() = creates a new array by filtering 
//              out elements.


let numbers = [1,2,3,4,5,6,7,8,9,10];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);


function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

const ages = [16, 17, 18, 18, 14, 20, 45];
let adults = ages.filter(isAdult);
let children = ages.filter(isChildren);

console.log(adults);

console.log(children);

function isAdult(element){
   return element >= 18;
}

function isChildren(element){
    return element < 18;
}

const words = ["coconut", "apple", "banana", "cherry", "pomegranate", "kiwi"];
const longWords = words.filter(isLong);
const shortWords = words.filter(isShort);

console.log(longWords);
console.log(shortWords);

function isLong(element){
    return element.length >= 6;
}

function isShort(element){
    return element.length <= 5;
}