import React from "react";
import { BsTwitter, BsPinterest, BsSpotify, BsInstagram } from "react-icons/bs";
import { AiFillBook } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
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
  );
};

export default Footer;
