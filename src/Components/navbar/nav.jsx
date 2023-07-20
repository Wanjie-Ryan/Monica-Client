import React, {useState} from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
import SiteLogo from '../../Assets/favicon.jpg'
import {BiHome, BiSolidContact,BiMenu} from 'react-icons/bi'
import {FcGallery} from 'react-icons/fc'
import {MdOutlineRememberMe} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {AiFillCloseCircle} from 'react-icons/ai'



function Navbar() {

    const [showNav, setshowNav] = useState(false)

    const handleNav = ()=>{

        setshowNav(!showNav)
    }


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

                        <Link to ='/' className='nav-p'><p className='nav-p'>Home</p></Link>
                        <Link to ='/contact' className='nav-p'><p className='nav-p remove'>Contact</p></Link>
                        <Link to ='/events' className='nav-p'><p className ='nav-p remove'>Events</p></Link>
                        <Link to ='/gallery' className='nav-p'><p className='nav-p remove'>Gallery</p></Link>
                        <Link to ='/announce'  className='nav-p'><p className='nav-p remove'>Announcements</p></Link>
                        <BiMenu className='icon-menu' onClick ={handleNav}/>


                    </div>



                </div>

            </div>

        </nav>

        { showNav && (
        <aside className='side'>

            <div className="close-btn">

                <AiFillCloseCircle

                 className="close"
                 onClick ={handleNav}
                
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

                    <Link to ="/" className='nav-p'><p className ='side-links'>Home</p></Link>
                    <hr></hr>
                    <Link to ='/contact' className='nav-p'><p className ='side-links'>Contact</p></Link>
                    <hr></hr>
                    <p className ='side-links'>Events</p>
                    <hr></hr>
                    <Link to ='/gallery' className='nav-p'><p className ='side-links'>Gallery</p></Link>
                    <hr></hr>
                    <Link to ='/announce'  className='nav-p'><p className ='side-links'>Announcements</p></Link>
                    <hr></hr>
                   

                </div>
   
            </div>

        </aside>
        
        )}


    
    
    </>


  )
}

export default Navbar