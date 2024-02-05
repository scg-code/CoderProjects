import React from "react";
import Home from "./Home";
import CategorySelection from "./CategorySelection";
import NewEntry from "./NewEntry";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<CategorySelection />} />
          <Route path="/entry">
            <Route path="new/:cat_id" element={<NewEntry />} />
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
