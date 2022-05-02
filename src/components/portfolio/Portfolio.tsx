import React from 'react'
import './portfolio.css'
import {Container, Row, Col} from 'reactstrap'

const img1 = require('../../assets/first.png')
const img2 = require('../../assets/second.png')
const img3 = require('../../assets/third.png')
const img4 = require('../../assets/four.png')

const portfolioData: Array<any> = [
    {
        imgUrl: img1,
        title: 'Landing Page'
    },
    {
        imgUrl: img3,
        title: 'Landing Page'
    },
    {
        imgUrl: img4,
        title: 'Landing Page'
    }
]

const Portfolio: React.FC = () => {
  return (
    <section id='portfolio'>
        <Container>
            <Row>
                <Col lg='12' className='portfolio__top'>
                    <h6>Explore my work</h6>
                    <h2>Portfolio</h2>
                </Col>
                {
                    portfolioData.map((item, index) => 
                    <Col key={index} lg='4' md='6' sm='6'>
                    <div className="portfolio__card">
                        <div className="portfolio__content">
                            <h5>{item.title}</h5>
                        </div>
                        <div className="portfolio__img">
                            <img src={item.imgUrl} alt="img" className='w-100'/>
                        </div>
                    </div>
                    </Col>
                    )
                }
            </Row>
        </Container>
    </section>
  )
}

export default Portfolio