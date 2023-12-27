// let str = 'Hello World'

// console.log(str.replaceAll('o', '---')) // Hell--- W---rld

// Python: print(f'hello, {name}')
// console.log(`hello, ${str}`) // hello, Hello World 
// console.log(`Answer: ${2 + 2}`) // Answer: 4

// console.log(Math.floor(3 / 2)) // 1.5 

// let x = 5
// console.log(++x)
// // increment X (Python: x += 1)
// // x++
// console.log(x)

// console.log(123 == 123)
// console.log(123 === '123')

// let x = 5

// console.log(typeof x) // number

// Python: person = {'name': 'John', 'age': 36}
// let person = { 
//     name: 'John',
//     age: 36 
// }

// console.log(person.name) // John

// x = [1, 2, 3, 4, 5, true, 'hello', [1, 2, 3]]

// console.log(x)

// Python
// def add(x, y):
//     return x + y
// function add(x, y) {
//     return x + y
// }

// const Utils = { 
//     add: (x, y) => x + y, // arrow function 
//     double: x => x * 2,
//     squares: arr => arr.map(x => x ** 2) 
// }

// console.log(Utils.add(2, 3)) // 5
// // console.log(square(10)) 

// const numbers = [1, 2, 3, 4, 5]
// const result = Utils.squares(numbers)
// console.log(result) // [1, 4, 9, 16, 25]

// const people = ['John', 'Mary', 'Bob', 'Jane']

// const [first, second, ...others] = people // unpacking

// // const first = people[0]
// // const second = people[1]

// console.log(first, second, others) // John Mary [ 'Bob', 'Jane' ]

// const bobBirds = ['pigeon', 'sparrow', 'cockatoo', 'falcon']
// const sallyBirds = ['goose', 'eagle', 'owl', 'duck']

// const allBirds = [...bobBirds, ...sallyBirds, 'Kookaburra'] // spread operator/ expansion operator

// console.log(allBirds) // [ 'pigeon', 'sparrow', 'eagle', 'falcon', 'pigeon', 'eagle', 'owl', 'duck' ]

const me = { name: 'John', age: 36, hobbies: ['coding', 'reading', 'gaming'] }
const me2 = { ...me, name: 'Bob', age: 30 }

console.log(me2) // { name: 'Bob', age: 30, hobbies: [ 'coding', 'reading', 'gaming' ] }
console.log(me) // { name: 'John', age: 36, hobbies: [ 'coding', 'reading', 'gaming' ] }