// super = keyword is used in classes to call the
// constructor or access the properties and
// methods of a parent (superclass)
//      this =  this object
//      super = the parent

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);

    this.runSpeed = runSpeed;
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);

    this.swimSpeed = swimSpeed;
  }
}

class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);

    this.flySpeed = flySpeed;
  }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 100, 40);
const hawk = new Hawk("hawk", 20, 120);

console.log(
  `Rabbit: [Name: ${rabbit.name}, Age: ${rabbit.age}, Run Speed: ${rabbit.runSpeed}`
);
console.log(
  `Fish: [Name: ${fish.name}, Age: ${fish.age}, Swim Speed: ${fish.swimSpeed}`
);
console.log(
  `Hawk: [Name: ${hawk.name}, Age: ${hawk.age}, Fly Speed: ${hawk.flySpeed}`
);

// my example practices

class Employee {
  constructor(employeeId, name, employeeType, salary) {
    this.employeeId = employeeId;
    this.name = name;
    this.employeeType = employeeType;
    this.salary = salary;
  }
}

class Administration extends Employee {
  constructor(employeeId, name, employeeType, salary, adminSkill) {
    super(employeeId, name, employeeType, salary);
    this.adminSkill = adminSkill;
  }
}

class Programmer extends Employee {
  constructor(employeeId, name, employeeType, salary, programmingLang) {
    super(employeeId, name, employeeType, salary);
    this.programmingLang = programmingLang;
  }
}

class Marketing extends Employee {
  constructor(employeeId, name, employeeType, salary, socialMedia) {
    super(employeeId, name, employeeType, salary);
    this.socialMedia = socialMedia;
  }
}

const admin1 = new Administration(
  "E7623",
  "John",
  "Permenant Worker",
  3200,
  "Human Resource"
);
const programmer1 = new Programmer(
  "E9344",
  "Sabrina",
  "Contract Worker",
  5600,
  "C++"
);
const marketing1 = new Marketing("E4325", "Louis", "Intern", 700, "Instagram");

console.log(`Admin Dept [
            Employee Id: ${admin1.employeeId}
            Name: ${admin1.name}
            Employee Type: ${admin1.employeeType}
            Salary: $${admin1.salary.toFixed(2)}
            Admin Skill: ${admin1.adminSkill}]`);


