import React from 'react'
import './services.css'
import {Container, Row, Col} from 'reactstrap'

interface servicesProps {
    icon: string,
    title: string,
    desc: string
}

const servicesData: Array<servicesProps> = [
    {
        icon: 'ri-code-line',
        title: 'Web Design',
        desc: "Fast load times and lag free interaction, my highest priority. My layouts will work on any device, big or small."
    },
    {
        icon: 'ri-code-s-slash-fill',
        title: 'Web Development',
        desc: "Websites don't have to be static, I love making pages come to life. Strong preference for easy to use, intuitive UX/UI."
    },
    {
        icon: 'ri-braces-fill',
        title: 'App development',
        desc: "I’m a front-end developer and general doodler with a keen eye for creating engaging UI, bringing products to life."
    },
    {
        icon: 'ri-search-eye-line',
        title: 'Seo',
        desc: "It’s essential to reflect the dynamics of the parameters before and after optimization."
    },
    {
        icon: 'ri-edit-line',
        title: 'Testing',
        desc: "It’s good to mention the time spent on a project, so your future clients know what to expect."
    },
    {
        icon: 'ri-guide-line',
        title: 'UI / UX',
        desc: "I will give your web-site a modern touch and it will for sure be a magnificient web-site that will catch the viewer's attention."
    }
]

const Services: React.FC = () => {
  return (
    <section id="services">
        <Container>
            <Row>
                <Col lg='12' className='services__top mb-5'>
                    <h6>Features</h6>
                    <h2>What services I provide</h2>
                </Col>
                {
                    servicesData.map((item, index) => 
                    <Col key={index} lg='4' md='6' sm='6'>
                    <div className="single__service">
                        <span className="service__icon">
                            <i className={item.icon}></i>
                        </span>
                        <h2>{item.title}</h2>
                        <p>
                            {item.desc}
                        </p>
                    </div>
                </Col>
                    )
                }
            </Row>
        </Container>
    </section>
  )
}

export default Services