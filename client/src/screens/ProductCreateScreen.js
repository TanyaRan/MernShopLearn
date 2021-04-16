import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProducts, createProduct } from '../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../constants/productConstants'

const ProductCreateScreen = ({ history }) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [place, setPlace] = useState('')
  const [mountain, setMountain] = useState('')
  const [category, setCategory] = useState('')
  const [startDate, setStartDate] = useState(null)
  const [daysNumber, setDaysNumber] = useState(0)
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [countInStock, setCountInStock] = useState(0)
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const productCreate = useSelector(state => state.productCreate)
  const { loading, error, success } = productCreate

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push('/login')
    }

    if (success) {
      dispatch({ type: PRODUCT_CREATE_RESET })
      history.push(`/admin/productlist`)
    } else {
      dispatch(listProducts())
    }
  }, [dispatch, history, userInfo, success])

  const uploadFileHandler = async e => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = e => {
    e.preventDefault()
    dispatch(
      createProduct(
        name,
        image,
        place,
        mountain,
        category,
        startDate,
        daysNumber,
        description,
        price,
        countInStock
      )
    )
  }

  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Create Product</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter name'
                value={name}
                onChange={e => setName(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='place'>
              <Form.Label>Place</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter place'
                value={place}
                onChange={e => setPlace(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='mountain'>
              <Form.Label>Mountain</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter mountain'
                value={mountain}
                onChange={e => setMountain(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={e => setPrice(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='startDate'>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type='date'
                placeholder='Enter start date'
                value={startDate}
                onChange={e => setStartDate(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='daysNumber'>
              <Form.Label>Days Number</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter days number'
                value={daysNumber}
                onChange={e => setDaysNumber(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={e => setImage(e.target.value)}></Form.Control>
              <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='countInStock'>
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter countInStock'
                value={countInStock}
                onChange={e => setCountInStock(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category'
                value={category}
                onChange={e => setCategory(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={e => setDescription(e.target.value)}></Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>
              Create Product
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default ProductCreateScreen
