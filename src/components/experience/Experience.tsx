import React from 'react'
import './experience.css'
import {Container, Row, Col} from 'reactstrap'

interface Experience {
  year: string,
  title: string,
  desc: string
}

const developmentExperience: Array<Experience> = [
  {
    year: '2017-2019',
    title: 'Learning English and some other skills',
    desc: 'Full Time'
  },
  {
    year: '2019-2021',
    title: 'Frontend developer(HTML/CSS/JS/Gulp...)',
    desc: 'Freelance / Full Time'
  },
  {
    year: '2021-present',
    title: 'Frontend developer(React, WebPack, TypeScript...)',
    desc: 'Remote / Full Time'
  }
]

const Experience: React.FC = () => {
  return (
    <section id=''>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <h2>Experience</h2>
          </Col>
          <Col lg='6' md='6'>
            <div className="single__experience-container">
              {
                developmentExperience.map((item, index) => 
                <div key={index} className="single__experience">
                  <span className='experience__icon'><i className='ri-briefcase-4-fill'></i></span>
                  <h6>{item.year}</h6>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
                )
              }
            </div>
          </Col>
          <Col lg='6' md='6'>
              <div className="cupContainer">
                <div className="steam steam1"></div>
                <div className="steam steam2"></div>
                <div className="steam steam3"></div>
                <div className="steam steam4"></div>

                <div className="cup">
                  <div className="cup-body">
                    <h1>MaxMeur</h1>
                    <div className="cup-shade"></div>
                  </div>
                  <div className="cup-handle"></div>
                </div>
                <div className="saucer"></div>
                <div className="shadow"></div>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Experience