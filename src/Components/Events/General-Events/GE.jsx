import React from 'react'
import './Ge.css'
import generalEvents from '../../../Assets/Events/general_events.jpg'
import {Link} from 'react-router-dom'
 


function GeneralEvents (){

    return(

        <>


            <section className="general-events">

                <p className='gen-title'>General Events</p>
                <p className='event-desc'>These are events that involve the whole of the church</p>

                <div className='all-events'>

                    <div className='upcoming-events'>

                        <p className='upcoming-title'>Current Events</p>

                        <img src ={generalEvents} alt =''  className='img-events'/>

                        <Link to = '/general-events/:id' className='explore'>Explore</Link>

                        <p>Event Title:</p>
                        <p>Event Description:</p>


                       

                    </div>

                    <div className='upcoming-events'>

                        <p className='upcoming-title'>Upcoming Events</p>
                        
                    </div>

                    <div className='upcoming-events'>

                        <p className='upcoming-title'>Past Events Events</p>
                        
                    </div>


                </div>

            </section>
        
        
        
        </>
    )
}


export default GeneralEvents