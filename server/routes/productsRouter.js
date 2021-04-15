import express from 'express'
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview
} from '../controllers/productCtrl.js'
import { protect, adminProtect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', getProducts)
router.post('/', protect, adminProtect, createProduct)

router.post('/:id/reviews', protect, createProductReview)
router.get('/:id', getProductById)
router.put('/:id', protect, adminProtect, updateProduct)
router.delete('/:id', protect, adminProtect, deleteProduct)

export default router
