import food from "./data";
import React from "react";

function Appenditem({ name, clickHandler }) {
  return (
    <li className="list-item" onClick={() => clickHandler(name)}>
      {name}
    </li>
  );
}

function Showcategory({ clickHandler }) {
  return (
    <ul className="category-list">
      {Object.keys(food).map((cat) => {
        return <Appenditem key={cat} name={cat} clickHandler={clickHandler} />;
      })}
    </ul>
  );
}

export default Showcategory;
