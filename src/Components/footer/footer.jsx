import React, { useState, useEffect } from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { AiTwotonePhone } from "react-icons/ai";
import { Link } from "react-router-dom";
import bibleVerses from "../../verses.json";

function Footer() {
  const year = new Date().getFullYear();

  const [randomVerse, setRandomVerse] = useState(null);

  useEffect(() => {
    getRandomVerse();
  }, []);

  const getRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * bibleVerses.verses.length);

    setRandomVerse(bibleVerses.verses[randomIndex]);
  };

  return (
    <>
      <footer className="main">
        <div className="main-footer">
          <p className="footer-title">
            ACK St.Monica's Church Mugumo-ini - Thika
          </p>

          <div className="footer-details">
            <div className="contact-details">
              <p className="contact-title">
                Reach us at any of the links below:
              </p>

              <a
                href="https://www.facebook.com/profile.php?id=100071086714420"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icons-link"
              >
                <BsFacebook className="footer-icons" />
              </a>

              <a
                href="mailto:ack.mugumo-ini.thika@gmail.com"
                className="footer-icons-link"
              >
                <BiLogoGmail className="footer-icons" />
              </a>

              <a href="tel:0720 577944" className="footer-icons-link">
                <AiTwotonePhone className="footer-icons" />
              </a>
            </div>

            <div className="quick-links">
              <p className="contact-title"> Quick Links </p>

              <Link to="/" className="footer-links-p">
                <p>Home</p>
              </Link>
              <Link to="/contact" className="footer-links-p">
                <p>Contact</p>
              </Link>
              <Link to="/events" className="footer-links-p">
                <p>Events</p>
              </Link>
              <Link to="/gallery" className="footer-links-p">
                <p>Gallery</p>
              </Link>
              <Link to="/announce" className="footer-links-p">
                <p>Announcements</p>
              </Link>
              <Link to="/team" className="footer-links-p">
                <p>Team</p>
              </Link>
            </div>

            <div className="random-scriptures">
              <p className="contact-title">Scriptures</p>

              {randomVerse && (
                <>
                  <p>{randomVerse.id}</p>
                  <p>{randomVerse.scripture}</p>
                </>
              )}
            </div>
          </div>

          <p className="footer-dev">
            Developed by Ryan Wanjie{" "}
            <a href="tel:+254791618714" className="footer-icons-link-call">
              +254791618714
            </a>
          </p>
          <p className="footer-rights">
            Copyright © {year} St.Monica. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
