import Image from "next/image";
import React from "react";

const LandingRight = () => {
  return (
    <div className="landRight">
      <p className="right-p">
        I write <span>Books</span>...
      </p>
      <Image
        src="https://i.postimg.cc/GhVpHNVP/image.png"
        width={641 - 50}
        height={706}
        className="image"
        alt="landing-right"
      />

      <div className="contact">
        <h1>Contact Me</h1>

        <a href="./contact" className="arrow btn">
          <Image src="./arrow.svg" width={20} height={20} alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export default LandingRight;
