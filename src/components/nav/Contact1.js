import React from 'react'

export const Contact = () => {
  return (
    <div className='animate__animated animate__zoomInDown contacto'>

      <h1>Contacto</h1>

      <form className='form' action='mailto:Diego.romero.s@hotmail.com'>
        <input type="text" placeholder='Name' /><br />
        <input type="text" placeholder='Last Name' /><br />
        <input type="text" placeholder='Email' /><br />
        <textarea placeholder="Reason to Contact" /><br />
        <button type='submit' className='button-contact-main button-contact button-contacto'>Send</button>
      </form>

    </div>
  )
}
