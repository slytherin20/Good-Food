import books from "./data";
import React from "react";

function Appenditem({ name, clickHandler }) {
  return (
    <li className="list-item" onClick={() => clickHandler(name)}>
      {name}
    </li>
  );
}

function Showgenre({ clickHandler }) {
  return (
    <ul className="genre-list">
      {Object.keys(books).map((genre) => {
        return (
          <Appenditem key={genre} name={genre} clickHandler={clickHandler} />
        );
      })}
    </ul>
  );
}

export default Showgenre;
