import BookComponent from "@/components/books/bookComponent";
import Footer from "@/components/Usual/Footer";
import Navbar from "@/components/Usual/navbar";
import Head from "next/head";
import React from "react";

import Marquee from "react-fast-marquee";

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

const Books = () => {
  return (
    <div className="books">
      <Head>
        <title>Books</title>
      </Head>
      <Navbar active={"books"} />

      <h1 className="heading">
        Happiness
        <span className="word">is</span>
        <br />
        <p>Reality</p>
      </h1>

      <div className="flex books-holder">
        <div className="book__cover">
          <img src="https://i.postimg.cc/k4KpbYk5/image.png" alt="book cover" />
        </div>

        <div className="book__cover">
          <img src="https://i.postimg.cc/FzhDJryP/image.png" alt="book cover" />
        </div>

        <div className="book__cover">
          <img src="https://i.postimg.cc/gjB8kmNL/image.png" alt="book cover" />
        </div>
      </div>

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
        {books.map((book, index) => {
          return (
            <BookComponent
              key={index}
              image={book.image}
              title={book.title}
              desc={book.desc}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Books;
