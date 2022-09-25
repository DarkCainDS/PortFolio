import React from 'react'
import { NavLink } from 'react-router-dom'
import 'animate.css';

export const Home = () => {
   return (
      <div className='animate__animated animate__zoomIn animate__faster 10ms'>
         
         <div><h1 className='title'>Web Developer</h1></div>

         <div className='presentation-box'>

            <div className='photo-presentation'>
               <img src='/assets/images/Foto-presentacion-cut.jpg' alt='presentation' />

            </div>

            <div className='browser'>
               <div>
                  <p>Hi my name is Diego Romero and I am from Chile, Actually looking for a job in Front-End.

                     Well , my first experience with it, was when I have ten to twelve, I was tried to learn java ,but my English was so poor I didn't have any chance reading documentations so, java beats me, a couple of years later thirteen or fourteen, I made a server from a game called lineage 2,what I do was interact with the database of game using MySQL and XAMPP , I don't change the default setting of the game or improve the game ,I just made some changes in database like xp rates , drop rates, creation of NPC , add some clothes ,items and remove some other stuff , in addition the fix the bug appears making change of the database ;
                     After that I left a little apart the IT world ,for college , University and girlfriend.
                     <br/>
                     A couple of years ago I tried to learn Kotlin using Android studio , I learn a lot from YouTube channel called "Mouredev" ,I don't do any project on Kotlin cause I really think my knowledge is not enough to do a full project and don't have enough time .
                     <br/>Last year I have a motorcycle accident which give a lot of "free time" so I decided return IT world,with YouTube and teach platforms is more easy to learn,I start with python doing exercises and learning how it works , that way I can improve my programming thinking,don't go through machine learning , data scientist or speciality in python, cause I prefer learn more about web developers .
                     In that moment I start to learn HTML, CSS, JavaScript for YouTube ,but the teachers give long explanations In YouTube so I decided buy a few of course in Udemy by Victor Robles Web, in that course I learn about the Front End,
                     HTML, CSS , JavaScript, frameworks (in angular course did a blog using mongodb and angular ),
                     Also a bit of typescript, SASS , git because I still I don't have any job in IT and I don't know people involved in tech sector "only on Instagram " .<br/>
                     I really don't know how it works web developers or enterprises cause I never work for anybody in tech world , I am self-taught ,so I don't know how it works, but if I can work meanwhile I learning, better for me .
                     I hope we can work together and be patient with me ,it is my first job in tech.</p>

               </div>


            </div>
            <div className='position-button'><NavLink to="/Contact" className='button-contact-main'><button className='button-contact'>Contact me</button></NavLink></div>
         </div>
      </div>
   )
}
