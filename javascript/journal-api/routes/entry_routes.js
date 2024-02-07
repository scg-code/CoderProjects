import { Router } from "express";
import { EntryModel } from "../db.js";

const router = Router(); // create a new router

router.get("/", async (_, res) => res.send(await EntryModel.find().populate('category'))); // send back a json object

router.get("/:id", async (req, res) => {
  const entry = await EntryModel.findById(req.params.id).populate('category');
  if (entry) {
    res.send(entry); // send back a json object
  } else {
    res.status(404).send({ error: "Entry not found" }); // send back a json object
  }
});

router.post("/", async (req, res) => {
  try {
    // const cat = await CategoryModel.find0ne({ name: req.body.category });
    const insertedEntry = await (await EntryModel.create(req.body)).populate('category');
    res.status(201).send(insertedEntry);
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
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

export default router;