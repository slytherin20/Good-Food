import food from "./data";
import "./styles.css";

function Foodname({ name, image, rating, bestPlace }) {
  return (
    <li className="food">
      <div className="food-details">
        <div className="image-box">
          <img src={image} alt="food" />
        </div>
        <div className="details-box">
          <h3>{name}</h3>
          <p>
            <b>Best Place: </b>
            {bestPlace}
          </p>
          <p>
            <b>Rating: </b>
            {rating}
          </p>
        </div>
      </div>
    </li>
  );
}

function Appendfood({ category }) {
  return (
    <ul className="food-list">
      {food[category].map((fooddetails) => {
        return (
          <Foodname
            key={fooddetails.name}
            name={fooddetails.name}
            image={fooddetails.image}
            rating={fooddetails.rating}
            bestPlace={fooddetails.bestPlace}
          />
        );
      })}
    </ul>
  );
}

export default Appendfood;
