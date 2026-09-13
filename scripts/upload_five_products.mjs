import fs from 'fs'
import path from 'path'

const STORAGE_ZONE_NAME = 'electrocreative-zone'
const ACCESS_KEY = 'fdbaf174-b9f2-4453-93bbfa08f649-6912-41c6'
const PULL_ZONE = 'electrocreative-cdn.b-cdn.net'
const BASE_STORAGE_URL = 'https://storage.bunnycdn.com'

const userUploadedDir = 'C:/Users/PC/.gemini/antigravity-ide/brain/de11a419-8f42-401d-8cd7-4278d040195d/.user_uploaded'

const items = [
  {
    id: 'horizontal-plastic-baler-70',
    file: 'media_1789253549081.png',
    ext: 'png'
  },
  {
    id: 'mobile-loading-dock',
    file: 'media_1789253570728.png',
    ext: 'png'
  },
  {
    id: 'persi-compactor',
    file: 'media_1789253618332.png',
    ext: 'png'
  },
  {
    id: 'auto-horizontal-baler',
    file: 'media_1789253643569.jpg',
    ext: 'jpg'
  },
  {
    id: 'cardboard-plastic-baler-100',
    file: 'media_1789253717008.png',
    ext: 'png'
  }
]

async function uploadFile(localPath, remotePath, mimeType) {
  const fileData = fs.readFileSync(localPath)
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

  const cdnUrl = `https://${PULL_ZONE}/${remotePath}`
  console.log(`Success: ${cdnUrl}`)
  return cdnUrl
}

async function main() {
  const productsFilePath = 'f:/projects/bestolex/data/products.json'
  const categories = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'))

  for (const item of items) {
    const localFile = path.join(userUploadedDir, item.file)
    if (!fs.existsSync(localFile)) {
      throw new Error(`Local file not found: ${localFile}`)
    }

    // 1. Copy locally
    const publicDir = `f:/projects/bestolex/public/images/products/${item.id}`
    fs.mkdirSync(publicDir, { recursive: true })
    const localDest = path.join(publicDir, `card.${item.ext}`)
    fs.copyFileSync(localFile, localDest)
    console.log(`Saved locally: ${localDest}`)

    // 2. Upload to Bunny CDN
    const remotePath = `bestolex/products/${item.id}/card.${item.ext}`
    const mimeType = item.ext === 'png' ? 'image/png' : 'image/jpeg'
    const cdnUrl = await uploadFile(localFile, remotePath, mimeType)

    // 3. Update products.json (setting cardImage, keeping coverImage intact)
    let updated = false
    for (const cat of categories) {
      for (const prod of (cat.products || [])) {
        if (prod.id === item.id) {
          prod.cardImage = cdnUrl
          updated = true
          console.log(`Updated cardImage for direct product: ${prod.id}`)
        }
      }
      for (const sub of (cat.subcategories || [])) {
        for (const prod of (sub.products || [])) {
          if (prod.id === item.id) {
            prod.cardImage = cdnUrl
            updated = true
            console.log(`Updated cardImage for subcategory product: ${prod.id}`)
          }
        }
      }
    }

    if (!updated) {
      console.warn(`Warning: product ${item.id} was not found in products.json`)
    }
  }

  fs.writeFileSync(productsFilePath, JSON.stringify(categories, null, 2), 'utf8')
  console.log('All 5 products updated in products.json successfully!')
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
