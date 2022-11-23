import React from 'react'
import { useModal } from '../Hooks/useModal';
import { Modal } from '../Modal/Modal';
import 'animate.css';
import ImageSlider from '../helper/ImageSlider';
import '../Modal/Modal.css';
import pdf from '../Pdf/CV-DiegoRomero.pdf'

export const Home = () => {

  const [isOpen, openModal, closeModal] = useModal(false);
  const [isOpen2, openModal2, closeModal2] = useModal(false);

  const slides = [
    { url: "/assets/images/Certifieds/Udemy-02.jpg", title: "Udemy-2" },
    { url: "/assets/images/Certifieds/Udemy-01.jpg", title: "Udemy-1" },
    { url: "/assets/images/Certifieds/aws-cloud-quest-cloud-practitioner.png", title: "AWS"},
    { url: "/assets/images/Certifieds/Udemy-3.jpg", title: "Udemy-3" },
    { url: "/assets/images/Certifieds/Introduccion-al-Pentesting.jpg", title: "Pentesting-1" },
    { url: "/assets/images/Certifieds/diploma-ingles-customer-service.jpg", title: "English-1" },
    { url: "/assets/images/Certifieds/diploma-entrevistas-ingles.jpg", title: "English-2" },
    { url: "/assets/images/Certifieds/diploma-bd.jpg", title: "Database-1" },
    { url: "/assets/images/Certifieds/diploma-introduccion-backend.jpg", title: "Back-End-1" },
    { url: "/assets/images/Certifieds/diploma-mongodb.png", title: "Back-End-1" },
    { url: "/assets/images/Certifieds/diploma-frontend-developer.png", title: "FrontEnd-1" },
    { url: "/assets/images/Certifieds/diploma-frontend-developer-practico.png", title: "FrontEnd-2" },
    

  ];

  const containerStyles = {
    width: "400px",
    height: "280px",
    margin: "0 auto",
  };


  return (
    <div className='main-layer'>

      <div><h1 className='title'>Web Developer</h1></div>

      <div className='home-header'>

        <div className='box-image'>
          <img src='/assets/images/Foto-presentacion-cut.jpg' alt='presentation' />
        </div>

        <div className='box-buttons'>
          <button className='option-buttons' onClick={openModal}>
            <h1>Certified</h1>
          </button>
          <Modal isOpen={isOpen} closeModal={closeModal}>
            <div>

              <div style={containerStyles} >
                <ImageSlider slides={slides} />
              </div>
            </div>


          </Modal>
          <button className='option-buttons' onClick={openModal2}>
            <h1>Biography</h1>
          </button>
          <Modal isOpen={isOpen2} closeModal={closeModal2}>
            <div className='paragraph'>
            <p>Hi my name is Diego Romero and I am from Chile, Actually looking for a job in Front-End.

              Well , my first experience with it, was when I have ten to twelve, I was tried to learn java ,but my English was so poor I didn't have any chance reading documentations so, java beats me, a couple of years later thirteen or fourteen, I made a server from a game called lineage 2,what I do was interact with the database of game using MySQL and XAMPP , I don't change the default setting of the game or improve the game ,I just made some changes in database like xp rates , drop rates, creation of NPC , add some clothes ,items and remove some other stuff , in addition the fix the bug appears making change of the database ;
              After that I left a little apart the IT world ,for college , University and girlfriend.
              <br />
              A couple of years ago I tried to learn Kotlin using Android studio , I learn a lot from YouTube channel called "Mouredev" ,I don't do any project on Kotlin cause I really think my knowledge is not enough to do a full project and don't have enough time .
              <br />Last year I have a motorcycle accident which give a lot of "free time" so I decided return IT world,with YouTube and teach platforms is more easy to learn,I start with python doing exercises and learning how it works , that way I can improve my programming thinking,don't go through machine learning , data scientist or speciality in python, cause I prefer learn more about web developers .
              In that moment I start to learn HTML, CSS, JavaScript for YouTube ,but the teachers give long explanations In YouTube so I decided buy a few of course in Udemy by Victor Robles Web, in that course I learn about the Front End,
              HTML, CSS , JavaScript, frameworks (in angular course did a blog using mongodb and angular ),
              Also a bit of typescript, SASS , git because I still I don't have any job in IT and I don't know people involved in tech sector "only on Instagram " .<br />
              I really don't know how it works web developers or enterprises cause I never work for anybody in tech world , I am self-taught ,so I don't know how it works, but if I can work meanwhile I learning, better for me .
              I hope we can work together and be patient with me ,it is my first job in tech.</p>
              </div>

          </Modal>
          <a href={pdf} target="_blank" rel="noopener noreferrer" download="CV-DiegoRomero.pdf"><button className='option-buttons' ><h1>Resume</h1></button></a>
          
        </div>

      </div>
      

      <div className='outer-credit'><div className='credits'>Created by DarkCainDs</div></div>

    </div>

  )
}
