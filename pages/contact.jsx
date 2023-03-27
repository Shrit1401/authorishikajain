import ContactCard from "@/components/contact/contactCard";
import Footer from "@/components/Usual/Footer";
import Navbar from "@/components/Usual/navbar";
import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";

const contact = [
  {
    svg: "./icons/mail.svg",
    username: "queenishika5@gmail.com",
    title: "Email",
    link: "mailto:queenishika5@gmail.com",
  },
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
        <link
          rel="icon"
          href="https://i.postimg.cc/T2ZPPC5h/Whats-App-Image-2023-03-23-at-22-29-51-removebg-preview.png"
        />
      </Head>
      <Navbar active={"contact"} />

      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="head"
      >
        Contact Me
      </motion.h1>

      <div className="form">
        <form action="https://formspree.io/f/moqznboz" method="POST">
          <div className="flex">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input"
              required
            />
          </div>
          {/* message */}
          <textarea name="message" placeholder="Message" required />
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="head"
      >
        Social Media
      </motion.h2>
      <motion.div
        // pop out
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="flex contacts"
      >
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
      </motion.div>

      <Footer />
    </div>
  );
};

export default Contact;
