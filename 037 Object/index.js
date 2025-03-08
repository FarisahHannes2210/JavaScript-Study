// object =  a collection of related properties 
//          and/or methods that can present real 
//          world objects (people, products, places)
//      object =  { key:value, function()}



const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){ console.log(`Hi, I'm Spongebob!!`)},
    eat: function(){ console.log(`Hey, I'm Krabby Patty`)},
}


const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 35,
    isEmployed: false,
    sayHello: function(){ console.log(`Hey, I'm Patrick...`)},
    eat: function(){ console.log(`Hey, I'm eating beef`)},
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person.sayHello();
person2.sayHello();

person.eat();
person2.eat();

