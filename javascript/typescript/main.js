"use strict";
// function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
function printCoord(pt) {
  //
  console.log(`The coordinate's x value is ${pt.x}`);
  console.log(`The coordinate's y value is ${pt.y}`);
  if (pt.z) {
    console.log(`The coordinate's z value is ${pt.z}`);
  }
}
printCoord({ x: 3, y: 7, z: 5 });
const printID = (id) => {
  // Union type
  console.log(`Your ID is: ${id}`);
};
printID(101);
var Sizes;
(function (Sizes) {
  Sizes[(Sizes["Small"] = 0)] = "Small";
  Sizes[(Sizes["Medium"] = 1)] = "Medium";
  Sizes[(Sizes["Large"] = 2)] = "Large";
})(Sizes || (Sizes = {}));
const item = { size: Sizes.Medium, color: "navy" };
console.log(Sizes);
class Animal {
  constructor(name, age) {
    this.name = "";
    this.age = 0;
    this.name = name;
    this.age = age;
  }
}
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = "";
    this.breed = breed;
  }
  makeSound() {
    console.log("Woof woof");
  }
}
let ted = new Dog("Ted", 4, "Golden Retriever");
ted.makeSound();
