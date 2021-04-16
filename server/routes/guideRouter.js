import express from 'express'
import { getGuides } from '../controllers/guideCtrl.js'
// import { protect, adminProtect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', getGuides)

export default router
