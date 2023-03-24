import ContactCard from "@/components/contact/contactCard";
import Footer from "@/components/Usual/Footer";
import Navbar from "@/components/Usual/navbar";
import Head from "next/head";
import React from "react";

const contact = [
  {
    svg: "./icons/link.svg",
    username: "prettyimbecile",
    title: "Linktree",
    link: "https://linktr.ee/prettyimbecile",
  },
  {
    svg: "./icons/instagram.svg",
    username: "ishikasbookshelf",
    title: "Instagram",
    link: "https://www.instagram.com/ishikasbookshelf/",
  },
  {
    svg: "./icons/twitter.svg",
    username: "ishikalovessoc",
    title: "Twitter",
    link: "https://mobile.twitter.com/ishikalovessoc",
  },
  {
    svg: "./icons/pinterest.svg",
    username: "prettyimbecile",
    title: "Pinterest",
    link: "https://in.pinterest.com/prettyimbecile/",
  },
  {
    svg: "./icons/spotify.svg",
    username: "ishika",
    title: "Spotify",
    link: "https://open.spotify.com/user/adct6zvpdydxowjr6iuzhtvqk?si=wvlmBu-jSFWDAAICp2lN0Q&nd=1",
  },
  {
    svg: "./icons/book.svg",
    username: "Ishika Jain",
    title: "Good Reads",
    link: "https://www.goodreads.com/user/show/75286830-prettyimbecile",
  },
];

const Contact = () => {
  return (
    <div className="contact">
      <Head>
        <title>Contact Me</title>
      </Head>
      <Navbar active={"contact"} />

      <h1 className="head">Contact Me</h1>

      <div className="flex contacts">
        {contact.map((item) => {
          return (
            <ContactCard
              svg={item.svg}
              username={item.username}
              title={item.title}
              link={item.link}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
