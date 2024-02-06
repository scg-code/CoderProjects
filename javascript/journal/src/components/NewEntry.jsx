import React, { useState } from "react";
import { useParams } from "react-router-dom";

const NewEntry = ({ categories, addEntry }) => {
  const params = useParams();
  const [entry, setEntry] = useState("");

  function createEntry(e) {
    e.preventDefault();

    addEntry(params.cat_id, entry);

    setEntry("");
  }

  return (
    <>
      <h3 className="title is-3">
        New entry in category {categories[params.cat_id]}
      </h3>
      <form className="section" onSubmit={createEntry}>
        <div className="field">
          <div className="control">
            <textarea
              className="textarea"
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              placeholder="Enter your journal entry"
            ></textarea>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary">Create Entry</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewEntry;
