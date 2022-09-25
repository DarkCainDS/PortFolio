import React from 'react'
import './Modal.css'


export const Modal = ({closeModal,isOpen ,children}) => {
  return (

    <div className={`modal ${isOpen && 'is-open'}`} >    {/*onClick={closeModal}*/}
        <div className={'modal-container-'}>
            <button className='modal-close' onClick={closeModal}>X</button>
            {children}
        </div>

    </div>
  )
}
