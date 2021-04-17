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
      <nav className="navbar">Good Books</nav>
      <div className="container">
        <div className="show-genre">
          <Showgenre clickHandler={clickHandler} />
        </div>
        <div className="show-books">
          <Appendbooks genrename={genre} />
        </div>
      </div>
    </>
  );
}

export default App;
