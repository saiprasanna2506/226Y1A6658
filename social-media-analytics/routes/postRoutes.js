import express from 'express'
import { getLatestPosts, getPopularPosts } from '../controllers/postController.js'

const router = express.Router()

router.get('/latest', getLatestPosts)
router.get('/popular', getPopularPosts)

export default router
