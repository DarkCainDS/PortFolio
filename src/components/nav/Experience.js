import React, { useEffect,  } from 'react'
import 'animate.css';
import { Circle } from '../Circle';
import '../Styles/Circles.css';




export const Experience = () => {



  useEffect(() => {

  }, []);

  return (
    <div>
      <div className='animate__animated animate__lightSpeedInLeft animate__faster 100ms simbologia'>
      <img src='/assets/images/SIMBOLOGIA LISTA V1.png' alt='simbologia' ></img>
      </div>
      
      <div className='animate__animated animate__lightSpeedInRight animate__faster 100ms experience'>

        <div className='circle1'>
        <h1>HTML</h1>
        <Circle porcent={50} />
        
        </div>

        <div className='circle2'>
          <h1>CSS</h1>
          <Circle porcent={45}/>
        </div>

        <div className='circle3'>
          <h1>Javascript</h1>
          <Circle porcent={45} />
        </div>

        <div className='circle4'>
          <h1>Angular</h1>
          <Circle porcent={35} />
        </div>

        <div className='circle5'>
          <h1>React</h1>
          <Circle porcent={35}/>
        </div>

        <div className='circle6'>
          <h1>AWS</h1>
          <Circle porcent={25} />
        </div>

        <div className='circle7'>
          <h1>SQl</h1>
          <Circle porcent={35} />
        </div>

        <div className='circle8'>
          <h1>Mongodb</h1>
          <Circle porcent={30}/>
        </div>



      </div>
      <div className='bottom123'>
         <hr/>
         </div>
    </div>
  )
}
