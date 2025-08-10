import React from 'react';

function Modal({ children, onCloseModal }) {
  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <button className='modal_button--close' onClick={onCloseModal}>
          ❌
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
