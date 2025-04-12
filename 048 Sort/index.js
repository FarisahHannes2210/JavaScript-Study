// sort() = method used to sort elements of an array
//          sorts elements as strings in lexicographic order,
//          not alphabetical order (alphabetical order = abcdefghijklmno)
//          lexicographic = (alphabet + numbers + symbols) as strings

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort();

console.log(fruits);

let numbers = [34, 3, 2, 234, 45, 23, 67];

numbers.sort((a, b) => a - b); // this is in asc order

numbers.sort((a, b) => b - a); // this is in desc order

console.log(numbers);

//-----------------------------------------

const people = [
  { name: "Spongebob", age: 30, gpa: 3.0 },
  { name: "Patrick", age: 37, gpa: 1.5 },
  { name: "Sandy", age: 27, gpa: 4.0 },
  {name: "Squidward", age: 67, gpa: 3.6}
];

people.sort((a,b) => a.age - b.age);

console.log(people);
