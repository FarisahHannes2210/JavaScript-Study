// this =  reference to the object where THIS is used
//          ( the object depends on this immediate context)
//          person.name =  this.name


const person1 = {
    name: "Spongebob",
    favfood: "Krabby Patty",
    sayHello: function(){console.log(`Hi!! I am ${this.name}!!`)},
    eat: function(){console.log(`I like eating ${this.favfood}.`)}
}

const person2 = {
    name: "Patrick",
    favfood: "Vegetables",
    sayHello: function(){console.log(`Hi!! I am ${this.name}!!`)},
    eat: function(){console.log(`I like eating ${this.favfood}.`)}
}

person1.sayHello();
person1.eat();

person2.sayHello();
person2.eat();