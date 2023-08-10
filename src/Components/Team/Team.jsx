import React from "react";
import "./Team.css";
import vicar from "../../Assets/homeImages/vicar.jpg";
import mercy from "../../Assets/homeImages/mercy.jpg";
import support1 from "../../Assets/homeImages/support-1.jpg";

function Team() {
  return (
    <>
      <section className="main-team">
        <p className="team-title">
          Meet the Team behind ACK St.Monica's Church Mugumo-ini
        </p>

        <div className="team-container">
          <div className="bishop">
            <div className="bishop-img-cont">
              <img src={vicar} alt="bishop" className="img-bishop" />
              <p className="name-staff">Bishop</p>
              <p className="name-staff">xxxxxx</p>
            </div>
          </div>

          <div className="vicar">
            <div className="bishop-img-cont">
              <img src={vicar} alt="bishop" className="img-bishop" />
              <p className="name-staff">Vicar</p>
              <p className="name-staff">Rev John Kibicho</p>
            </div>

            <div className="bishop-img-cont">
              <img src={mercy} alt="bishop" className="img-bishop" />
              <p className="name-staff">Children's Minister </p>
              <p className="name-staff">Rev Mercy Wega</p>
            </div>
          </div>

          <div className="support-clergy">
            <div className="bishop-img-cont">
              <img src={vicar} alt="bishop" className="img-bishop" />
              <p className="name-staff">Secretary </p>
              <p className="name-staff">Racheal Karugo</p>
            </div>

            <div className="bishop-img-cont">
              <img src={mercy} alt="bishop" className="img-bishop" />
              <p className="name-staff">HouseKeeper </p>
              <p className="name-staff">Rosebell Muritu</p>
            </div>

            <div className="bishop-img-cont">
              <img src={vicar} alt="bishop" className="img-bishop" />
              <p className="name-staff">Caretaker </p>
              <p className="name-staff">Kennedy Waweru</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
