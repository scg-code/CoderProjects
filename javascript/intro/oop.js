// Python
// class Person :
//    def __init__(self,name,age):
//        self.name = name
//        self.age = age
//
// x = Foo()

// JavaScript
// class Foo {}
// const x = new Foo()

// function Person(name,age){
//     this.name = name;
//     this.age = age;

//     this.greet = () => {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
//     }
// }

// class Person { // ES6 syntactic sugar
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`); // ES6 template string
//     }
// }

// const person = new Person('John',20);
// // person.name = "John";
// person.age = 22;

// person.greet();

class Rectangle {
  #width; // private property
  #height; // private property
  constructor(width, height) {
    // constructor is a special method that is called when an object is created
    this.#width = width;
    this.#height = height;
  }

  get width() {
    // getter
    return this.#width; // this is a property
  }

  set width(value) {
    // setter
    if (typeof value === "number") {
      this.#width = value;
    } else {
      throw new Error("Width must be a number");
    }
  }

  get area() {
    // getter
    return this.#width * this.#height; // this is a property
  }
}

// Python
// Class Square(Rectangle):

// JavaScript
class Square extends Rectangle {
  // inheritance

  constructor(size = 5) {
    super(size, size); // call the parent constructor
  }
}

const x = new Square((size = 20)); // create an object
console.log(x.area); // call a method
