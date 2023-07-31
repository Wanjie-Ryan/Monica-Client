import React from 'react'
import './cont-modal.css'
import Modal from 'react-modal'



function ContModal({ isOpen, onClose, }) {


  return (

    <Modal
    
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Contact Modal"
      className="modal-contents update-modal-content"
      overlayClassName="modal-overlay"

    >

        <div className ='modal-content-main-contact'>

            <h2>Office Working Hours</h2>

            <div className="table-container">

                <table className="custom-table">

                  <thead>

                    <tr>

                      <th>Day</th>
                      <th>Time</th>
                    
                    </tr>

                  </thead>

                  <tbody>

                    <tr className="row-even">

                      <td>Monday</td>
                      <td>8:00Am - 5:00Pm</td>
                      
                    </tr>

                    <tr className="row-even">

                      <td>Tuesday</td>
                      <td>8:00Am - 5:00Pm</td>
                      

                    </tr>

                    <tr className="row-even">

                      <td >Wednesday</td>
                      <td>8:00Am - 5:00Pm</td>
                      

                    </tr>

                    <tr className="row-even">

                      <td>Thursday</td>
                      <td>8:00 Am - 5:00Pm</td>
                      
                    </tr>

                    <tr className="row-even">

                      <td>Friday</td>
                      <td>8:00 Am - 5:00Pm</td>
                      
                    </tr>

                    <tr className="row-even">

                      <td>Saturday</td>
                      <td>Closed</td>
                      

                    </tr>

                    <tr className="row-even">

                      <td>Public Holdiays</td>
                      <td>Closed</td>
                      

                    </tr>

                   
                  </tbody>

                </table>

             </div>


  
            <button onClick={onClose} className ='modal-close-button'>Cancel</button>

                

        </div>


    </Modal>

  )
}

export default ContModal