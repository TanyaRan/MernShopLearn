import React from 'react'
import { Button } from 'react-bootstrap'
import ProductCarousel from '../components/ProductCarousel'
import { LinkContainer } from 'react-router-bootstrap'

const AboutScreen = () => {
  return (
    <>
      <ProductCarousel />
      <div className='text-center'>
        <h5>
          We are a team of enthusiasts, specialists in the field of mountain
          tourism, organized trips and trainings in nature. The professionalism
          of our team in mountain tourism has proven itself with numerous
          tourists, happy to get to know the mountains of Bulgaria, led by our
          smiling and experienced guides.
        </h5>
        <h4>
          Perfectly organized trips, with correctly chosen routes and last but
          not least with a good price! Young and experienced tourists choose our
          services for their active vacation in the mountains. This is an
          unforgettable delight of the senses ...
        </h4>
        <h5>
          We have accumulated experience in holding corporate events, seminars,
          and sports competitions. We revived the children's suburban camps and
          created the Mountain School "Wild Goats", which enjoys great interest
          among children. We also organize mountain children's camps, where
          children learn knowledge and skills about living in the mountains.
          Come and enjoy the moment, communicate with the wildlife fully ...
        </h5>
        <LinkContainer to='/'>
          <Button variant='light' className='mr-3'>
            Contact Us
          </Button>
        </LinkContainer>
        <LinkContainer to='/'>
          <Button variant='info'>Our Team</Button>
        </LinkContainer>
      </div>
    </>
  )
}

export default AboutScreen
