import React, { useState } from "react";
import MuLogo from "../../../Assets/Ministries/Mothers-union.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

function MothersUnion() {
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
      image: require("../../../Assets/homeImages/mothers_union.jpeg"),
    },

    {
      id: 2,
      image: require("../../../Assets/homeImages/mu_2.jpeg"),
    },
  ];

  return (
    <>
      <section className="kama">
        <div className="kama-cont">
          {" "}
          <img src={MuLogo} alt="kama-logo" className="kamalogo" />
        </div>
        <p className="kama-title">Mothers' Union</p>

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

            <p className="about-kama"> &bull; Christian care for families</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MothersUnion;
