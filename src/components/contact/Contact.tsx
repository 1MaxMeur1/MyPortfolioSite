import React from 'react'
import './contact.css'
import {Container, Row, Col} from 'reactstrap'
import Form from '../form/Form'

const Contact: React.FC = () => {
  return (
    <section id='contact'>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <h2>Get in touch</h2>
                </Col>
                <Col lg='6' md='6'>
                    <div className="contact__info-container">
                        <div className="single__info-box">
                            <h6>Email</h6>
                            <p>1maxmeur1@gmail.com</p>
                        </div>

                        <div className="single__info-box">
                            <h6>Phone</h6>
                            <p>+7(996) 850 56-97</p>
                        </div>
                    </div>
                    <Form />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact