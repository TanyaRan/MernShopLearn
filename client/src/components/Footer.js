import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className='text-center py-2'>
          Copyright &copy;
          <Button variant='outlined-light' className='mx-2 mb-1'>
            Happy in Wild <i class='fas fa-hiking'></i>
          </Button>
          <strong></strong>
          2021
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
