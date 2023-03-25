import { urlFor } from "@/lib/client";
import React from "react";

const UpcomingComp = ({ image, title, desc }) => {
  return (
    <div>
      <div className="book-comp">
        <img src={urlFor(image)} alt="book" />

        <div className="right">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingComp;
