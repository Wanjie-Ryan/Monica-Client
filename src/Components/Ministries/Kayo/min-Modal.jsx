import React from 'react'
// import './reg.css'
import Modal from 'react-modal'



function KayoRegsiter({ isOpen, onClose }) {


  return (

    <Modal
    
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Register Modal"
      className="modal-content update-modal-content"
      overlayClassName="modal-overlay"

    >

        <div className ='modal-content-main'>

                <h2>Register As a KAYO</h2>
                <p>Download the form below and submit it physically to the church offices</p>


                <button  className='update-modal-button' >Download Form</button>
                <button onClick={onClose} className ='modal-close-button'>Cancel</button>


        </div>


    </Modal>

  )
}

export default KayoRegsiter 