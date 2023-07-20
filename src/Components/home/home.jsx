import React from 'react'
import './home.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import churchView from '../../Assets/homeImages/church_view.jpg'
import { Link } from 'react-scroll';
import mpesa from '../../Assets/homeImages/mpesa.png'
import equity from '../../Assets/homeImages/brand.gif'
import std from '../../Assets/homeImages/Standard_Chartered_logo.jpg'
import YTVideo from '../../Assets/videos/Monica Updated Video.mp4'
import FBVideo from '../../Assets/videos/Facebook Monica.mp4'


function Home() {


  const imageData = [

    {

      id:1,
      image:require('../../Assets/homeImages/vicar.jpg'),
      message: 'Our Leader'
    }, 

    {
      id:2,
      image: require('../../Assets/homeImages/Team.jpg'),
      message:'Our Able Team'
    },

    {

      id:3,
      image:require('../../Assets/homeImages/view.jpg'),
      message:`ACK St.Monica's church Mugumo-ini`

    },

    {
      id:4,
      image:require('../../Assets/homeImages/view 2.jpg'),
      message:`ACK St.Monica's church Mugumo-ini at night`
    },

    {

      id:5,
      image:require('../../Assets/homeImages/Congregation1.jpg'),
      message:'Our congregation and worshippers'

    },

    {

      id:6,
      image:require('../../Assets/homeImages/worship.jpg'),
      message:'Worship Team'

    },

    {

      id:7,
      image:require('../../Assets/homeImages/drumist.jpg'),
      message:'Fully Equipped musical instruments'

    },

    {

      id:8,
      image:require('../../Assets/homeImages/men2.jpg'),
      message:'The men of St.Monica'

    },

    {

      id:9,
      image:require('../../Assets/homeImages/women.jpg'),
      message:'The women of St.Monica'

    },

    {

      id:10,
      image:require('../../Assets/homeImages/sunday school.jpg'),
      message:`St.Monica's Sunday School`

    },

    {

      id:11,
      image:require('../../Assets/homeImages/kids fellowship.jpg'),
      message:`St.Monica's Kids`

    },

    {

      id:12,
      image:require('../../Assets/homeImages/awards.jpg'),
      message:'What do you know, we also win awards'

    },




  ]

  const year = new Date().getFullYear()


  return (


    <>


        <section className ='home'>

          <p className ='header-title'>ACK St.Monica's Church Mugumo-ini</p>

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
                    type: 'fade', // or 'slide' for horizontal sliding effect
                    perPage: 1,
                    autoplay: true,
                    pauseOnHover: false,
                    loop: true,
                    // Add more options as needed
                  }}
                >
                  {imageData.map((item) => (

                    <SplideSlide key={item.id}>

                      <img src={item.image} alt={item.message} className='img-caro'/>
                      <p className="legend">{item.message}</p>

                    </SplideSlide>
                  ))}

            </Splide>


            <div className ='fellowship'>

              <p className ='prayer-title'>Let's Fellowship together</p>
              <p className='prayer-desc'>Catch our livestreams at Youtube and Facebook, do not miss, fellowship wherever you are, at your comfort</p>

              <div className="fellow-videos">

                <div className='yt'>

                  <video src={YTVideo} alt="Video Hero" autoPlay muted loop className='yt-video'></video>
                  
                  <a href ='https://www.youtube.com/@st.monicasackmugumo-inithi9997' target="_blank" rel="noopener noreferrer" className='external-links'>Go to Youtube</a>

                </div>

                <div className="yt">

                  <video src={FBVideo} alt="Video Hero" autoPlay muted loop className='yt-video'></video>
                  <a href ='https://web.facebook.com/profile.php?id=100071086714420' target="_blank" rel="noopener noreferrer" className='external-links'>Go to Facebook</a>


                </div>

              </div>




            </div>


            <div className="targets">


                <div className="mission">

                  <p className='mission-titles'>Mission</p>

                  <p className='inner-p-marks'>&bull; To bring the community closer to God</p>
                  <p className='inner-p-marks'>&bull; Leave the world a better place</p>
                  <p className='inner-p-marks'>&bull; Equip the community for ministry</p>

              
                </div>


                <div className="mission">

                  <p className='mission-titles'>{year} Theme</p>

                  <p className='inner-p-marks'>&bull; Be Equipped for Ministry.</p>
                  <p className='inner-p-marks'>&bull; Tujitayarishe kwa ajili ya huduma.</p>
                  <p className='inner-p-marks'>&bull; Gwithagathaga Ni undu wa utungata.</p>


                </div>


                <div className="mission">

                  <p className='mission-titles'>Vision</p>

                  <p className='inner-p-marks'>&bull; Grow the world Spiritually</p>
                  <p className='inner-p-marks'>&bull; Equip the community for ministry</p>
                  <p className='inner-p-marks'>&bull; Leave the world a better place</p>


                </div>


            </div>


            <div className="projects">


              <p className='prayer-title'>Projects</p>

                <div className="container">

                  <img src ={churchView}  alt= 'church-view' className='church-projects'/>

                  <p className='project-desc'>Building a complex for the Youth</p>

                  <Link
                  
                  className='project-contribute'
                  activeClass="active"
                  to="contribute"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  >
                    
                    Contribute
                    
                  </Link>

                </div>

            </div>

            <div className="prayer-cells">

              <p className='prayer-title'>Prayer Cells</p>

              <p className='prayer-desc'>Worship within your neighborhood, maombi mtaani.</p>

              <p className='prayer-meeting'>Prayer Cells Meeting</p>

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


            <div className='donate' id ='contribute'>

              <p className='prayer-title'>Contribute to the church</p>

              <div className="contribution">

                <div className='offering'>

                  <img src={mpesa} alt='mpesa' className='mpesa'/>
                  <p>Pay Via the Paybill:<span className='accounts'>834868</span></p>
                  <p>Account Number:<span className='accounts'>Tithe OR Offerings </span></p>


                </div>

                <div className='offering'>

                  <img src={equity} alt='mpesa' className='mpesa'/>
                  <p className='eq-title'>Development Account</p>
                  <p>Pay Via the Paybill:<span className='accounts'>247247</span></p>
                  <p>Account Number:<span className='accounts'> 0090290373862 </span></p>

                </div>

                <div className='offering'>

                <img src={std} alt='mpesa' className='mpesa'/>
                <p className='eq-title'>Cheques are payable to:</p>
                <p>Account Number:<span className='accounts'> 0102812751600 </span></p>


                </div>


              </div>



            </div>


            
          </div>


        </section>
    
    
    
    </>


  )
}

export default Home