import React from 'react'
import'./contact.css'
import {BsFacebook} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'
import {AiTwotonePhone} from 'react-icons/ai'




function Contact() {



  return (


    <>

      <section className= 'contact'>

        <div className="intro-contact">

          <p>Feel free to contact us, Come, Let us Fellowship Together, Where two or more are gathered, the Lord is with us.</p>


        </div>

        <div className="floating-button">

          <button>Office Hours</button>
                        
        </div>

        <div className="main-contact">

          <div className="maps">

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15956.654636648444!2d37.0648366!3d-1.0379473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4f730b996ac9%3A0xc4d0ef2f57a9cf90!2sACK%20St.%20Monica%20Church%2C%20Mugumoini!5e0!3m2!1sen!2ske!4v1689767645647!5m2!1sen!2ske" width="600" height="450" className= 'church-maps' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    <div className="contact-details">

                        <p className ='contact-title'>Reach us at any of the links below:</p>

                        <a href ='https://www.facebook.com/profile.php?id=100071086714420' target="_blank" rel="noopener noreferrer" className ='footer-icons-link'>

                            <BsFacebook className ='footer-icons'/>

                        </a>

                        <a href="mailto:ack.mugumo-ini.thika@gmail.com" className="footer-icons-link">

                            <BiLogoGmail className="footer-icons" />
                        </a>

                        <a href ='tel:0720 577944' className="footer-icons-link">

                            <AiTwotonePhone className="footer-icons" />
                        
                        </a>

                        
                    </div>

          </div>

          <form className="contact-box">

            <div className ='name'>

              <label>Name:</label>
              <input className ='input-name' required placeholder='Enter your name*'/>


            </div>

            <div className ='name'>

              <label>Email:</label>
              <input className ='input-name' required placeholder='Enter your email*'/>


            </div>

            <div className ='name'>

              <label>Your message:</label>

              <textarea className="myTextArea" name="myText" rows="4" cols="50">

                Type your message here

              </textarea>


            </div>

            <button type='submit' className='submission-btn'>Submit</button>






          </form>



        </div>




      </section>
    
    
    </>


    
  )
}

export default Contact