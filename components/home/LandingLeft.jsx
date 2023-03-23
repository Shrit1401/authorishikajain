import React from "react";

const LandingLeft = () => {
  return (
    <div className="landLeft">
      <h1>
        Hi I am <span className="block">writer</span> <br />{" "}
        <span className="name"> Ishika Jain</span>
      </h1>

      <p className="description">
        I am Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
        IpsumIpsumLorem IpsumIpsumLorem IpsumIpsumLorem IpsumIpsumLorem Ipsum
      </p>

      <div className="flex">
        <a
          href="/about"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          About Me
        </a>
        <a
          href="/about"
          target="_blank"
          rel="noopener noreferrer"
          className="btn border"
        >
          About Me
        </a>
      </div>
    </div>
  );
};

export default LandingLeft;
