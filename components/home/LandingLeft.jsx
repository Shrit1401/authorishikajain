import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const LandingLeft = () => {
  useEffect(() => {
    function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function getRandomLetter() {
      var alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      return alphabet[rand(0, alphabet.length - 1)];
    }
    function getRandomWord(word) {
      var text = word.innerHTML;

      var finalWord = "";
      for (var i = 0; i < text.length; i++) {
        finalWord += text[i] == " " ? " " : getRandomLetter();
      }

      return finalWord;
    }

    var words = document.querySelectorAll(".landLeft .btn");
    words.forEach((word) => {
      var interv = "undefined";
      var canChange = false;
      var globalCount = 0;
      var count = 0;
      var INITIAL_WORD = word.innerHTML;
      var isGoing = false;

      function init() {
        if (isGoing) return;

        isGoing = true;
        var randomWord = getRandomWord(word);
        word.innerHTML = randomWord;

        interv = setInterval(function () {
          var finalWord = "";
          for (var x = 0; x < INITIAL_WORD.length; x++) {
            if (x <= count && canChange) {
              finalWord += INITIAL_WORD[x];
            } else {
              finalWord += getRandomLetter();
            }
          }
          word.innerHTML = finalWord;
          if (canChange) {
            count++;
          }
          if (globalCount >= 20) {
            canChange = true;
          }
          if (count >= INITIAL_WORD.length) {
            clearInterval(interv);
            count = 0;
            canChange = false;
            globalCount = 0;
            isGoing = false;
          }
          globalCount++;
        }, 10);
      }

      word.addEventListener("mouseenter", init);
    });
  }, []);
  return (
    <div className="landLeft">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Hi I am <span className="block">writer</span> <br />{" "}
        <span className="name"> Ishika Jain</span>
      </motion.h1>

      <motion.div
        // transform values
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex"
      >
        <a href="/about" className="btn">
          About Me
        </a>
        <a
          href="/about"
          target="_blank"
          rel="noopener noreferrer"
          className="btn border"
        >
          Work
        </a>
      </motion.div>
    </div>
  );
};

export default LandingLeft;
