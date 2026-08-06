import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const productsJsonPath = path.join(rootDir, 'data', 'products.json');
const publicImagesPath = path.join(rootDir, 'public', 'images');

if (!fs.existsSync(publicImagesPath)) {
  fs.mkdirSync(publicImagesPath, { recursive: true });
}

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Status Code: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
};

(async () => {
  console.log('جاري تشغيل المتصفح وسحب البيانات من موقع sabtech.com.sa...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Navigation
  await page.goto('https://sabtech.com.sa/products/', { waitUntil: 'networkidle2' });
  
  // Scrape categories
  const categories = await page.evaluate(() => {
    const items = [];
    const elements = document.querySelectorAll('.product-category');
    elements.forEach(el => {
      const a = el.querySelector('a');
      const img = el.querySelector('img');
      const title = el.querySelector('.woocommerce-loop-category__title, h2, h3');
      if (a && img && title) {
        items.push({
          url: a.href,
          title: title.innerText.trim(),
          image: img.src
        });
      }
    });
    return items;
  });
  
  console.log(`تم العثور على ${categories.length} قسم. جاري معالجة الصور...`);

  // We will just read the current mock data and try to match images or just download new ones
  // But since we want EXACT images for the existing mock data, let's just find ANY valid images from the site!
  // Wait, Sabtech's site might have a different structure. Let's just grab images from the homepage.
  
  await browser.close();
})();
