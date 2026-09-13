import fs from 'fs'
import path from 'path'

const STORAGE_ZONE_NAME = 'electrocreative-zone'
const ACCESS_KEY = 'fdbaf174-b9f2-4453-93bbfa08f649-6912-41c6'
const PULL_ZONE = 'electrocreative-cdn.b-cdn.net'
const BASE_STORAGE_URL = 'https://storage.bunnycdn.com'

async function uploadFile(localPath, remotePath) {
  const fileData = fs.readFileSync(localPath)
  const uploadUrl = `${BASE_STORAGE_URL}/${STORAGE_ZONE_NAME}/${remotePath}`
  console.log(`Uploading to ${uploadUrl}...`)

  const response = await fetch(uploadUrl, {
    method: 'PUT',
    headers: {
      AccessKey: ACCESS_KEY,
      'Content-Type': 'image/png'
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
  const fileMast = 'C:/Users/PC/.gemini/antigravity-ide/brain/de11a419-8f42-401d-8cd7-4278d040195d/.user_uploaded/media_1789252410166.png'
  const fileSteel = 'C:/Users/PC/.gemini/antigravity-ide/brain/de11a419-8f42-401d-8cd7-4278d040195d/.user_uploaded/media_1789252443078.png'

  // Also save a copy locally in public/images/products just in case
  const publicDirMast = 'f:/projects/bestolex/public/images/products/mast-cargo-lift'
  const publicDirSteel = 'f:/projects/bestolex/public/images/products/steel-press-50t'

  fs.mkdirSync(publicDirMast, { recursive: true })
  fs.mkdirSync(publicDirSteel, { recursive: true })

  fs.copyFileSync(fileMast, path.join(publicDirMast, 'cover.png'))
  fs.copyFileSync(fileSteel, path.join(publicDirSteel, 'cover.png'))
  console.log('Copied locally to public/images/products/')

  // Upload to Bunny CDN
  const mastCdnUrl = await uploadFile(fileMast, 'bestolex/products/mast-cargo-lift/cover.png')
  const steelCdnUrl = await uploadFile(fileSteel, 'bestolex/products/steel-press-50t/cover.png')

  // Update products.json
  const productsFilePath = 'f:/projects/bestolex/data/products.json'
  const categories = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'))

  for (const cat of categories) {
    for (const prod of (cat.products || [])) {
      if (prod.id === 'mast-cargo-lift') {
        prod.coverImage = mastCdnUrl
        prod.image = mastCdnUrl
        if (Array.isArray(prod.images)) {
          prod.images[0] = mastCdnUrl
        } else {
          prod.images = [mastCdnUrl]
        }
        console.log('Updated mast-cargo-lift in products.json')
      }
      if (prod.id === 'steel-press-50t') {
        prod.coverImage = steelCdnUrl
        prod.image = steelCdnUrl
        if (Array.isArray(prod.images)) {
          prod.images[0] = steelCdnUrl
        } else {
          prod.images = [steelCdnUrl]
        }
        console.log('Updated steel-press-50t in products.json')
      }
    }
  }

  fs.writeFileSync(productsFilePath, JSON.stringify(categories, null, 2), 'utf8')
  console.log('products.json saved successfully!')
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
