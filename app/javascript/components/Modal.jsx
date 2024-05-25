import React from "react";
export default function Modal({ showModal, setShowModal, children }) {
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div id="modal" className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-content">
        <span onClick={closeModal} className="close-btn">
          &times;
        </span>
        {children}
      </div>
    </div>
  );
}
