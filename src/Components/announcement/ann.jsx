import React from 'react'
import './ann.css'




function Announcement (){


    return(

        <>

            <section className="announcement">

                <p className='news-title'>News & Notices</p>

                <div className="announcement-details">

                    {/* <details className="details">

                        <summary>Tithe & First Fruit</summary>
                        <p>Pick the envelope from the Elders/Ushers</p>


                    </details> */}

                    <div className="etiqutte">

                        <p className='etiqutte-title'> Church Etiquette</p>

                        <p className='follow-rules'>&bull; Members are discouraged to walk in and out of the church during readings, prayers and sermon. You can enter or leave during any other time and avoid creating a scene.</p>

                        <p className='follow-rules'>&bull; Kindly avoid using your Mobile Phone furing the service.</p>

                        <p className='follow-rules'>&bull; Follow the church protocol for standing, sitting and kneeling.</p>

                        <p className='follow-rules'>&bull; Kindly respect the ushers directives in all ways.</p>


                    </div>

                    <hr></hr>

                    <div className="etiqutte">

                        <p className='etiqutte-title'>Tithe & First Fruit</p>

                        <p className='follow-rules'>&bull; Pick the envelope from Elders/Ushers.</p>
                        <p className='follow-rules'>&bull; Tithe Takes place <mark>every Sunday in all Services</mark>.</p>
                        <p className='follow-rules'>&bull; Feel free to indicate your <mark>CellPhone number </mark> on the tithing envelope. Asante!!</p>


                    </div>

                    <hr></hr>

                    





                </div>



            </section>


        
        
        </>


    )
}


export default Announcement