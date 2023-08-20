import React, { useState } from "react";
// import './kama.css'
// import Men from '../../../Assets/homeImages/men.jpg'
import brigadeLogo from "../../../Assets/Ministries/brigade.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import BrigadeModal from "./min-Modal";

function Brigade() {
  const [isKamaModalOpen, setKamaModalOpen] = useState(false);

  const openKamaModal = () => {
    setKamaModalOpen(true);
  };

  const closeKamaModal = () => {
    setKamaModalOpen(false);
  };

  const KamaData = [
    {
      id: 1,
      image: require("../../../Assets/homeImages/kids fellowship.jpg"),
    },

    {
      id: 2,
      image: require("../../../Assets/homeImages/sunday school.jpg"),
    },

    {
      id: 3,
      image: require("../../../Assets/homeImages/youth3.jpg"),
    },
  ];

  return (
    <>
      <section className="kama">
        <div className="kama-cont">
          {" "}
          <img src={brigadeLogo} alt="kama-logo" className="kamalogo" />
        </div>
        <p className="kama-title">The Childrens' Ministries</p>

        <div className="kama-container">
          <div className="kama-img-cont">
            <Splide
              options={{
                type: "fade", // or 'slide' for horizontal sliding effect
                perPage: 1,
                autoplay: true,
                pauseOnHover: false,
                loop: true,
                // Add more options as needed
              }}
            >
              {KamaData.map((item) => (
                <SplideSlide key={item.id}>
                  <img
                    src={item.image}
                    alt={item.message}
                    className="img-kama"
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>

          <div className="kama-details">
            <p className="kama-desc-title">Mission</p>

            <p className="about-kama">
              {" "}
              &bull; Establishment of friendship between young people and
              children and adults in caring and safe environment.
            </p>

            <p className="about-kama">
              {" "}
              &bull;Helping children to grow in confidence, develop their skills
              and abilities, and work together, show care and concern for
              others.
            </p>

            <p className="about-kama">
              {" "}
              &bull;Encouraging children to explore their spirituality and
              respond to the Christian faith.
            </p>

            <p className="about-kama">
              {" "}
              &bull;Encouraging the development of the child morally, physically
              and spiritually.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Brigade;
