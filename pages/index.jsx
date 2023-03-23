import LandingLeft from "@/components/home/LandingLeft";
import LandingRight from "@/components/home/LandingRight";
import Footer from "@/components/Usual/Footer";
import Navbar from "@/components/Usual/navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Author Ishika</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar active="home" />

        <div className="home-container">
          <div className="left">
            <h1 className="title">
              <LandingLeft />
            </h1>
          </div>
          <div className="line" />

          <div className="right">
            <LandingRight />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
