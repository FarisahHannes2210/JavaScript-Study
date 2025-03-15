// inheritence = allows a new class to inherit properties
//  and methods from an existing class (parent -> child)
// helps with code reusability

// parent-child method -> some code can be for general, and in child, can be specific to that child.
// eg.        parent -> vehicle (engine(), fuel(), lights())
//            child -> bicycle, mototrcycle, car, bus, lorry, plane etc.


class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating.`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping.`);
    }

}

class Rabbit extends Animal{
    name = "rabbit";
    alive = true;

    run(){
        console.log(`This ${this.name} is running.`);
    }
}

class Fish extends Animal{
    name = "fish";
    alive = false;

    swim(){
        console.log(`This ${this.name} is swimming.`);
    }
}

class Hawk extends Animal{
    name = "hawk";
    alive = true;
    fly(){
        console.log(`This ${this.name} is flying.`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
fish.sleep();

console.log(fish.alive);
rabbit.run();
fish.swim();
hawk.fly();
