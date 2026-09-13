import fs from 'fs'
import path from 'path'

const userUploadedDir = 'C:/Users/PC/.gemini/antigravity-ide/brain/de11a419-8f42-401d-8cd7-4278d040195d/.user_uploaded'

// Let's inspect the files
const list = [
  'media_1789288594082.jpg',
  'media_1789288604549.jpg',
  'media_1789288617756.jpg',
  'media_1789288806593.png',
  'media_1789288828151.png'
]

for (const f of list) {
  const p = path.join(userUploadedDir, f)
  const stat = fs.statSync(p)
  console.log(f, stat.size, stat.mtime)
}
