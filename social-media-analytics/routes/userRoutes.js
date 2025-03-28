import express from 'express'
import { getUsers, getTopUsers } from '../controllers/userController.js'

const router = express.Router()

router.get('/', getUsers)
router.get('/top', getTopUsers)

export default router
