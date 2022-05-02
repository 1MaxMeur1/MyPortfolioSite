import React, {useState} from 'react'
import './about.css'
import {Container, Row, Col} from 'reactstrap'
import Education from './Education'
import Skills from './Skills'
import Works from './Works'

const Avatar = require('../../assets/avatar.jpg')

const About: React.FC = () => {
    const [aboutFilter, setAboutFilter] = useState('ABOUT')
  return (
    <section id='about'>
        <Container>
            <Row>
                <Col className='mb-5' lg='12'>
                    <h2>About me</h2>
                </Col>
                <Col lg='4' md='3'>
                    <div className="about__btns">
                        <button className={`about__btn ${aboutFilter === 'ABOUT' ? 'about__btn-active' : ''}`} onClick={() => setAboutFilter("ABOUT")}>
                            About me
                        </button>
                        <button className={`about__btn ${aboutFilter === 'EDUCATION' ? 'about__btn-active' : ''}`} onClick={() => setAboutFilter("EDUCATION")}>
                            Education
                        </button>
                        <button className={`about__btn ${aboutFilter === 'SKILLS' ? 'about__btn-active' : ''}`} onClick={() => setAboutFilter("SKILLS")}>
                            Skills
                        </button>
                        <button className={`about__btn ${aboutFilter === 'WORKS' ? 'about__btn-active' : ''}`} onClick={() => setAboutFilter("WORKS")}>
                            Works
                        </button>
                    </div>
                </Col>
                <Col lg='8' md='9'>
                    {
                        aboutFilter === 'ABOUT' && 
                        <div className="about__content__wrapper d-flex gap-5">
                            <div className="about__img w-25">
                            <img src={Avatar} alt="about" className='w-100'/>
                            </div>
                            <div className="about__content w-75">
                            <h2>I am Maxim Murzanev</h2>
                            <p>Professional Web Developer.</p>
                            <div className="social__links">
                                <h6 className='mb-3'>Connect with me:</h6>
                                <span><a href="https://www.linkedin.com/in/maxim-murzanev-42a075214/"><i className="ri-linkedin-fill"></i></a></span>
                                <span><a href="https://github.com/1MaxMeur1"><i className="ri-github-fill"></i></a></span>
                                <span><a href="https://t.me/kytek1"><i className="ri-telegram-fill"></i></a></span>
                                <span><a href="mailto:1maxmeur1@gmail.com"><i className="ri-mail-send-line"></i></a></span>
                            </div>
                            </div>
                        </div>
                    }

                    {
                        aboutFilter === 'EDUCATION' && <Education />
                    }
                    {
                        aboutFilter === 'SKILLS' && <Skills />
                    }
                    {
                        aboutFilter === 'WORKS' && <Works />
                    }
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About