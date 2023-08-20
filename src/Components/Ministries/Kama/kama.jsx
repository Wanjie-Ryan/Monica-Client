import React, { useState } from "react";
import "./kama.css";
// import Men from '../../../Assets/homeImages/men.jpg'
import KamaLogo from "../../../Assets/Ministries/KAMA.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import KamaModal from "../Ministries-Modal/min-Modal";

function Kama() {
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
      image: require("../../../Assets/homeImages/men.jpg"),
    },

    {
      id: 2,
      image: require("../../../Assets/homeImages/men2.jpg"),
    },
  ];

  return (
    <>
      <section className="kama">
        <div className="kama-cont">
          {" "}
          <img src={KamaLogo} alt="kama-logo" className="kamalogo" />
        </div>
        <p className="kama-title">Kenya Anglican Men's Association</p>

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
              &bull;Helping its members grow in spirit, mind and body and be mature in faith for every good work. 
            </p>

            <p className="about-kama">
              {" "}
              &bull;Encouraging members to play an active role into the mission of the church
            </p>

            
          </div>
        </div>
      </section>

      
    </>
  );
}

export default Kama;
