import express from 'express'
import { addOrderItems } from '../controllers/orderCtrl.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/', protect, addOrderItems)

export default router
