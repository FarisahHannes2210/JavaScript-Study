//array =  a variable like structure that can hold
// more than 1 value


let fruits = ["apple", "rambutan", "banana"];

fruits[3] = "grapes";
fruits.push = "coconut"; // add after the last element
fruits.pop(); // remove the last element
fruits.unshift("mango"); // add before the first element
fruits.shift(); // remove the first element

console.log(fruits);

// quantity of elements inside the array
let numOfFruits = fruits.length;
console.log(numOfFruits);

//number of the element position
let index = fruits.indexOf("banana");
console.log(index);

for(let i = 0; i < fruits.length; i++){

 console.log(fruits[i]);

}

fruits.sort();

for(let fruit of fruits){
    console.log(fruit);
}

fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}


