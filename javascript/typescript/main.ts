// function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }

// greet("Brendan", new Date());

// async function fn(x: Array<number>): Promise<number> {
//     return x.length;

// }

// let firstName: string = "Brendan";

// console.log(fn([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

type Point = {
  x: number;
  y: number;
  z?: number;
};

function printCoord(pt: Point) {
  //
  console.log(`The coordinate's x value is ${pt.x}`);
  console.log(`The coordinate's y value is ${pt.y}`);
  if (pt.z) {
    console.log(`The coordinate's z value is ${pt.z}`);
  }
}

printCoord({ x: 3, y: 7, z: 5 });

const printID = (id: number | string): void => {
  // Union type
  console.log(`Your ID is: ${id}`);
};

printID(101);

enum Sizes { // Enum type
  Small,
  Medium,
  Large,
}

interface TShirt {
  // Interface type
  size: Sizes;
  color: string;
}

const item: TShirt = { size: Sizes.Medium, color: "navy" };

console.log(Sizes);

abstract class Animal {
  name: string = "";
  age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  abstract makeSound(): void;
}

class Dog extends Animal {
  breed: string = "";

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  makeSound(): void {
    console.log("Woof woof");
  }
}

let ted = new Dog("Ted", 4, "Golden Retriever");

ted.makeSound();
