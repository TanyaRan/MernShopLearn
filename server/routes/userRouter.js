import express from 'express'
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser
} from '../controllers/userCtrl.js'
import { protect, adminProtect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/', registerUser)
router.get('/', protect, adminProtect, getUsers)
router.post('/login', authUser)
router.get('/profile', protect, getUserProfile)
router.put('/profile', protect, updateUserProfile)

router.get('/:id', protect, adminProtect, getUserById)
router.put('/:id', protect, adminProtect, updateUser)
router.delete('/:id', protect, adminProtect, deleteUser)

export default router
