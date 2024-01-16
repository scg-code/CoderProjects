// function adder(x, y, cb) {
//     cb (x + y);
// }

// adder(5, 10, result => console.log(result)); // 5

// console.log('Done');

function getJoke(cb) {
  //2. creating a function that takes a callback XHR
  const req = new XMLHttpRequest(); // creating a new request object
  req.addEventListener("load", (event) => cb(event.target.response.joke)); // adding an event listener for when the request loads
  req.open("GET", "https://icanhazdadjoke.com/"); // opening the request
  req.setRequestHeader("Accept", "application/json"); // setting the header to accept json
  req.responseType = "json"; // setting the response type to json
  req.send(); // sending the request
}

//1. call getjoke and pass a callback function
getJoke((joke) => console.log(joke)); // getting the response text

console.log("Request Sent"); // getting the response text
