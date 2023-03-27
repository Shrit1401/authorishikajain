import Navbar from "@/components/Usual/navbar";
import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Usual/Footer";

const BeforeYouRead = () => {
  return (
    <div className="before">
      <Head>
        <title>Before You Read</title>
        <link
          rel="icon"
          href="https://i.postimg.cc/T2ZPPC5h/Whats-App-Image-2023-03-23-at-22-29-51-removebg-preview.png"
        />
      </Head>

      <Navbar />

      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="head"
      >
        Before You Read
      </motion.h1>

      {/* <h4 className="heading">Heading</h4> */}
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        Hi! <br />
        If you’ve decided to click on this page, it means you’ve decided to give
        my books— ‘17 Days And Die’ or ‘Days To Relive’ a chance and I could not
        be happier.
        <br />
        <br /> Thank you so much! Before you read, please take note that the
        content in ‘17 Days And Die’ can be triggering to some readers. Trigger
        warnings include mention of physical and sexual abuse, actions
        pertaining and leading to self-harm, suicidal themes and explicit
        language.
        <br />
        <br /> Happy reading {"<3"}
      </motion.p>

      <Footer />
    </div>
  );
};

export default BeforeYouRead;
