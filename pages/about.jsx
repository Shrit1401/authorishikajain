import Navbar from "@/components/Usual/navbar";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Footer from "@/components/Usual/Footer";

const About = () => {
  return (
    <div className="about">
      <Head>
        <title>About Us</title>
      </Head>
      <Navbar active="about" />
      <h1>About Us</h1>

      <div className="about-inner flex">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="left"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
            eligendi repellendus ea, harum optio enim ut laudantium quia eum
            porro deleniti! Quo vero impedit enim, suscipit expedita error iste
            iure?
          </p>
        </motion.div>
        <div className="right">
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            src="https://i.postimg.cc/Twkn1JkH/image.png"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
