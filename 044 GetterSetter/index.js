// getter = special method that makes a property readable
// setter = special method that makes a property writeable

//validate and modify a value when reading/writing a property

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;

    }

    // validate the data to its only preferred value
    //  _height, _width means private property
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }

    // return the data into smth we want, either the basic or more personalised.
    get width(){
        return `${this._width.toFixed(1)}cm`;
    }

    get height(){
        return `${this._height.toFixed(1)}cm`;
    }

    get area(){
        return  `${(this._width * this._height).toFixed(1)}cm^2`;
    }
}

// we make getter setter so ppl wont be giving data like this lol
const rectangle = new Rectangle(8, 7);

// rectangle.width = -847535;
// rectangle.height = "pizzaaaa";

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }

    set firstName(newFirstName){

        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("Name must be words.");
        }


    }

    set lastName(newLastName){

        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Name must be words.");
        }

    
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a positive number or in Numbers");
        }

        
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get age(){
        return this._age;
    }

    get fullName(){
        return `${person1._firstName} ${person1._lastName}`;
    }




}

const person1 = new Person("Sabrina", "Smith", 45);

console.log(`Name: ${person1.fullName}, Age: ${person1.age}`);
