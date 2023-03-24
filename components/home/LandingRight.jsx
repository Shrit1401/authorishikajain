import React from "react";
import { motion } from "framer-motion";

const LandingRight = () => {
  return (
    <div className="landRight">
      <p className="right-p">
        I write <span>Books</span>...
      </p>
      <motion.img
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 1, repeat: Infinity, delay: 1 }}
        src="https://i.postimg.cc/ryGm9VT8/image.png"
        width={641 - 50}
        height={706}
        className="image"
        alt="landing-right"
      />

      <div className="contact">
        <h1>Contact Me</h1>

        <a href="./contact" className="arrow btn">
          <motion.img
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: 1 }}
            src="./arrow.svg"
            width={20}
            height={20}
            alt="arrow"
          />
        </a>
      </div>
    </div>
  );
};

export default LandingRight;
