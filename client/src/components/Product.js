import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
// import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`}>
      <Card className='my-2 rounded equal'>
        <Card.Img src={product.image} className='tofit equal' />
        <Card.ImgOverlay>
          <Card.Title>{product.name}</Card.Title>
          {/* <Card.Text as='div'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text> */}
          {/* <Card.Text as='p'>$ {product.price}</Card.Text> */}
        </Card.ImgOverlay>
      </Card>
    </Link>
  )
}

export default Product
