import React from 'react'
import './footer.css'
import {Container} from 'reactstrap'

const Footer:React.FC = () => {
  return (
    <Container className='text-center footer'>
        <p>Copyright 2022, Developer by MaxMeur. All rights reserved.</p>
    </Container>
  )
}

export default Footer