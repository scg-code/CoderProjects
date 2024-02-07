import React from "react"; // Add missing import statement for React

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Define a functional component called NewEntry
const NewEntry = ({ categories, addEntry }) => {
  // Get the parameters from the URL
  const params = useParams();
  // Define a state variable called entry and a function to update it
  const [entry, setEntry] = useState("");
  // Get the navigation function from react-router-dom
  const nav = useNavigate();

  // Define a function called createEntry that handles form submission
  async function createEntry(e) {
    e.preventDefault();
    // Create a new entry by calling the addEntry function with the category ID and entry content
    const id = await addEntry(params.cat_id, entry);
    // Clear the input textarea by setting the entry state variable to an empty string
    setEntry("");
    // Redirect to the newly created entry by calling the nav function with the entry ID
    nav(`/entry/${id}`);
  }

  // Render the NewEntry component
  return (
    <>
      <h3>New entry in category {categories[params.cat_id]?.name}</h3>
      <form className="section" onSubmit={createEntry}>
        <div className="field">
          <label className="label">Journal Entry</label>
          <div className="control">
            <textarea
              className="textarea"
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              placeholder="Type your journal entry here"
            ></textarea>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Create Entry</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewEntry;
