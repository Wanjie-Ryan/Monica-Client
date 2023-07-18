import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'


function Footer() {

    const year = new Date().getFullYear()


  return (


    <>


        <footer className ='main'>

            <div className="main-footer">

                <p className ='footer-title'>ACK St.Monica's Church Mugumo-ini - Thika</p>

                <div className="footer-details">

                    <div className="contact-details">

                        <p className ='contact-title'>Reach us at any of the links below:</p>

                        <a href ='https://www.facebook.com/profile.php?id=100071086714420' target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
                        <a href ='mailto:ack.mugumo-ini.thika@gmail.com'><BiLogoGmail/></a>




                    </div>

                    <div className="quick-links">

                        <p>Quick Links</p>
                        <p>Home</p>
                        <p>Contact</p>
                        <p>Events</p>
                        <p>Gallery</p>
                        <p>Membership</p>


                    </div>

                    <div className="random-scriptures">

                        <p>Jesus Wept</p>

                    </div>



                </div>

                <p>Developed by Ryan Wanjie <a href ='tel:+254791618714'>+254791618714</a></p>
                <p className='footer-rights'>Copyright © {year} St.Monica. All rights reserved.</p>

            </div>



        </footer>

    
    </>

  )
}

export default Footer