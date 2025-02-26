//forEach = method used to iterate over elements of an array
//          apply a specified function (callback)

//          array.forEach(callback)


let numbers = [1,2,3,4,5];

numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

let fruits = ["banana", "apple", "strawberry"];

// fruits.forEach(sortingElement);
fruits.forEach(capitalise);
fruits.forEach(display);

// function sortingElement(element, index, array){
//     array[index] = sort();
// }

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function capitalise(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);

}

function display(element){
    console.log(element);
}