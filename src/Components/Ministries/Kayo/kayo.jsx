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
            <p className="kama-desc-title">About KAYO</p>

            <p className="about-kama">
              {" "}
              &bull;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Incidunt ipsum distinctio fugiat doloremque sit beatae magni
              libero quod aspernatur eveniet, sunt cupiditate cum dolorem minima
              dolore qui reiciendis quas atque?
            </p>

            <p className="about-kama">
              {" "}
              &bull;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Incidunt ipsum distinctio fugiat doloremque sit beatae magni
              libero quod aspernatur eveniet, sunt cupiditate cum dolorem minima
              dolore qui reiciendis quas atque?
            </p>

            {/* <div className="btn-container"><button className='kama-reg' onClick={openKamaModal}>Become a KAYO member?</button></div> */}
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
