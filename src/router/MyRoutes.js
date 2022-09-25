import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import { AboutMe } from '../components/nav/AboutMe'
import { Contact } from '../components/nav/Contact'
import { Curriculum } from '../components/nav/Curriculum'
import { Home } from '../components/nav/Home'
import { Experience } from '../components/nav/Experience'
import { Projects } from '../components/nav/Projects'
import { Footer } from '../components/Footer'
import { Error } from '../components/Error'



export const MyRoutes = () => {
    return (
        <div>
            <BrowserRouter>

                {/*Header*/}
                <Header></Header>

                <section className='content'>


                    <Routes>
                        <Route path='/' element={<Navigate to='/Home' />} />
                        <Route path="/Home" element={<Home />} />
                        <Route path="/AboutMe" element={<AboutMe />} />
                        <Route path="/Projects" element={<Projects />} />
                        
                        <Route path="/Experience" element={<Experience />} />
                        <Route path="/Curriculum" element={<Curriculum />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="*" element={<Error />} />




                    </Routes>

                </section>

                {/*Footer*/}
                <Footer />

            </BrowserRouter>
        </div>

    )
}
