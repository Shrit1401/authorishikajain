import BookComponent from "@/components/books/bookComponent";
import Footer from "@/components/Usual/Footer";
import Navbar from "@/components/Usual/navbar";
import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";

import Marquee from "react-fast-marquee";
import { client } from "@/lib/client";

const books = [
  {
    title: "Happiness is Reality",
    desc: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    image: "https://i.postimg.cc/sXCz0WVx/image.png",
  },

  {
    title: "Happiness is Reality",
    desc: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    image: "https://i.postimg.cc/sXCz0WVx/image.png",
  },

  {
    title: "Happiness is Reality",
    desc: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    image: "https://i.postimg.cc/sXCz0WVx/image.png",
  },
];

const Books = ({ releasedBooks }) => {
  console.log(releasedBooks);
  return (
    <div className="books">
      <Head>
        <title>Books</title>
        <link
          rel="icon"
          href="https://i.postimg.cc/T2ZPPC5h/Whats-App-Image-2023-03-23-at-22-29-51-removebg-preview.png"
        />
      </Head>
      <Navbar active={"books"} />

      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="heading"
      >
        Happiness
        <span className="word">is</span>
        <br />
        <p>Reality</p>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex books-holder"
      >
        <div className="book__cover">
          <img src="https://i.postimg.cc/k4KpbYk5/image.png" alt="book cover" />
        </div>

        <div className="book__cover">
          <img src="https://i.postimg.cc/FzhDJryP/image.png" alt="book cover" />
        </div>

        <div className="book__cover">
          <img src="https://i.postimg.cc/gjB8kmNL/image.png" alt="book cover" />
        </div>
      </motion.div>

      <Marquee
        gradient={false}
        style={{
          color: "black",
          fontSize: "5rem",
          fontWeight: "lighter",
          padding: "1rem",
          backgroundColor: "var(--primary-color)",
          width: "100%",
          textAlign: "center",
          margin: "0 auto",
          marginTop: "2rem",
          marginBottom: "2rem",
          display: "flex",
          gap: "1rem",
        }}
        className="marquee"
      >
        <p
          style={{
            marginRight: "3rem",
          }}
        >
          Released books
        </p>
        <p
          style={{
            marginRight: "3rem",
            fontWeight: "bold",
          }}
        >
          Released books
        </p>
        <p
          style={{
            marginRight: "3rem",
          }}
        >
          Released books
        </p>
        <p
          style={{
            marginRight: "3rem",
            fontWeight: "bold",
          }}
        >
          Released books
        </p>
      </Marquee>

      <div className="book-components">
        {releasedBooks.map((book, index) => {
          return (
            <BookComponent
              key={index}
              image={book.image}
              title={book.title}
              desc={book.description}
              link={book.link}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "released-book"]';
  const releasedBooks = await client.fetch(query);
  return {
    props: {
      releasedBooks,
    },
  };
};

export default Books;
