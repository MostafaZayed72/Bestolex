import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.goto('https://sabtech.com.sa/', { waitUntil: 'networkidle2' });
  
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img'))
      .map(img => img.src)
      .filter(src => src && src.startsWith('http') && !src.includes('logo') && !src.includes('icon'));
  });
  
  console.log(JSON.stringify(images, null, 2));
  
  await browser.close();
})();
