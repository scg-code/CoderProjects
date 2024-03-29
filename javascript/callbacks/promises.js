const x = 2;
const y = "dsjfhsfs";

function adder(a, b) {
  return a + b;
}

// Function adderPromise takes two parameters x and y and returns a new Promise.
async function adderPromise(x, y) {
  // creating a new promise

  // Checking if x and y are numbers
  if (typeof x === "number" && typeof y === "number") {
    // calling the adder function to add x and y
    const answer = adder(x, y);
    // resolving the promise with the answer
    return answer;
  } else {
    // rejecting the promise with an error message
    throw "X and Y must be numbers";
  }
}

// Calling the adderPromise function with arguments 10 and 20
async function doStuff() {
  const value = await adderPromise(10, 20);
  // .then((value) =>
  //   adderPromise(value, 100).then((answer) => console.log(answer))
  // )
  // .catch((error) => console.log(error));
  console.log(value);
}
doStuff();

adderPromise(3.14, 2.7)
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

// Logging a message to the console without waiting for the promise to resolve
console.log("Not waiting for promise to resolve");
