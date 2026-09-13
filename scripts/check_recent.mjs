import fs from 'fs'
import path from 'path'

const userUploadedDir = 'C:/Users/PC/.gemini/antigravity-ide/brain/de11a419-8f42-401d-8cd7-4278d040195d/.user_uploaded'

const files = [
  'media_1789288554968.jpg',
  'media_1789288594082.jpg',
  'media_1789288604549.jpg',
  'media_1789288617756.jpg',
  'media_1789288806593.png',
  'media_1789288828151.png'
]

function getJpegDimensions(buf) {
  let i = 2
  while (i < buf.length) {
    if (buf[i] !== 0xff) break
    const marker = buf[i + 1]
    if (marker === 0xc0 || marker === 0xc2) {
      return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) }
    }
    const len = buf.readUInt16BE(i + 2)
    i += 2 + len
  }
  return null
}

function getPngDimensions(buf) {
  if (buf.length > 24 && buf.toString('ascii', 12, 16) === 'IHDR') {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) }
  }
  return null
}

for (const f of files) {
  const p = path.join(userUploadedDir, f)
  if (fs.existsSync(p)) {
    const buf = fs.readFileSync(p)
    const dim = f.endsWith('.png') ? getPngDimensions(buf) : getJpegDimensions(buf)
    console.log(f, buf.length, 'bytes', dim)
  }
}
