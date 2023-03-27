import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = ({ active }) => {
  useEffect(() => {
    const list = document.querySelectorAll("li a");

    list.forEach((item) => {
      if (item.textContent.toLowerCase() === active) {
        item.classList.add("active");
      }
    });
  }, [active]);

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

    var words = document.querySelectorAll("nav  li a");
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
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: "100%" }}
      transition={{ duration: 0.8 }}
      className="nav"
    >
      <a href="/" className="left">
        <Image
          src="https://i.postimg.cc/xT7bRV2F/image.png"
          alt="logo"
          width={318 / 2}
          height={140.5 / 2}
        />
      </a>

      <div className="right">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/books">Books</a>
          </li>
          <li>
            <a href="/arriving">Arriving</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      <div
        className="line-hori"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2 }}
      />
    </motion.nav>
  );
};

export default Navbar;
