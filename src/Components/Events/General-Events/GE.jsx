import React, {useState, useEffect} from 'react'
import './Ge.css'
import generalEvents from '../../../Assets/Events/general_events.jpg'
import {Link} from 'react-router-dom'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {BsSearch} from 'react-icons/bs'

function GeneralEvents (){

    return(

        <>


            <section className="general-events">

                <p className='gen-title'>Events</p>
                {/* <p className='event-desc'>These are events that involve the whole of the church</p> */}

                    <div className="search">

                        <input
                            type="text"
                            placeholder="search by name of event"
                            // value={searchEvent}
                            // onChange={handleSearch}
                            // onKeyDown={handleKeyDown}
                            // onClick={searchFunc}
                        />

                        <BsSearch className="search-icon"  />
                    </div>

                

                <div className='all-events'>


                    <div className="all-events-container">

                       

                        <p className='upcoming-title'>Current Events</p>


                        <div className='upcoming-events'>


                            <div className="upcoming-events-container">

                                <div className='img-cont'>
                                    
                                    <img src ={generalEvents} alt =''  className='img-events'/>
                                    <Link to = '/general-events/:id' className='explore'>Explore</Link>

                                </div>


                                <p className='event-title'>Event Title:</p>
                                <p className='event-title'>Event Description:</p>

                            </div>

                            

                            
                        
                        </div>


                        <p className='upcoming-title'>Upcoming Events</p>

                        <div className='upcoming-events'>

                            <div className="upcoming-events-container">

                                <div className='img-cont'>
                                        
                                    <img src ={generalEvents} alt =''  className='img-events'/>
                                    <Link to = '/general-events/:id' className='explore'>Explore</Link>

                                </div>


                                <p className='event-title'>Event Title:</p>
                                <p className='event-title'>Event Description:</p>
                                <p>Actual Date for Event:</p>
                                <p>Registration Deadline:</p>

                            </div>

                            

                                   
                        </div>


                        <p className='upcoming-title'>Past Events</p>

                        <div className='upcoming-events'>

                            <div className="upcoming-events-container">

                                <div className='img-cont'>
                                        
                                    <img src ={generalEvents} alt =''  className='img-events'/>
                                    <Link to = '/general-events/:id' className='explore'>Explore</Link>

                                </div>


                                <p className='event-title'>Event Title:</p>
                                <p className='event-title'>Event Description:</p>
                                

                            </div>


                                
                        </div>

                    </div>

                </div>

            </section>
        
        
        
        </>
    )
}


export default GeneralEvents