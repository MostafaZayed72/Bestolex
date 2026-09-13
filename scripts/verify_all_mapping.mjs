import fs from 'fs'
import path from 'path'

const userUploadedDir = 'C:/Users/PC/.gemini/antigravity-ide/brain/de11a419-8f42-401d-8cd7-4278d040195d/.user_uploaded'

const files = [
  'media_1789288554968.jpg',
  'media_1789288581763.jpg',
  'media_1789288594082.jpg',
  'media_1789288604549.jpg',
  'media_1789288617756.jpg'
]

// The user requests in chronological order with exact timestamps:
// 1. 08:36:03 -> "استخدم دي لصورة النفايات واعادة التدوير"
// 2. 08:36:25 -> "أنظمة التحميل"
// 3. 08:36:37 -> "أنظمة حماية المحيط"
// 4. 08:36:49 -> "الأبواب الصناعية"
// 5. 08:37:04 -> "آلات ومعدات ثقيلة"

for (let i = 0; i < files.length; i++) {
  const f = files[i]
  const p = path.join(userUploadedDir, f)
  const stat = fs.statSync(p)
  console.log(`Index ${i + 1}: ${f} -> size: ${stat.size}, time: ${stat.mtime.toISOString()}`)
}
