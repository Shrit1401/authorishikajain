import Navbar from "@/components/Usual/navbar";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Footer from "@/components/Usual/Footer";

const About = () => {
  return (
    <div className="about">
      <Head>
        <title>About Author</title>
        <link
          rel="icon"
          href="https://i.postimg.cc/T2ZPPC5h/Whats-App-Image-2023-03-23-at-22-29-51-removebg-preview.png"
        />
      </Head>

      <Navbar active="about" />
      <h1>About Author</h1>

      <div className="about-inner flex">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="left"
        >
          <p>
            Ishika Jain is a young author from India who ventured into this
            world of writing and books at the young age of fifteen and hasn’t
            been able to escape it since. Her debut YA novel ‘17 Days And Die’
            came out in early 2022 and has received amazing response from the
            readers. She’s been a co-author in many anthologies and in 2023 she
            edited her own anthology— ‘Days To Relive’ and worked with various
            authors from around the world. Not only that, she is also an Indian
            Record Holder for her books. She’s currently pursuing journalism and
            wishes to embark on the same career path. Most of the time, she can
            be found huddled in her bed, reading thriller and romance
            books—which she claims are her catnip.
          </p>
        </motion.div>
        <div className="right">
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            src="./about.jpg"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
