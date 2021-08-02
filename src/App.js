import "./styles.css";
//import books from "./data";
import { useState } from "react";
import Showcategory from "./showcategory";
import React from "react";
import Appendfood from "./appendfood";

function App() {
  const [category, setCategory] = useState("Indian");
  function clickHandler(choosen) {
    setCategory(choosen);
  }
  return (
    <>
      <nav className="navbar">
        <h2>Good Food</h2>
      </nav>
      <div className="container">
        <div className="show-category">
          <h3 className="sub-heading">Categories:</h3>
          <Showcategory clickHandler={clickHandler} />
        </div>
        <div className="show-food">
          <h3 className="sub-heading">Food:</h3>
          <Appendfood category={category} />
        </div>
      </div>
    </>
  );
}

export default App;
