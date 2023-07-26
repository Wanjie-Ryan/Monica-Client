import React from 'react'
import './Team.css'
import vicar from '../../Assets/homeImages/vicar.jpg'
import mercy from '../../Assets/homeImages/mercy.jpg'


function Team() {

  return (

    <>
    
        <section className="main-team">

            <p className='team-title'>Meet the Team behind ACK St.Monica's Church Mugumo-ini</p>

            <div className="team-container">

                <div className="bishop">

                    <div className="bishop-img-cont">

                        <img src ={vicar} alt ='bishop' className='img-bishop'/>
                        <p className='name-staff'>The Bishop - xxxxxxxxxx</p>

                    </div>

                </div>


                
                
            </div>




        </section>


    </>




  )
}

export default Team