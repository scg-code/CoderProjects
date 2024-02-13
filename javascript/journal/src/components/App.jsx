import React, { useEffect, useState } from "react";
import Home from "./Home";
import CategorySelection from "./CategorySelection";
import NewEntry from "./NewEntry";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import ShowEntry from "./ShowEntry";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("https://journal-api-qlr9.onrender.com/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));

    fetch("https://journal-api-qlr9.onrender.com/entries")
      .then((res) => res.json())
      .then((data) => setEntries(data));
  }, []);

  async function addEntry(cat_id, content) {
    const newId = entries.length;
    const newEntry = {
      category: categories[cat_id]._id,
      content: content,
    };
    // Post the new entry to the server
    const res = await fetch("https://journal-api-qlr9.onrender.com/entries", {
      // Corrected the URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    });
    const data = await res.json();
    setEntries([...entries, data]);

    return newId;
  }

  // higher order component to pass the entry to ShowEntry component
  function ShowEntryWrapper() {
    const { id } = useParams();
    return <ShowEntry entry={entries[id]} />;
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home entries={entries} />} />
          <Route
            path="/category"
            element={<CategorySelection categories={categories} />}
          />
          <Route path="/entry">
            <Route path=":id" element={<ShowEntryWrapper />} />
            <Route
              path="new/:cat_id"
              element={<NewEntry categories={categories} addEntry={addEntry} />}
            />
          </Route>
          <Route path="*" element={<h3>Not Found</h3>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
