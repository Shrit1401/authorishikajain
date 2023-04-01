import LandingLeft from "@/components/home/LandingLeft";
import LandingRight from "@/components/home/LandingRight";
import Footer from "@/components/Usual/Footer";
import Navbar from "@/components/Usual/navbar";
import Head from "next/head";
import { BsTwitter, BsPinterest, BsSpotify, BsInstagram } from "react-icons/bs";
import { AiFillBook } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Home() {
  console.log(
    "This Website is made by @Shrit1401 (https://github.com/Shrit1401)'"
  );
  return (
    <>
      <Head>
        <title>Author Ishika</title>
        <link
          rel="icon"
          href="https://i.postimg.cc/T2ZPPC5h/Whats-App-Image-2023-03-23-at-22-29-51-removebg-preview.png"
        />
      </Head>

      <main>
        <Navbar active="home" />

        <div className="home-container">
          <div className="left">
            <h1 className="title">
              <LandingLeft />
            </h1>
          </div>
          <motion.div
            className="line"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 2 }}
          />

          <div className="right">
            <LandingRight />
          </div>
        </div>
      </main>
      <footer className="footer home">
        <div className="footer-container">
          <div className="footer-left">
            <h1 className="footer-title">Ishika</h1>
            <p className="footer-text">
              © {new Date().getFullYear()} Author Ishika. All rights reserved.
            </p>
          </div>
          <div className="footer-right">
            <div className="social">
              <a
                href="https://mobile.twitter.com/ishikalovessoc"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter />
              </a>

              <a
                href="https://in.pinterest.com/prettyimbecile/"
                target="_blank"
                rel="noreferrer"
              >
                <BsPinterest />
              </a>
              <a
                href="https://open.spotify.com/user/adct6zvpdydxowjr6iuzhtvqk?si=wvlmBu-jSFWDAAICp2lN0Q&nd=1"
                target="_blank"
                rel="noreferrer"
              >
                <BsSpotify />
              </a>
              <a
                href="https://www.instagram.com/ishikasbookshelf/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
              <a
                href="https://www.goodreads.com/user/show/75286830-prettyimbecile"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillBook />
              </a>
            </div>
          </div>
          {/* Made By Shrit Shrivastava */}
        </div>
      </footer>
    </>
  );
}
