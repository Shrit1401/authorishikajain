import { urlFor } from "@/lib/client";
import React from "react";

const BookComponent = ({ image, title, desc, link }) => {
  return (
    <div className="book-comp">
      <img src={urlFor(image)} alt="book" />

      <div className="right">
        <h1>{title}</h1>
        <p>{desc}</p>

        <a href={link} className="btn" target="_blank">
          View
        </a>
      </div>
    </div>
  );
};

export default BookComponent;
