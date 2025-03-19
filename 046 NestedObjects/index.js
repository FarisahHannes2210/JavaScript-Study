// nested objects = objects inside of other objects
//                   allows you to represent more complex data structures
//                  Child Object is enlosed by a Parent Object

//      Person{Address{}, ContactInfo{}}
//      ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// ------------------ EXAMPLE 1 ---------------------

const person = {
  fullName: "Spongebob Sqaurepants",
  age: 30,
  isStudent: true,
  hobbies: ["karate", "jellyfishing", "cooking"],
  address: {
    street: "124 Conch St.",
    city: "Bikini Bottom",
    country: "Int. Water",
  },
};

console.log(`Fullname: ${person.fullName}`);
console.log(`Age: ${person.age}`);
console.log(`Student?  ${person.isStudent}`);
console.log(`Hobbies: ${person.hobbies[0]}`);
console.log(`Current City: ${person.address.city}`);

// WRITE FULL ADDRESS

for (const property in person.address) {
  console.log(person.address[property]);
}

// ------------------ EXAMPLE 2 ---------------------

//  parent object
class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

//  child object
class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person(
  "Louis The First",
  30,
  "39 Jardine Road",
  "Birmingham",
  "United Kingdom"
);

const person2 = new Person(
  "Margaret William",
  67,
  "89 Watermelon Street",
  "Fruit Province",
  "HealthyCount."
);

const person3 = new Person(
    "John Doe",
    27,
    "67 Pompopurin Road",
    "San Gen 1 County",
    "United Sanrio Nation"
  );


  console.log(person1.address);
  console.log(person1.address.city);
  
