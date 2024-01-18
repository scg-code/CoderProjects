// function adder(x, y, cb) {
//     cb (x + y);
// }

// adder(5, 10, result => console.log(result)); // 5

// console.log('Done');

// Define a function named getJoke
function getJoke() {
  // Create a new Promise
  return new Promise((resolve, reject) => {
    // Create a new XMLHttpRequest object
    try {
    const req = new XMLHttpRequest();

    // Add an event listener for the "load" event
    req.addEventListener("load", () => {
      // Check if the request status is 200 (successful)
      if (req.status === 200) {
        // If successful, resolve the promise with the response joke
        resolve(req.response.joke);
      } else {
        // If not successful, reject the promise with an error
        reject(new Error("Failed to fetch joke"));
      }
    });

    // Open a GET request to the URL "https://icanhazdadjoke.com/"
    req.open("GET", "https://icanhazdadjoke.com/");
    
    // Set the request header to accept JSON
    req.setRequestHeader("Accept", "application/json");

    // Set the response type to JSON
    req.responseType = "json";

    // Send the request
    req.send();
    }
    catch (error) {
      reject(error);
    }
  });
}

async function fetchJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    }
  });
  const data = await res.json();
  return data.joke;
    // .then(joke => console.log(joke));
}

fetchJoke().then(joke => console.log(joke));
// // const jokes = [];
// // // Call the getJoke function
// // getJoke()
// //  .then(joke => {
// //     jokes.push(joke);
// //     return getJoke();
// //  })
// //  .then(joke => {
// //   jokes.push(joke);
// //   return getJoke();
// //   })
// //   .then(joke => {
// //     jokes.push(joke);
// //     console.log(jokes);
// //   })

// const jokePromises = [];
// for (let i = 0; i < 3; i++) {
//   jokePromises.push(getJoke());
// }

// Promise.all(jokePromises)
//   .then((jokes) => console.log(jokes))
//   .catch((error) => console.log(error));

// // Log "Request Sent!" to the console
console.log("Request Sent!");
