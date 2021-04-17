import books from "./data";

function Bookname({ name, author, year, rating }) {
  return (
    <li class="book">
      <div class="book-details">
        <h4>{name}</h4>
        <span>Author:{author}</span>
        <span>Publishing year:{year}</span>
        <h5>Rating:{rating}</h5>
      </div>
    </li>
  );
}

function Appendbooks({ genrename }) {
  return (
    <ul className="books-list">
      {books[genrename].map((bookdetails) => {
        return (
          <Bookname
            key={bookdetails.publishyear}
            name={bookdetails.name}
            author={bookdetails.author}
            year={bookdetails.publishyear}
            rating={bookdetails.rating}
          />
        );
      })}
    </ul>
  );
}

export default Appendbooks;
