import express from "express";
import { EntryModel, CategoryModel } from "./db.js";

const categories = ["Food", "Gaming", "Coding", "Other"]; // array of categories

const app = express(); // create express app

app.use(express.json()); // use express middleware to parse JSON body

app.get("/", (_, res) => {
  // _ means we don't care about the first argument
  res.send({ info: "Journal API" }); // send back a json object
});

app.get("/categories", async (_, res) => res.send(await CategoryModel.find())); // send back a json object

app.get("/entries", async (_, res) => res.send(await EntryModel.find())); // send back a json object

app.get("/entries/:id", async (req, res) => {
  const entry = await EntryModel.findById(req.params.id);
  if (entry) {
    res.send(entry); // send back a json object
  } else {
    res.status(404).send({ error: "Entry not found" }); // send back a json object
  }
});

app.post("/entries", async (req, res) => {
  try {
    //   console.log(req.body); // log the request body to the console
    // 1. get the category and content from the request body
    // 2. validate the category and content
    // 3. create a new entry object

    // 4. add the entry to the entries array
    const insertedEntry = await EntryModel.create(req.body);
    // 5. respond with 201 Created and the new entry
    // 6. if there is an error, respond with 400 Bad Request
    res.status(201).send(insertedEntry); // send back a json object
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: err.message });
  }
});

app.put("/entries/:id", async (req, res) => {
  // update an entry
  try {
    const updatedEntry = await EntryModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (updatedEntry) {
      res.send(updatedEntry); // send back a json object
    } else {
      res.status(404).send({ error: "Entry not found" }); // send back a json object
    }
  } catch (err) {
    // if there is an error, respond with 400 Bad Request
    console.log(err); // log the error to the console
    res.status(400).send({ error: err.message });
  }
});

app.delete("/entries/:id", async (req, res) => {
  // delete an entry
  try {
    const deletedEntry = await EntryModel.findByIdAndDelete(req.params.id);
    if (deletedEntry) {
      res.sendStatus(204); // send back a json object
    } else {
      res.status(404).send({ error: "Entry not found" }); // send back a json object
    }
  } catch (err) {
    // if there is an error, respond with 400 Bad Request
    console.log(err); // log the error to the console
    res.status(400).send({ error: err.message });
  }
});

app.listen(4002, () => {
  // port 4002
  console.log("Server is running on http://127.0.0.1:4002"); // log to console
});
