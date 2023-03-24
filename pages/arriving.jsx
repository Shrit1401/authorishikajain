import Footer from "@/components/Usual/Footer";
import Navbar from "@/components/Usual/navbar";
import Head from "next/head";
import React from "react";
import UpcomingComp from "@/components/books/upcomingComp";

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
        <title>Upcoming Books</title>
      </Head>
      <Navbar active={"arriving"} />

      <h1 className="heading">
        Upcoming
        <br />
        <p>Books</p>
      </h1>

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
          Upcoming books
        </p>
        <p
          style={{
            marginRight: "3rem",
            fontWeight: "bold",
          }}
        >
          Upcoming books
        </p>
        <p
          style={{
            marginRight: "3rem",
          }}
        >
          Upcoming books
        </p>
        <p
          style={{
            marginRight: "3rem",
            fontWeight: "bold",
          }}
        >
          Upcoming books
        </p>
      </Marquee>

      <div className="book-components">
        {books.map((book, index) => {
          return (
            <UpcomingComp
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
