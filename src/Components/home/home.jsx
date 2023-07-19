import React from 'react'
import './home.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';



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


            




          </div>





        </section>
    
    
    
    </>


  )
}

export default Home