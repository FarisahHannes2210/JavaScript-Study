// nested objects = objects inside of other objects
//                   allows you to represent more complex data structures
//                  Child Object is enlosed by a Parent Object

//      Person{Address{}, ContactInfo{}}
//      ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}


const person = {
    fullName: "Spongebob Sqaurepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking" ],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water"

    }
}

console.log(`Fullname: ${person.fullName}`);
console.log(`Age: ${person.age}`);
console.log(`Student?  ${person.isStudent}`);
console.log(`Hobbies: ${person.hobbies[0]}`);
console.log(`Current City: ${person.address.city}`);

// WRITE FULL ADDRESS

for(const property in person.address){
    console.log(person.address[property] + " ");
    
}
