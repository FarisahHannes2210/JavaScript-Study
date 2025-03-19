const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 657 },
  { name: "banana", color: "yellow", calories: 345 },
  { name: "strawberry", color: "red", calories: 34 },
  { name: "peach", color: "pink", calories: 87 },
];


// print specific data
console.log(fruits[2].name);

// delete the last row
// fruits.pop();

// insert new data at the last row
fruits.push({ name: "grapes", color: "purple", calories: 453 });

// yeet row based on row number inserted
// fruits.splice(0,2);

console.log(fruits);


// ---------------- forEach() ----------------
fruits.forEach(fruit => console.log(fruit));
fruits.forEach(fruit => console.log(fruit.name));

// ---------------- map() ----------------

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
console.log(fruitNames);
console.log(fruitColors);

// ---------------- filter() ----------------

const redFruits = fruits.filter(fruit => fruit.color === "red");
console.log(redFruits);

const lowCalories = fruits.filter(fruit => fruit.calories < 100);
console.log(lowCalories);

const highCalories = fruits.filter(fruit => fruit.calories >= 100);
console.log(highCalories);
