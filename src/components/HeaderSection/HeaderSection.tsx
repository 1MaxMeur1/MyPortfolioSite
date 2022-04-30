import React, {useRef, useEffect} from 'react'
import './HeaderSection.css'
import {Container, Row, Col} from 'reactstrap'
import { init } from 'ityped'


const HeaderSection: React.FC = () => {
    const textRef = useRef() as React.MutableRefObject<HTMLSpanElement>

    useEffect(() => {
        init(textRef.current, {
            backDelay: 1000,
            showCursor: true,
            strings: [
                'Maxim Murzanev',
                'A Web Developer',
                'A Web designer',
                'just a good guy :)'
            ]
        })
    }, [])
  return (
    <div>
    <section className='header-section' id='home'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="header-section__content">
                        <p className='mb-3'>Welcome to my world!</p>
                        <h5 className='mb-2'>Hi,</h5>
                        <h2 className='header-section__title mb-3'>I'm <span ref={textRef}></span></h2>
                        <p>I am a Front End developer living in Russia :)</p>
                        <p>I love learning new aspects and techniques that challenge me in releasing my projects with top qualitity and less code.</p>
                        <p>I am involved in adopting, using and creating best practices for all the code and projects I am involved in.</p>
                        <p>I always keep in mind cross-brwsers and cross-devices issue while I am coding.</p>
                        <p>I also consider accessibility and progressive enhancement as part of my day to day activities and I always keep them in mind if the project let me do that.</p>
                        <div className="mt-4 header-section__btns d-flex align-items-center gap-4">
                            <button className="header-section__btn hire__btn"><a href="#">Hire me</a></button>
                            <button className="header-section__btn contact__btn">Contact</button>
                        </div>
                    </div>
                </Col>
                <Col>
                <div className="cat">
                    <div className="ear ear--left"></div>
                    <div className="ear ear--right"></div>
                        <div className="face">
                            <div className="eye eye--left">
                            <div className="eye-pupil"></div>
                        </div>
                    <div className="eye eye--right">
                        <div className="eye-pupil"></div>
                    </div>
                    <div className="muzzle"></div>
                     </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    </div>
  )
}

export default HeaderSection