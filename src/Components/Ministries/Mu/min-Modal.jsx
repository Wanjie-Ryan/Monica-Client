import React from 'react'
import './reg.css'
import Modal from 'react-modal'
import {BsFillPersonFill, BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {BiCurrentLocation} from 'react-icons/bi'


function MuRegsiter({ isOpen, onClose, onUpdate, votername, contact, onChange, errmsg }) {


  return (

    <Modal
    
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Register Modal"
      className="modal-content update-modal-content"
      overlayClassName="modal-overlay"

    >

        <div className ='modal-content-main'>

                <h2>Register As a KAMA</h2>

                <div className ='name'>

                    <BsFillPersonFill/>

                    <input type="text" name="namesvoter" placeholder ='Enter Your name' value={votername} onChange={onChange} />

                </div>

                <div className ='name'>

                    <MdEmail/>

                    <input type="text" name="namesvoter" placeholder ='Enter your email' value={votername} onChange={onChange} />

                </div>

                <div className ='name'>

                    <BiCurrentLocation/>

                    <input type="text" name="namesvoter" placeholder ='Where do you reside?' value={votername} onChange={onChange} />

                </div>


                <div className="name">
                    
                  <BsFillTelephoneFill/>


                  <input type="text" name="contact" placeholder ='Enter Your PhoneNumber' value={contact} onChange={onChange} />

                   
                </div>


                

                <button onClick={onUpdate} className='update-modal-button' >Submit</button>
                <button onClick={onClose} className ='modal-close-button'>Cancel</button>

                {/* {errmsg && <p className ='error'>{errmsg}</p>} */}

        </div>


    </Modal>

  )
}

export default MuRegsiter 