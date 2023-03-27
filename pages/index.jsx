import LandingLeft from "@/components/home/LandingLeft";
import LandingRight from "@/components/home/LandingRight";
import Footer from "@/components/Usual/Footer";
import Navbar from "@/components/Usual/navbar";
import Head from "next/head";
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
      <Footer />
    </>
  );
}
