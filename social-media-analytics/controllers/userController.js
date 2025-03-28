import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function readData() {
  const rawData = fs.readFileSync(path.join(__dirname, '../db/data.json'))
  return JSON.parse(rawData)
}

export const getUsers = (req, res) => {
  const data = readData()
  const users = data.users
  res.json(users)
}

export const getTopUsers = (req, res) => {
  const data = readData()
  const users = data.users
  const topUsers = users.sort((a, b) => b.followers - a.followers).slice(0, 5)
  res.json(topUsers)
}
