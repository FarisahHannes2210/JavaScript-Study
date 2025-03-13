// static = keyword that defines properties or 
//          methods that belong to a class itself 
//          rather than the objects created 
//          (class owns anything static, not the objects)


class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;

    }

    static getCircumference(radius){
        return 2 * this.PI * radius;

    }

    static getArea(radius){
        return this.PI * radius * radius;

    }

}

const  MathUtil1 = new MathUtil();

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(5));
console.log(MathUtil.getCircumference(3).toFixed(3));
console.log(MathUtil.getArea(5).toFixed(3));


// example 2 --------------------------

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online.`)

    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}!!`)
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");


console.log(user1.username);
console.log(User.userCount);

console.log(user2.username);
console.log(User.userCount);

const user3 = new User("Sandy");

console.log(user3.username);
console.log(User.userCount);

user1.sayHello();
user2.sayHello();
user3.sayHello();

User.getUserCount();