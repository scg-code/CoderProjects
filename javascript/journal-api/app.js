import express from "express";
import { CategoryModel } from "./db.js";
import entryRoutes from "./routes/entry_routes.js"; // import the entry routes
import cors from "cors"; // import cors middleware

const categories = ["Food", "Gaming", "Coding", "Other"]; // array of categories

const app = express(); // create express app

app.use(cors()); // use cors middleware

app.use(express.json()); // use express middleware to parse JSON body

app.get("/", (_, res) => {
  // _ means we don't care about the first argument
  res.send({ info: "Journal API" }); // send back a json object
});

app.get("/categories", async (_, res) => res.send(await CategoryModel.find())); // send back a json object

app.use("/entries", entryRoutes); // use the entry routes



export default app; // export the app