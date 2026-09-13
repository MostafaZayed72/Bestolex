import fs from 'fs'
import path from 'path'

const STORAGE_ZONE_NAME = 'electrocreative-zone'
const ACCESS_KEY = 'fdbaf174-b9f2-4453-93bbfa08f649-6912-41c6'
const PULL_ZONE = 'electrocreative-cdn.b-cdn.net'
const BASE_STORAGE_URL = 'https://storage.bunnycdn.com'

const userUploadedFile = 'C:/Users/PC/.gemini/antigravity-ide/brain/de11a419-8f42-401d-8cd7-4278d040195d/.user_uploaded/media_1789333156515.jpg'
const localProductDir = 'public/images/products/mobile-loading-dock'

async function uploadFile(fileData, remotePath, mimeType) {
  const uploadUrl = `${BASE_STORAGE_URL}/${STORAGE_ZONE_NAME}/${remotePath}`
  console.log(`Uploading to ${uploadUrl}...`)

  const response = await fetch(uploadUrl, {
    method: 'PUT',
    headers: {
      AccessKey: ACCESS_KEY,
      'Content-Type': mimeType
    },
    body: fileData
  })

  if (!response.ok) {
    throw new Error(`Upload failed: ${response.status} ${response.statusText}`)
  }

  const result = await response.json().catch(() => ({}))
  console.log(`Successfully uploaded: ${remotePath}`, result)
}

async function run() {
  if (!fs.existsSync(userUploadedFile)) {
    throw new Error(`User uploaded file not found: ${userUploadedFile}`)
  }

  const fileData = fs.readFileSync(userUploadedFile)

  // 1. Ensure local directory exists
  if (!fs.existsSync(localProductDir)) {
    fs.mkdirSync(localProductDir, { recursive: true })
  }

  // 2. Save locally
  fs.writeFileSync(path.join(localProductDir, 'card.jpg'), fileData)
  fs.writeFileSync(path.join(localProductDir, 'card-v2.jpg'), fileData)
  console.log('Saved locally to public/images/products/mobile-loading-dock/card-v2.jpg')

  // 3. Upload to Bunny CDN (both card.jpg, card-v2.jpg, and card-v2.png with image/jpeg mime or card-v2.jpg)
  const remotePathV2Jpg = 'bestolex/products/mobile-loading-dock/card-v2.jpg'
  const remotePathJpg = 'bestolex/products/mobile-loading-dock/card.jpg'

  await uploadFile(fileData, remotePathV2Jpg, 'image/jpeg')
  await uploadFile(fileData, remotePathJpg, 'image/jpeg')

  const cdnUrl = `https://${PULL_ZONE}/${remotePathV2Jpg}`
  console.log(`CDN URL: ${cdnUrl}`)

  // 4. Update data/products.json
  const productsPath = 'data/products.json'
  const categories = JSON.parse(fs.readFileSync(productsPath, 'utf8'))
  let updated = false

  for (const cat of categories) {
    if (cat.products) {
      for (const prod of cat.products) {
        if (prod.id === 'mobile-loading-dock') {
          prod.cardImage = cdnUrl
          updated = true
          console.log(`Updated mobile-loading-dock cardImage to: ${cdnUrl}`)
        }
      }
    }
  }

  if (updated) {
    fs.writeFileSync(productsPath, JSON.stringify(categories, null, 2), 'utf8')
    console.log('data/products.json updated successfully!')
  } else {
    throw new Error('Product mobile-loading-dock not found in products.json!')
  }
}

run().catch(err => {
  console.error('Error running script:', err)
  process.exit(1)
})
