///  constructor = special method for defining the
//                  properties and methods of objects

function Car(make, model, year, colour){

    this.make = make;
    this.model = model;
    this.year = year;
    this.colour = colour;
    this.drive = function(){
        console.log(`You drive the ${make} ${model} car!`);
    }

}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Mazda", "Neo", 2009, "black");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.colour);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.colour);

car1.drive();
car2.drive();