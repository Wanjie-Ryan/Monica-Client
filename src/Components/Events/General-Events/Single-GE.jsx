import React, { useState, useEffect } from "react";
import "./SingleGE.css";
import generalEvents from "../../../Assets/Events/general_events.jpg";
import EventsRegModal from "../Events-Modal/Event-Reg-Modal";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SingleGE() {
  const [EventModalOpen, setEventModalOpen] = useState(false);

  const openEventModal = () => {
    setEventModalOpen(true);
  };

  const closeEventModal = () => {
    setEventModalOpen(false);
  };

  const [Loading, setLoading] = useState(false);
  const [singGe, setSingGe] = useState();
  const [errMsg, seterrMsg] = useState();
  const { id } = useParams();

  useEffect(() => {
    const SingleGe = async () => {
      try {
        setLoading(true);

        const singleGeEvent = await axios.get(
          `https://monica-server.onrender.com/api/clergy/events/singleevent/${id}`
        );

        const singleEve = singleGeEvent.data.singleEvent;

        setSingGe(singleEve);

        setLoading(false);
      } catch (err) {
        // console.log(err)
        seterrMsg("Cannot fetch Data at this time");
        setLoading(false);
      }
    };

    SingleGe();
  }, [id]);

  return (
    <>
      <section className="single-Events">
        {Loading ? (
          <AiOutlineLoading3Quarters className="loading-icon" />
        ) : (
          <>
            {singGe ? (
              <div className="single-events-container">
                <div className="img-cont">
                  <img
                    src={singGe.image}
                    alt="single-image"
                    className="single-image-event"
                  />
                </div>

                <p className="events-title-single">
                  Event Title:{" "}
                  <span className="events-desc-p-">{singGe.title} </span>
                </p>
                <p className="events-title-single">
                  Event Category:{" "}
                  <span className="events-desc-p-">{singGe.category} </span>
                </p>
                <p className="events-title-single">
                  Event Description:{" "}
                  <span className="events-desc-p-">{singGe.description}</span>
                </p>
              </div>
            ) : (
              <p>{errMsg}</p>
            )}
          </>
        )}
      </section>

      <EventsRegModal
        isOpen={EventModalOpen}
        onClose={closeEventModal}
        // onUpdate={handleUpdateSubmit}
        // name={votername}
        // name={contact}

        // onChange={(e) => {
        // const { name, value } = e.target;
        // if (name === 'namesvoter') setvotername(value);
        // if (name === 'contact') setcontact(value);
        // }}
      />
    </>
  );
}

export default SingleGE;
