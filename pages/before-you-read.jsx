import Navbar from "@/components/Usual/navbar";
import Head from "next/head";
import React from "react";

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

      <h1 className="head">Before You Read</h1>

      <h4 className="heading">Heading</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
        voluptatum quos quidem nesciunt quas. Quisquam, quae. Quisquam, quae.
      </p>
    </div>
  );
};

export default BeforeYouRead;
