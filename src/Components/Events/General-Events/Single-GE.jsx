import React from 'react'
import './SingleGE.css'
import generalEvents from '../../../Assets/Events/general_events.jpg'





function SingleGE (){

    return(

        <>


            <section className="single-Events">

                <div className="single-events-container">

                    <div className='img-cont'>

                        <img src ={generalEvents}  alt ='single-image' className='single-image-event'/>


                    </div>

                    <p className='events-title-single'>Events Title:</p>
                    <p className='events-title-single'>Events Description:</p>

                    <button className='event-reg-btn'>Register for Event</button>





                </div>





            </section>
        
        
        
        </>


    )
}


export default SingleGE