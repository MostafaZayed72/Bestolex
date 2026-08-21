import fs from 'fs'
import path from 'path'

const STORAGE_ZONE_NAME = 'electrocreative-zone'
const ACCESS_KEY = 'fdbaf174-b9f2-4453-93bbfa08f649-6912-41c6'
const PULL_ZONE = 'electrocreative-cdn.b-cdn.net'
const BASE_STORAGE_URL = 'https://storage.bunnycdn.com'

/**
 * Uploads all files in localDir to Bunny Storage under remoteFolder
 * @param {string} localDir - Path to local folder containing images
 * @param {string} remoteFolder - Subfolder name on Bunny Storage (e.g. 'bestolex/products/product-1')
 * @returns {Promise<string[]>} List of CDN URLs
 */
export async function uploadDirectoryToBunny(localDir, remoteFolder = 'bestolex/products') {
  if (!fs.existsSync(localDir)) {
    throw new Error(`Directory not found: ${localDir}`)
  }

  const files = fs.readdirSync(localDir).filter(file => {
    const ext = path.extname(file).toLowerCase()
    return ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.avif'].includes(ext)
  })

  if (files.length === 0) {
    console.log('No image files found in directory.')
    return []
  }

  console.log(`Found ${files.length} images to upload...`)
  const uploadedUrls = []

  let index = 1
  for (const file of files) {
    const filePath = path.join(localDir, file)
    const fileData = fs.readFileSync(filePath)
    const ext = path.extname(file).toLowerCase()
    
    // Clean filename: if it's a long whatsapp name or specified, name it cleanly 1.jpg, 2.jpg...
    const cleanFileName = file.startsWith('WhatsApp') ? `${index}${ext}` : file
    const remotePath = `${remoteFolder}/${cleanFileName}`.replace(/\/+/g, '/')
    const uploadUrl = `${BASE_STORAGE_URL}/${STORAGE_ZONE_NAME}/${remotePath}`

    console.log(`Uploading ${file} as ${cleanFileName} -> ${uploadUrl}`)

    try {
      const response = await fetch(uploadUrl, {
        method: 'PUT',
        headers: {
          AccessKey: ACCESS_KEY,
          'Content-Type': 'application/octet-stream',
        },
        body: fileData
      })

      if (!response.ok) {
        throw new Error(`Failed to upload ${file}: ${response.statusText} (${response.status})`)
      }

      const cdnUrl = `https://${PULL_ZONE}/${remotePath}`
      console.log(`✓ Uploaded successfully: ${cdnUrl}`)
      uploadedUrls.push(cdnUrl)
      index++
    } catch (err) {
      console.error(`✗ Error uploading ${file}:`, err.message)
    }
  }

  return uploadedUrls
}

// CLI direct run support
const args = process.argv.slice(2)
if (args.length > 0) {
  const [folderPath, remoteSubfolder] = args
  uploadDirectoryToBunny(folderPath, remoteSubfolder || 'bestolex/products').then(urls => {
    console.log('\n--- All Uploaded CDN URLs ---')
    console.log(JSON.stringify(urls, null, 2))
  })
}
