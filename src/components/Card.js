import React from 'react'

import '../components/Styles/card-hover.css';
import { FiInstagram } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc"
import { GoCode } from "react-icons/go";
import { IconContext } from 'react-icons/lib';
import { BsTwitter, BsGithub, BsFillEnvelopeFill,  } from 'react-icons/bs'

export const Card = ({ title, texto, portrait, link, web }) => {


    return (
        <IconContext.Provider value={{ size: '2.6rem' }}>

            <div>
                <div className='animate__animated animate__fadeInUp card'>

                    <ul className='ul'>

                        <li>
                            <a target="_blank" href="https://www.instagram.com/diego.darkcain/" rel='noreferrer'><FiInstagram className='instagram' /></a>
                        </li>
                        <li >
                            <a target="_blank" href="https://twitter.com/DarkCain100" rel='noreferrer'><BsTwitter color='#4DA6E9' /></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/DarkCainDS" rel='noreferrer'><BsGithub color='#F05033' /></a>
                        </li>
                        <li>
                            <a target="_blank" href="mailto:Diego.romero.s@hotmail.com" rel='noreferrer'><BsFillEnvelopeFill size='2rem' className='envolope' /></a>
                        </li>
                        <li>
                            <a target="_blank" href={link} rel='noreferrer'><GoCode color='#F05033' /></a>
                        </li>
                        <li>
                            <a target="_blank" href={web} rel='noreferrer'><FcGoogle/></a>
                        </li>
                    </ul>
                    <a href={web}><img src={portrait} alt='card'></img></a>

                    <div className='con-text'>
                        <h2>
                            {title}
                        </h2>
                        <p>{texto}

                        </p>
                    </div>
                </div>

            </div>
        </IconContext.Provider>
    )


}
