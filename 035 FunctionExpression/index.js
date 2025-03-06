// function expression =  a way to define functions
//                          as values or variables


// DONT CONFUSE WITH FUNCTION DECLARATION
// func declaration = define reusable block of code that 
//                      performs a specific task


// function hello(){
//     console.log("hello");
// }

//assign a function on a var
// const hello = function(){
//     console.log("hello");
// }

// hello();

setTimeout(function(){
    console.log("Hello");
}, 3000);

//basically setTimeout(function hello, 3000);

//--------------------------------------------------
//no func expression

const numbers = [1,2,3,4,5,6];
// const squares = numbers.map(square);
// console.log(squares);

// function square(element){
//     return Math.pow(element, 2);
// }

//------------------------------------------------
//with func expression

const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});

console.log(squares);

const cubes = numbers.map(
    function (element){
        return Math.pow(element, 3);
    });

 console.log(cubes);   


 const evenNums = numbers.filter(function (element){
    return element % 2 === 0;
 });

 console.log(evenNums);


 const oddNums = numbers.filter(function (element){
    return element % 2 !== 0;
 });

 console.log(oddNums);

 const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
 });

 console.log(total);