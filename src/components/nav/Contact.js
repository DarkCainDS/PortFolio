import React from 'react'
import { useEffect } from 'react'
import wavyInput from '../helper/wavyinput'

export const Contact = () => {

  useEffect(() => {
    wavyInput()
  }, [])

  return (
    <div className='main-contact'>


      <div className='right-contact'>


        <h1>Contact</h1>
        <form action="https://formsubmit.co/diego.romero.s@hotmail.com" method="POST">
          <div className="form-control"  >
            <input type="text" required name='Name'/>
            <label>Name</label>
          </div>
          <div className="form-control" >
            <input type="text" required name='Last-name'/>
            <label>Last Name</label>
          </div>
          <div className="form-control" >
            <input type="email" required name='Email'/>
            <label>Email</label>
          </div>
          <div className="form-control" >
            <input type="text" required name='Reason-to-contact'/>
            <label>Reason-to-contact</label>
          </div>
          <div className='contact-button-box'><button type='submit' className='button-contact-main button-contact button-contacto'>Send</button></div>
        </form>

      </div>



    </div >
  )
}
