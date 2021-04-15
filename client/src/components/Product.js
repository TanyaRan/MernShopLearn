import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`}>
      <Card className='my-2 rounded'>
        <Card.Img src={product.image} />

        <Card.ImgOverlay>
          {/* <Link to={`/product/${product._id}`}> */}
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
          {/* </Link> */}
          <Card.Text as='div'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as='h3'>$ {product.price}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Link>
  )
}

export default Product
