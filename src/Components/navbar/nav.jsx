import React, {useState} from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
import SiteLogo from '../../Assets/favicon.jpg'
import {BiHome, BiSolidContact,BiMenu} from 'react-icons/bi'
import {FcGallery} from 'react-icons/fc'
import {MdOutlineRememberMe} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {AiFillCloseCircle} from 'react-icons/ai'
import RegisterModal from '../Modals/Register-Modal'


function Navbar() {

    const [showNav, setshowNav] = useState(false)

    const handleNav = ()=>{

        setshowNav(!showNav)
    }

         const [regModalOpen, setRegModalOpen] = useState(false);

        const openRegModal = () => {
            setRegModalOpen(true);
        };

        const closeRegModal = () => {
            setRegModalOpen(false);
        }; 
        
    const [events, setEvents] = useState(false)

    const setShowEvents =()=>{

        setEvents(!events)
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

                        <div className="nav-links-inner">

                            <button className='for-new-users remove' onClick={openRegModal}>Become a Member</button>

                        </div>

                        <div className="nav-links-inner">

                            <Link to ='/' className='nav-p'><p className='nav-p'>Home</p></Link>

                        </div>

                        {/* <div className="nav-links-inner"> */}

                            <BiMenu className='icon-menu' onClick ={handleNav}/>

                        {/* </div> */}

                        <div className="nav-links-inner">

                             <Link to ='/contact' className='nav-p'><p className='nav-p remove'>Contact</p></Link>

                        </div>

                        <div className="nav-links-inner">

                            <p className ='nav-p remove' onClick ={setShowEvents} id ='position'>Events</p>


                            {events &&
                            
                                <div className='events events-remove'>

                                    <Link to ='/events' className='nav-p'><p className ='side-links'>General Events</p></Link>
                                    <hr></hr>
                                    <Link to ='/events' className='nav-p'><p className ='side-links'>Events for Kids</p></Link>
                                    <hr></hr>
                                    <Link to ='/events' className='nav-p'><p className ='side-links'>Events for Teens</p></Link>
                                    <hr></hr>
                                    <Link to ='/events' className='nav-p'><p className ='side-links'>Events for Youths</p></Link>
                                    <hr></hr>
                                    <Link to ='/events' className='nav-p'><p className ='side-links'>Events for Men</p></Link>
                                    <hr></hr>
                                    <Link to ='/events' className='nav-p'><p className ='side-links'>Events for Ladies</p></Link>

                                </div>
                            }

                        </div>


                        <div className="nav-links-inner">

                            <Link to ='/gallery' className='nav-p'><p className='nav-p remove'>Gallery</p></Link>

                        </div>

                        <div className="nav-links-inner">

                            <Link to ='/announce'  className='nav-p'><p className='nav-p remove'>Announcements</p></Link>

                        </div>


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


                    <button className='for-new-users side-btn' onClick={openRegModal}>Become a Member</button>
                    <Link to ="/" className='nav-p'><p className ='side-links'>Home</p></Link>
                    <hr></hr>
                    <Link to ='/contact' className='nav-p'><p className ='side-links'>Contact</p></Link>
                    <hr></hr>

                    <p className ='side-links' onClick ={setShowEvents}>Events</p>

                        {events &&

                            <div className='events'>

                                <Link to ='/events' className='nav-p'><p className ='side-links'>General Events</p></Link>
                                    <hr></hr>
                                <Link to ='/events' className='nav-p'><p className ='side-links'>Events for Kids</p></Link>
                                    <hr></hr>
                                <Link to ='/events' className='nav-p'><p className ='side-links'>Events for Teens</p></Link>
                                    <hr></hr>
                                <Link to ='/events' className='nav-p'><p className ='side-links'>Events for Youths</p></Link>
                                    <hr></hr>
                                <Link to ='/events' className='nav-p'><p className ='side-links'>Events for Men</p></Link>
                                    <hr></hr>
                                <Link to ='/events' className='nav-p'><p className ='side-links'>Events for Ladies</p></Link>

                            </div>
                         
                         }

                    
                    <hr></hr>
                    <Link to ='/gallery' className='nav-p'><p className ='side-links'>Gallery</p></Link>
                    <hr></hr>
                    <Link to ='/announce'  className='nav-p'><p className ='side-links'>Announcements</p></Link>
                    <hr></hr>
                   

                </div>
   
            </div>

        </aside>
        
        )}

            <RegisterModal
                isOpen={regModalOpen}
                onClose={closeRegModal}
                // onUpdate={handleUpdateSubmit}
                // name={votername}
                // name={contact}

                // onChange={(e) => {
                // const { name, value } = e.target;
                // if (name === 'namesvoter') setvotername(value);
                // if (name === 'contact') setcontact(value);
                // }}

            />

    
    
    </>


  )
}

export default Navbar