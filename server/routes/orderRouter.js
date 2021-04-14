import express from 'express'
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders
} from '../controllers/orderCtrl.js'
import { protect, adminProtect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', protect, adminProtect, getOrders)
router.post('/', protect, addOrderItems)
router.get('/myorders', protect, getMyOrders)
router.get('/:id', protect, getOrderById)
router.put('/:id/pay', protect, updateOrderToPaid)
router.put('/:id/deliver', protect, adminProtect, updateOrderToDelivered)

export default router
