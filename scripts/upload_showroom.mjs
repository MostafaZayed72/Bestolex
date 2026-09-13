import fs from 'fs'
import path from 'path'

const STORAGE_ZONE_NAME = 'electrocreative-zone'
const ACCESS_KEY = 'fdbaf174-b9f2-4453-93bbfa08f649-6912-41c6'
const PULL_ZONE = 'electrocreative-cdn.b-cdn.net'
const BASE_STORAGE_URL = 'https://storage.bunnycdn.com'

const userUploadedFile = 'C:/Users/PC/.gemini/antigravity-ide/brain/de11a419-8f42-401d-8cd7-4278d040195d/.user_uploaded/media_1789335619077.jpg'
const localAboutDir = 'public/images/about'

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
    throw new Error(`Uploaded file not found: ${userUploadedFile}`)
  }

  const fileData = fs.readFileSync(userUploadedFile)

  if (!fs.existsSync(localAboutDir)) {
    fs.mkdirSync(localAboutDir, { recursive: true })
  }

  fs.writeFileSync(path.join(localAboutDir, 'showroom.jpg'), fileData)
  fs.writeFileSync(path.join(localAboutDir, 'showroom-v2.jpg'), fileData)
  console.log('Saved locally to public/images/about/showroom-v2.jpg and showroom.jpg')

  const remoteV2 = 'bestolex/about/showroom-v2.jpg'
  const remote = 'bestolex/about/showroom.jpg'

  await uploadFile(fileData, remoteV2, 'image/jpeg')
  await uploadFile(fileData, remote, 'image/jpeg')

  const cdnUrl = `https://${PULL_ZONE}/${remoteV2}`
  console.log(`CDN URL: ${cdnUrl}`)
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
