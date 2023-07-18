import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
import SiteLogo from '../../Assets/favicon.jpg'
import {BiHome, BiSolidContact} from 'react-icons/bi'
import {FcGallery} from 'react-icons/fc'
import {MdOutlineRememberMe} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'


function Navbar() {


  return (


    <>

        <nav className ='nav-main'>

            <div className="inner-nav">

                <div className="site-logo">

                    <div className="flip-box img-logo">

                        <div className="flip-box-inner">

                            <div className="flip-box-front">

                                <img className="logo" src={SiteLogo} alt="logo" />

                            </div> 

                            <div className="flip-box-back">
   
                                <p>Be Equipped For Ministry </p>
                                
                            </div> 

                        </div>

                    </div>



                </div>



                <div className="nav-details">

                    <div className="nav-links">

                        <p className='nav-p'>Home</p>
                        <p className='nav-p'>Contact</p>
                        <p className ='nav-p'>Events</p>
                        <p className='nav-p'>Gallery</p>
                        <p className='nav-p'>Become a Member</p>
                        <CgProfile title='Profile' className='icon'/>


                    </div>



                </div>

            </div>

        </nav>

        <aside>

            


        </aside>


    
    
    </>


  )
}

export default Navbar