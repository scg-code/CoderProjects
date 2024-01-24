import { EntryModel } from "./db.js";

const entries = [
    { category: "Food", content: "I ate some toast today" },
    { category: "Coding", content: "I wrote some code today" },
    { category: "Other", content: "I did something else today" },
    { category: "Gaming", content: "I played some games today" },
  ];

await EntryModel.deleteMany(); // delete all entries
console.log("Deleted all entries"); // log to console
await EntryModel.insertMany(entries); // insert the entries array
console.log("Inserted entries"); // log to console

closeConnection(); // close the connection when the script ends
