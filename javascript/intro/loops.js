// let count = 3

// while (count > 0) {
//     console.log(count--)
// }

// Python - For Loop
// for i in range(3):
//     print(i)

// JavaScript - 3 part for loop
// initializer runs once, before the loop starts
// condition will be checked before each iteration
// post-iteration code runs after each iteration

// const numbers = [1, 2, 3, 4, 5]

// let res = []
// for (let i = 0, x = 1; i < numbers.length; i++, x+=2) {
//     res.push(`${x}. ${numbers[i]}`)
// }
// console.log(res)


// // fibonacci sequence
// for (let prev=1, next=1; next <= 1000; tmp=next, next+=prev, prev=tmp) { // 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 
//     console.log(next)
// }

const favFoods = ['Pizza', 'Burgers', 'Ice Cream', 'Pasta', 'Salad']

// Python - For Loop
// for food in favFoods:
//     print(food)

// for (let i = 0; i < favFoods.length; i++) {
//     console.log(`${i + 1}. ${favFoods[i]}`);
// }

favFoods.forEach((food, index) => { // arrow function
    console.log(`${index + 1}. ${food}`) // 1. Pizza 2. Burgers 3. Ice Cream 4. Pasta 5. Salad
})