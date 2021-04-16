import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`}>
      <Card className='my-2 rounded equal'>
        <Card.Img src={product.image} className='to-fit' />
        <Card.ImgOverlay>
          <Card.Title className='light-heading justify-content-center'>
            {product.name}
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Link>
  )
}

export default Product
