import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // load environment variables from .env file

try {
  const m = await mongoose.connect(process.env.DB_URI); // connect to MongoDB
  console.log(
    m.connection.readyState === 1 // check if connected
      ? "Connected to MongoDB"
      : "Not connected to MongoDB"
  );
} catch (err) {
  console.log(err);
}

const closeConnection = () => {
  console.log("Mongoose Disconnected");
  mongoose.connection.close();
}; // close the connection when the script ends

const categoriesSchema = new mongoose.Schema({
  // create a schema
  name: { type: String, required: true }, // define the properties
});

const CategoryModel = mongoose.model("Category", categoriesSchema); // create a model from the schema

const entriesSchema = new mongoose.Schema({
  // create a schema
  category: { type: mongoose.ObjectId, ref: "Category" }, // define the properties
  content: { type: String, required: true }, // define the properties
});

const EntryModel = mongoose.model("Entry", entriesSchema); // create a model from the schema

export { closeConnection, EntryModel, CategoryModel }; // export the EntryModel
