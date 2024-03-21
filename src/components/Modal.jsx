import React from 'react'
import { createPortal } from 'react-dom';
import '../styles/Modal.css'
import { TodoContext } from './TodoContext';

function Modal({children}) {
  const {toggleModal} = React.useContext(TodoContext)
  return createPortal(
    <div onClick={toggleModal} className='ModalBackground'>
        {children}
    </div>,
    document.getElementById('modal')
  )
}

export { Modal }