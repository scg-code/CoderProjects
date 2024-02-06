import React, { useState } from "react";
import Home from "./Home";
import CategorySelection from "./CategorySelection";
import NewEntry from "./NewEntry";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import ShowEntry from "./ShowEntry";
import { useParams } from "react-router-dom";

const App = () => {
  const [categories] = useState(["Food", "Gaming", "Coding", "Other"]);
  const [entries, setEntries] = useState([
    { category: 0, content: "I ate a sandwich today." },
  ]);

  function addEntry(cat_id, content) {
    const newEntry = {
      category: cat_id,
      content: content,
    };
    setEntries([...entries, newEntry]);
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
          <Route path="/" element={<Home />} />
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
      {/* <Home />
      <CategorySelection />
      <NewEntry /> */}
    </>
  );
};

export default App;
