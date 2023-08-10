import React from "react";
import "./reg.css";
import Modal from "react-modal";
import memebershipForm from "../../Assets/MEMBERSHIP FORM-2022.pdf";

function Regsiter({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Register Modal"
      className="modal-content update-modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content-main">
        <h2>Register New Member</h2>
        <p className="modal-note">
          Note:Only for new members who have <mark>never</mark> been to
          St.Monica
        </p>
        <p className="modal-note">
          Download the Registration form below and submit it physically to the
          church office.
        </p>

        <a href={memebershipForm} download>
          <button className="update-modal-button"> Download form</button>
        </a>
        <button onClick={onClose} className="modal-close-button">
          Cancel
        </button>
      </div>
    </Modal>
  );
}

export default Regsiter;
