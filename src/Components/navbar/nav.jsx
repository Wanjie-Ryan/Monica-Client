import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
import SiteLogo from '../../Assets/favicon.jpg'
import {BiHome, BiSolidContact,BiMenu} from 'react-icons/bi'
import {FcGallery} from 'react-icons/fc'
import {MdOutlineRememberMe} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {AiFillCloseCircle} from 'react-icons/ai'



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
                        <BiMenu className='icon-menu'/>



                    </div>



                </div>

            </div>

        </nav>

        <aside className ='side'>

            <div className="close-btn">

                <AiFillCloseCircle

                 className="close"
                
                />

            </div>

            <div className="main-side">

                <div className="site-logo side-logo">

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


                <div className="side-details">

                    <p className ='side-links'>Home</p>
                    <hr></hr>
                    <p className ='side-links'>Contact</p>
                    <hr></hr>
                    <p className ='side-links'>Events</p>
                    <hr></hr>
                    <p className ='side-links'>Gallery</p>
                    <hr></hr>
                    <p className ='side-links'>Become a Member</p>
                    <hr></hr>
                    <CgProfile title='Profile'  id ='side-links'/>

                    

                </div>


                







            </div>






        </aside>


    
    
    </>


  )
}

export default Navbar