import { EntryModel, closeConnection, CategoryModel } from "./db.js";

const categories = [
  {
    name: "Food",
  },
  {
    name: "Gaming",
  },
  {
    name: "Coding",
  },
  {
    name: "Other",
  },
]; // array of categories

await CategoryModel.deleteMany(); // delete all categories
console.log("Deleted all categories"); // log to console
const cats = await CategoryModel.insertMany(categories); // insert the categories array
console.log("Inserted categories"); // log to console

const entries = [
  { category: cats[0], content: "I ate some toast today" },
  { category: cats[2], content: "I wrote some code today" },
  { category: cats[3], content: "I did something else today" },
  { category: cats[1], content: "I played some games today" },
];

await EntryModel.deleteMany(); // delete all entries
console.log("Deleted all entries"); // log to console
await EntryModel.insertMany(entries); // insert the entries array
console.log("Inserted entries"); // log to console

closeConnection(); // close the connection when the script ends
