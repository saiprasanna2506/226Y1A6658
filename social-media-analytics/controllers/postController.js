import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function readData() {
  const rawData = fs.readFileSync(path.join(__dirname, '../db/data.json'))
  return JSON.parse(rawData)
}

export const getLatestPosts = (req, res) => {
  const data = readData()
  const posts = data.posts
  const latestPosts = posts
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, 5)
  res.json(latestPosts)
}

export const getPopularPosts = (req, res) => {
  const data = readData()
  const posts = data.posts
  const popularPosts = posts.sort((a, b) => b.likes - a.likes).slice(0, 5)
  res.json(popularPosts)
}
