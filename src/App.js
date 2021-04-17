import "./styles.css";
//import books from "./data";
import { useState } from "react";
import Showgenre from "./showgenre";
import React from "react";
import Appendbooks from "./appendbooks";

function App() {
  const [genre, setGenre] = useState("javascript");
  function clickHandler(genre) {
    setGenre(genre);
  }
  return (
    <>
      <nav className="navbar">
        <h2>Good Books</h2>
      </nav>
      <div className="container">
        <div className="show-genre">
          <h3 className="sub-heading">Genre:</h3>
          <Showgenre clickHandler={clickHandler} />
        </div>
        <div className="show-books">
          <h3 className="sub-heading">Books:</h3>
          <Appendbooks genrename={genre} />
        </div>
      </div>
    </>
  );
}

export default App;
