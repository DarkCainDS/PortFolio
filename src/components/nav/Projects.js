import React from 'react'
import { Card } from '../Card';
import '../Styles/card-hover.css';
import Fade from 'react-reveal/Fade';
import Matrix from '../helper/Matrix';


export const Projects = () => {


  return (
    <div className='project-page' >
      <Matrix >
      </Matrix>
      <div className='card-order' >
        <Fade bottom>

          <div className='unit-chart'>
            <Card title="Web-Quiz" texto="Programmer Web Quiz" portrait='/assets/images/Quiz-Web.gif' link='https://github.com/DarkCainDS/Web-Quiz' web='https://webquiz-by-darkcainds.web.app/' />
          </div>
          <div className='unit-chart'>
            <Card title="To-do-list" texto="To do project" portrait='/assets/images/To-do-list.png' link='https://github.com/DarkCainDS/project-To-do-list' web='https://to-do-list-by-diegoromero.web.app/' />
          </div>
          <div className='unit-chart'>
            <Card title="Weather Web" texto="Weather Web " portrait='/assets/images/Weather.jpg' link='https://github.com/DarkCainDS/Weather-web' web='https://weather-by-diegoromero.web.app/home' />
          </div>
          <div className='unit-chart'>
            <Card title="Countdown Timer" texto="First Web" portrait='/assets/images/Countdown Timer.png' link='https://github.com/DarkCainDS/project-CountdownV2' web='https://countdown-by-diegoromero.web.app/' />
          </div>

          <div className='unit-chart'>
            <Card title="Project 5" texto="Site under construction" portrait='/assets/images/card-hover4.png' />
          </div>
          <div className='unit-chart'>
            <Card title="Project 6" texto="Site under construction" portrait='/assets/images/card-hover5.png' />
          </div>
          <div className='unit-chart'>
            <Card title="Project 7" texto="Site under construction" portrait='/assets/images/card-hover6.png' />
          </div>
          <div className='unit-chart'>
            <Card title="Project 8" texto="Site under construction" portrait='/assets/images/card-hover7.png' />
          </div>
          <div className='unit-chart'>
            <Card title="Project 9" texto="Site under construction" portrait='/assets/images/card-hover8.png' />
          </div>
          <div className='unit-chart'>
            <Card title="Project 10" texto="Site under construction" portrait='/assets/images/card-hover9.png' />
          </div>
          <div className='unit-chart'>
            <Card title="Project 11" texto="Site under construction" portrait='/assets/images/card-hover10.png' />
          </div>
        </Fade>

      </div>


      <div className='card-order-bottom'>
        <br />
      </div>


    </div>
  )
}
