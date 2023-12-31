import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import SiteLogo from "../../Assets/favicon.jpg";
import { BiHome, BiSolidContact, BiMenu } from "react-icons/bi";
import { FcGallery } from "react-icons/fc";
import { MdOutlineRememberMe } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";
import RegisterModal from "../Modals/Register-Modal";

function Navbar() {
  const [showNav, setshowNav] = useState(false);

  const handleNav = () => {
    setshowNav(!showNav);
  };

  const [regModalOpen, setRegModalOpen] = useState(false);

  const openRegModal = () => {
    setRegModalOpen(true);
  };

  const closeRegModal = () => {
    setRegModalOpen(false);
  };

  return (
    <>
      <nav className="nav-main">
        <div className="inner-nav">
          <div className="site-logo">
            <div className="flip-box img-logo">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img className="logo" src={SiteLogo} alt="logo" />
                </div>

                <div className="flip-box-back">
                  <p>Be Equipped For Ministry </p>
                </div>
              </div>
            </div>
          </div>

          <div className="nav-details">
            <div className="nav-links">
              <div className="nav-links-inner">
                <button className="for-new-users remove" onClick={openRegModal}>
                  Become a Member
                </button>
              </div>

              <div className="nav-links-inner">
                <Link to="/" className="nav-p">
                  <p className="nav-p">Home</p>
                </Link>
              </div>

              {/* <div className="nav-links-inner"> */}

              <BiMenu className="icon-menu" onClick={handleNav} />

              {/* </div> */}

              <div className="nav-links-inner">
                <Link to="/contact" className="nav-p">
                  <p className="nav-p remove">Contact</p>
                </Link>
              </div>

              <div className="nav-links-inner">
                <Link to="/general-events" className="nav-p">
                  <p className="nav-p remove" id="position">
                    Events
                  </p>
                </Link>
              </div>

              <div className="nav-links-inner">
                <Link to="/gallery" className="nav-p">
                  <p className="nav-p remove">Gallery</p>
                </Link>
              </div>

              <div className="nav-links-inner">
                <Link to="/announce" className="nav-p">
                  <p className="nav-p remove">Announcements</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {showNav && (
        <aside className="side">
          <div className="close-btn">
            <AiFillCloseCircle className="close" onClick={handleNav} />
          </div>

          <div className="main-side">
            <div className="site-logo side-logo">
              <div className="flip-box img-logo">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img className="logo" src={SiteLogo} alt="logo" />
                  </div>

                  <div className="flip-box-back">
                    <p>Be Equipped For Ministry </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="side-details">
              <button className="for-new-users side-btn" onClick={openRegModal}>
                Become a Member
              </button>
              <Link to="/" className="nav-p" onClick={handleNav}>
                <p className="side-links">Home</p>
              </Link>
              <hr></hr>
              <Link to="/contact" className="nav-p" onClick={handleNav}>
                <p className="side-links">Contact</p>
              </Link>
              <hr></hr>
              <Link to="/general-events" className="nav-p" onClick={handleNav}>
                <p className="side-links">Events</p>
              </Link>
              <hr></hr>
              <Link to="/gallery" className="nav-p" onClick={handleNav}>
                <p className="side-links">Gallery</p>
              </Link>
              <hr></hr>
              <Link to="/announce" className="nav-p" onClick={handleNav}>
                <p className="side-links">Announcements</p>
              </Link>
              <hr></hr>
              <Link to="/team" className="nav-p" onClick={handleNav}>
                <p className="side-links">Team</p>
              </Link>
            </div>
          </div>
        </aside>
      )}

      <RegisterModal isOpen={regModalOpen} onClose={closeRegModal} />
    </>
  );
}

export default Navbar;
