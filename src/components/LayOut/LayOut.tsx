import React from 'react'
import Header from '../header/Header'
import HeaderSection from '../HeaderSection/HeaderSection'
import About from '../about/About'

const LayOut: React.FC = () => {
  return (
    <React.Fragment>
        <Header />
        <HeaderSection />
        <About />
    </React.Fragment>
  )
}

export default LayOut