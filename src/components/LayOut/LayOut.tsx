import React from 'react'
import Header from '../header/Header'
import HeaderSection from '../HeaderSection/HeaderSection'
import About from '../about/About'
import Services from '../services/Services'
import Experience from '../experience/Experience'
import Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'

const LayOut: React.FC = () => {
  return (
    <React.Fragment>
        <Header />
        <HeaderSection />
        <About />
        <Services />
        <Experience />
        <Portfolio/>
        <Contact />
        <Footer/>
    </React.Fragment>
  )
}

export default LayOut