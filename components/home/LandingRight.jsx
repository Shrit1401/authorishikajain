import React from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

const LandingRight = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I Write Books", "I Write Emotions"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="landRight">
      <p className="right-p" ref={el} />
      <div className="image">
        <motion.img
          initial={{ opacity: 0, x: -100, rotate: 14.49 }}
          animate={{ opacity: 1, x: 0, rotate: -14.49 }}
          transition={{ duration: 1, delay: 1 }}
          src="./landing/two.jpg"
          className="top-left"
        />
        <motion.img
          initial={{ opacity: 0, y: 100, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: 10.72 }}
          transition={{ duration: 1, delay: 1.3 }}
          src="./landing/one.jpg"
          className="top-right"
        />
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          src="./landing/zero.jpg"
          className="center"
        />
        <motion.img
          initial={{ opacity: 0, y: 100, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -10.72 }}
          transition={{ duration: 1, delay: 1.9 }}
          src="./landing/three.jpg"
          className="bottom-left"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.1 }}
          src="./landing/four.jpg"
          className="bottom-right"
        />
      </div>

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
