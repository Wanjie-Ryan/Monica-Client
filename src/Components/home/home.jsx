import React, { useState, useEffect } from "react";
import "./home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import churchView from "../../Assets/homeImages/church_view.jpg";
import { Link as Scroll } from "react-scroll";
import mpesa from "../../Assets/homeImages/mpesa.png";
import equity from "../../Assets/homeImages/brand.gif";
import std from "../../Assets/homeImages/Standard_Chartered_logo.jpg";
import YTVideo from "../../Assets/videos/Monica Updated Video.mp4";
import FBVideo from "../../Assets/videos/Facebook Monica.mp4";
import Kama from "../../Assets/Ministries/KAMA.png";
import Mothers from "../../Assets/Ministries/Mothers-union.png";
import Brigade from "../../Assets/Ministries/brigade.png";
import Youth from "../../Assets/Ministries/youth.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
function Home() {
  const imageData = [
    {
      id: 1,
      image: require("../../Assets/homeImages/vicar.jpg"),
      message: "Our Leader",
    },

    {
      id: 2,
      image: require("../../Assets/homeImages/Team.jpg"),
      message: "Our Able Team",
    },

    {
      id: 3,
      image: require("../../Assets/homeImages/view.jpg"),
      message: `ACK St.Monica's church Mugumo-ini at night`,
    },

    {
      id: 4,
      image: require("../../Assets/homeImages/view 2.jpg"),
      message: `ACK St.Monica's church Mugumo-ini `,
    },

    {
      id: 5,
      image: require("../../Assets/homeImages/Congregation1.jpg"),
      message: "Our congregation and worshippers",
    },

    {
      id: 6,
      image: require("../../Assets/homeImages/worship.jpg"),
      message: "Worship Team",
    },

    {
      id: 7,
      image: require("../../Assets/homeImages/drumist.jpg"),
      message: "Fully Equipped musical instruments",
    },

    {
      id: 8,
      image: require("../../Assets/homeImages/men2.jpg"),
      message: "The men of St.Monica",
    },

    {
      id: 9,
      image: require("../../Assets/homeImages/women.jpg"),
      message: "The women of St.Monica",
    },

    {
      id: 10,
      image: require("../../Assets/homeImages/sunday school.jpg"),
      message: `St.Monica's Sunday School`,
    },

    {
      id: 11,
      image: require("../../Assets/homeImages/kids fellowship.jpg"),
      message: `St.Monica's Kids`,
    },

    {
      id: 12,
      image: require("../../Assets/homeImages/awards.jpg"),
      message: "What do you know, we also win awards",
    },

    {
      id: 13,
      image: require("../../Assets/homeImages/youth.jpg"),
      message: "The Youth",
    },
  ];

  const year = new Date().getFullYear();

  const [loading, setLoading] = useState(false);
  const [errmsg, setErrmsg] = useState("");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);

        const FetchedProjects = await axios.get(
          "https://monica-server.onrender.com/api/clergy/projects/getAllprojects"
        );

        // console.log(FetchedProjects.data.AllProjects)

        const AllprojectsFetched = FetchedProjects.data.AllProjects;

        setProjects(AllprojectsFetched);

        setLoading(false);
      } catch (err) {
        // console.log(err)

        setErrmsg(
          "There was an error while fetching the data, refresh the page and try again"
        );
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <section className="home">
        <p className="header-title">ACK St.Monica's Church Mugumo-ini</p>

        <div className="home-intro">
          {/* <Carousel showThumbs={false}>

            {imageData.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt={item.message}  />
                <p className="legend">{item.message}</p>
              </div>
            ))}

            </Carousel> */}

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
            {imageData.map((item) => (
              <SplideSlide key={item.id}>
                <img src={item.image} alt={item.message} className="img-caro" />
                <p className="legend">{item.message}</p>
              </SplideSlide>
            ))}
          </Splide>

          <div className="fellowship">
            <p className="prayer-title">Let's Fellowship together</p>
            <p className="prayer-desc">
              Catch our livestreams at Youtube and Facebook, do not miss,
              fellowship wherever you are, at your comfort
            </p>

            <div className="fellow-videos">
              <div className="yt">
                <video
                  src={YTVideo}
                  alt="Video Hero"
                  autoPlay
                  muted
                  loop
                  className="yt-video"
                ></video>

                <a
                  href="https://www.youtube.com/@st.monicasackmugumo-inithi9997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-links"
                >
                  Go to Youtube
                </a>
              </div>

              <div className="yt">
                <video
                  src={FBVideo}
                  alt="Video Hero"
                  autoPlay
                  muted
                  loop
                  className="yt-video"
                ></video>
                <a
                  href="https://web.facebook.com/profile.php?id=100071086714420"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-links"
                >
                  Go to Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="targets">
            <div className="mission">
              <p className="mission-titles">Mission</p>

              <p className="inner-p-marks">
                &bull; To glorify God by making disciples to respond obediently to our Lord's Commission
              </p>
              
            </div>

            <div className="mission">
              <p className="mission-titles">{year} Theme</p>

              <p className="inner-p-marks">&bull; Be Equipped for Ministry.</p>
              <p className="inner-p-marks">
                &bull; Tujitayarishe kwa ajili ya huduma.
              </p>
              <p className="inner-p-marks">
                &bull; Gwithagathaga Ni undu wa utungata.
              </p>
            </div>

            <div className="mission">
              <p className="mission-titles">Vision</p>

              <p className="inner-p-marks">
                &bull; A church that transforms our world for Jesus Christ
              </p>
              
            </div>

            <div className="mission">
              <p className="mission-titles">Services</p>

              <p className="inner-p-marks">
                &bull; Swahili 7:00Am - 8:00Am (Holy Communion)
              </p>

              <p className="inner-p-marks">
                &bull; Youth 8:15Am - 9:15Am 
              </p>

              <p className="inner-p-marks">
                &bull; English 9:30Am - 11:15Am 
              </p>

              <p className="inner-p-marks">
                &bull; Gikuyu 11:30Am - 1:00Pm 
              </p>
              
            </div>
          </div>

          <div className="ministries">
            <p className="prayer-title">Church Departments</p>

            <div className="ministries-container">
              <div className="ministries-mini">
                <div className="inner-ministry-cont">
                  <img src={Kama} className="kama-img" alt="kama" />
                </div>

                <div className="ministries-p">
                  <p className="title-p-min">The KAMA</p>

                  <Link to="/kama" className="know-more-ministries">
                    More
                  </Link>
                </div>
              </div>

              <div className="ministries-mini">
                <div className="inner-ministry-cont">
                  <img src={Mothers} className="kama-img" alt="kama" />
                </div>

                <div className="ministries-p">
                  <p className="title-p-min">The MU</p>

                  <Link to="/mothers-union" className="know-more-ministries">
                    More
                  </Link>
                </div>
              </div>

              <div className="ministries-mini">
                <div className="inner-ministry-cont">
                  <img src={Youth} className="kama-img" alt="kama" />
                </div>

                <div className="ministries-p">
                  <p className="title-p-min">The KAYO</p>

                  <Link to="/kayo" className="know-more-ministries">
                    More
                  </Link>
                </div>
              </div>

              <div className="ministries-mini">
                <div className="inner-ministry-cont">
                  <img src={Brigade} className="kama-img" alt="kama" />
                </div>

                <div className="ministries-p">
                  <p className="title-p-min">The BRIGADE</p>

                  <Link to="/brigade" className="know-more-ministries">
                    More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="projects">
            <p className="prayer-title">Projects</p>

            {loading ? (
              <AiOutlineLoading3Quarters className="loading-icon" />
            ) : (
              <>
                {projects.length > 0 ? (
                  <div className="container">
                    {projects.map((project, index) => (
                      <div key={index} className="project-item">
                        <img
                          src={project.image}
                          alt="church-view"
                          className="church-projects"
                        />
                        <p className="project-desc">{project.title}</p>
                        <Scroll
                          className="project-contribute"
                          activeClass="active"
                          to="contribute"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          Contribute
                        </Scroll>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>There is no project at the moment</p>
                )}
              </>
            )}

            {errmsg && <p className="error-msg">{errmsg}</p>}
          </div>

          <div className="prayer-cells">
            <p className="prayer-title">Prayer Cells</p>

            <p className="prayer-desc">
              Worship within your neighborhood, maombi mtaani.
            </p>

            <p className="prayer-meeting">Prayer Cells Meeting</p>

            <div className="table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Group</th>
                    <th>Venue</th>
                    <th>Day</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="row-even">
                    <td>Ephesus</td>
                    <td>Church</td>
                    <td>Tuesday</td>
                  </tr>

                  <tr className="row-even">
                    <td>Jerusalem</td>
                    <td>Church</td>
                    <td>Thursday</td>
                  </tr>

                  <tr className="row-even">
                    <td>Bethlehem</td>
                    <td>Jane Joroge</td>
                    <td>Tuesday</td>
                  </tr>

                  <tr className="row-even">
                    <td>Bethany</td>
                    <td>Mama Tyler</td>
                    <td>Friday</td>
                  </tr>

                  <tr className="row-even">
                    <td>Judea</td>
                    <td>Church</td>
                    <td>Friday</td>
                  </tr>

                  <tr className="row-even">
                    <td>Galilee</td>
                    <td>School for the Blind</td>
                    <td>Thursday</td>
                  </tr>

                  <tr className="row-even">
                    <td>Bethsaida</td>
                    <td>Grace Waithaka</td>
                    <td>Friday</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="donate" id="contribute">
            <p className="prayer-title">Contribute to the church</p>

            <div className="contribution">
              <div className="offering">
                <img src={mpesa} alt="mpesa" className="mpesa" />
                <p>
                  Pay Via the Paybill:<span className="accounts">834868</span>
                </p>
                <p>
                  Account Number:
                  <span className="accounts">
                    Tithe OR Offertory OR Thanksgiving OR any other reason for
                    giving{" "}
                  </span>
                </p>
              </div>

              <div className="offering">
                <img src={equity} alt="mpesa" className="mpesa" />
                <p className="eq-title">Development Account</p>
                <p>
                  Pay Via the Paybill:<span className="accounts">247247</span>
                </p>
                <p>
                  Account Number:
                  <span className="accounts"> 0090290373862 </span>
                </p>
              </div>

              <div className="offering">
                <img src={std} alt="mpesa" className="mpesa" />
                <p className="eq-title">Cheques are payable to:</p>
                <p>
                  Account Number:
                  <span className="accounts"> 0102812751600 </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
