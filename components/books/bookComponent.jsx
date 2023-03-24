import React from "react";

const BookComponent = ({ image, title, desc }) => {
  return (
    <div className="book-comp">
      <img src={image} alt="book" />

      <div className="right">
        <h1>{title}</h1>
        <p>{desc}</p>

        <a href="#" className="btn">
          View
        </a>
      </div>
    </div>
  );
};

export default BookComponent;
