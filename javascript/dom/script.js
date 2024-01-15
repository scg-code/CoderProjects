// const newDiv = document.createElement("div");
// console.log(newDiv);

// newDiv.innerHTML = '<h2 style="color: blue;">Hello World</h2>';
// newDiv.id = "hello";

// document.body.insertBefore(newDiv, document.querySelector("ul"));
// const myColor = 'blue';
// document.body.innerHTML += `<div id="hello"> <h2 style="color: blue;">Hello World</h2> </div>`;

const items = [ // Array of strings
  "Adding to the DOM",
  "Querying the DOM",
  "Changing the DOM",
  "Event Listeners",
];

const ul = document.querySelector("ul"); // Select the ul element

// for (let item of items) { 
//   ul.innerHTML += `<li>${item}</li>`; // Add each item to the ul
// }

const lis = items.map(item => `<li>${item}</li>`); // Create an array of li elements
console.log(lis);
ul.innerHTML += lis.join(""); // Join the array and add it to the ul