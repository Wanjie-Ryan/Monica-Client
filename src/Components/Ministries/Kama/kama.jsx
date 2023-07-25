import React from 'react'
import './kama.css'
// import Men from '../../../Assets/homeImages/men.jpg'
import KamaLogo from '../../../Assets/Ministries/KAMA.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


function Kama() {


    const KamaData =[

        {
            id:1,
            image:require('../../../Assets/homeImages/men.jpg'),
            
        },

        {
            id:2,
            image:require('../../../Assets/homeImages/men2.jpg')
        }
    ]



  return (


    <>


        <section className="kama">

           <div className="kama-cont"> <img src={KamaLogo} alt ='kama-logo' className='kamalogo'/></div>
            <p className='kama-title'>Kenya Anglican Men's Association</p>

            <div className='kama-container'>

                <div className='kama-img-cont'>

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
                        { KamaData.map((item) => (

                            <SplideSlide key={item.id}>

                            <img src={item.image} alt={item.message} className='img-kama'/>
                        
                            </SplideSlide>

                        ))}

                    </Splide>



                </div>

                <div className="kama-details">

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsum distinctio fugiat doloremque sit beatae magni libero quod aspernatur eveniet, sunt cupiditate cum dolorem minima dolore qui reiciendis quas atque?</p>






                </div>



            </div>




        </section>


    
    
    
    </>


  )
}

export default Kama