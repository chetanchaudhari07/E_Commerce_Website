import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ hideModal, toggleModal, children }) => {
    if (hideModal) return null;
  
    return (
      <>
        <div className="modalOverlay" onClick={() => toggleModal()} />
        <div className="modalWrap">
          <div className="modal">
            {React.Children.map(children, (child, index) => {
            
              return React.cloneElement(child, { key: index });
            })}
          </div>
        </div>
      </>
    );
  }

export default Modal;