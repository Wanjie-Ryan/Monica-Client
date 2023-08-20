import React, { useState } from "react";
// import './kama.css'
// import Men from '../../../Assets/homeImages/men.jpg'
import youthLogo from "../../../Assets/Ministries/youth.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import YouthModal from "./min-Modal";

function Kayo() {
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
      image: require("../../../Assets/homeImages/youth.jpg"),
    },

    {
      id: 2,
      image: require("../../../Assets/homeImages/youth2.jpg"),
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
          <img src={youthLogo} alt="kama-logo" className="kamalogo" />
        </div>
        <p className="kama-title">Kenya Anglican Youth Organization</p>

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
              &bull; Bringing young people to know and serve Christ as Savior
              and Lord.
            </p>

            <p className="about-kama">
              {" "}
              &bull;Building young people in knowledge and behavior of Christian
              faith, the bible being the foundation.
            </p>

            <p className="about-kama">
              {" "}
              &bull; Educating young people in good Christian character and to
              encourage them to be leaders in church.
            </p>

            <p className="about-kama">
              {" "}
              &bull; Helping the church understand her responsibility towards
              young people.
            </p>
          </div>
        </div>
      </section>

      {/* <YouthModal
        
            isOpen={isKamaModalOpen}
            onClose={closeKamaModal}
        /> */}
    </>
  );
}

export default Kayo;
