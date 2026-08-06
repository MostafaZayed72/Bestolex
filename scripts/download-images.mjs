import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import https from 'https'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const productsJsonPath = path.join(rootDir, 'data', 'products.json')
const publicImagesPath = path.join(rootDir, 'public', 'images')

// Ensure public/images directory exists
if (!fs.existsSync(publicImagesPath)) {
  fs.mkdirSync(publicImagesPath, { recursive: true })
}

// Read products.json
const data = JSON.parse(fs.readFileSync(productsJsonPath, 'utf8'))

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath))
      } else {
        res.resume() // Consume response data to free up memory
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`))
      }
    }).on('error', reject)
  })
}

const run = async () => {
  console.log('بدء تحميل الصور محلياً...')
  
  for (let category of data) {
    if (category.image && category.image.startsWith('http')) {
      const filename = path.basename(category.image)
      const filepath = path.join(publicImagesPath, filename)
      console.log(`تحميل صورة القسم: ${filename}`)
      try {
        await downloadImage(category.image, filepath)
        category.image = `/images/${filename}`
      } catch (err) {
        console.error(`خطأ في تحميل ${filename}:`, err.message)
      }
    }

    if (category.products) {
      for (let product of category.products) {
        if (product.image && product.image.startsWith('http')) {
          const filename = path.basename(product.image)
          const filepath = path.join(publicImagesPath, filename)
          console.log(`تحميل صورة المنتج: ${filename}`)
          try {
            await downloadImage(product.image, filepath)
            product.image = `/images/${filename}`
          } catch (err) {
            console.error(`خطأ في تحميل ${filename}:`, err.message)
          }
        }
      }
    }
  }

  // Save updated JSON
  fs.writeFileSync(productsJsonPath, JSON.stringify(data, null, 2))
  console.log('تم تحميل جميع الصور وتحديث ملف products.json بنجاح!')
}

run()
