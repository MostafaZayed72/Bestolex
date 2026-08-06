const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  'logo.png': 'https://drive.google.com/uc?export=download&id=1WVRvbPthp1y1HT90d7CqbFpaRQZLW5Dk',
  'images/categories/industrial-doors.jpg': 'https://sabtech.com.sa/wp-content/uploads/2021/03/High-Speed-Door.jpg',
  'images/categories/docking-systems.jpg': 'https://sabtech.com.sa/wp-content/uploads/2021/04/Dock-Leveler.jpg',
  'images/categories/perimeter-protection.jpg': 'https://sabtech.com.sa/wp-content/uploads/2021/04/Hydraulic-Bollard-3.jpg',
  'images/categories/waste-management.jpg': 'https://sabtech.com.sa/wp-content/uploads/2021/04/Vertical-Baling-Press.jpg',
  'images/news/news1.jpg': 'https://sabtech.com.sa/wp-content/uploads/2022/10/hydraulic-leakage-1024x576.jpg',
  'images/news/news2.jpg': 'https://sabtech.com.sa/wp-content/uploads/2022/11/comparing-between-tire-killer-and-spike-barrier.jpg',
  'images/news/news3.jpg': 'https://sabtech.com.sa/wp-content/uploads/2022/10/hydraulic-oil-selection.jpg',
  'images/services/srv1.png': 'https://sabtech.com.sa/wp-content/uploads/2019/06/motor.png',
  'images/services/srv2.png': 'https://sabtech.com.sa/wp-content/uploads/2019/06/training-center.png',
  'images/services/srv3.png': 'https://sabtech.com.sa/wp-content/uploads/2019/06/chrome-plating.png',
  'images/services/srv4.png': 'https://sabtech.com.sa/wp-content/uploads/2019/06/hydrolick.png'
};

Object.entries(images).forEach(([key, url]) => {
  const fullPath = path.join(__dirname, 'public', key);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  
  https.get(url, (res) => {
    // If it's a redirect, follow it once (needed for Google Drive)
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      https.get(res.headers.location, (res2) => {
        const file = fs.createWriteStream(fullPath);
        res2.pipe(file);
        file.on('finish', () => { file.close(); console.log('Downloaded:', key); });
      });
    } else {
      const file = fs.createWriteStream(fullPath);
      res.pipe(file);
      file.on('finish', () => { file.close(); console.log('Downloaded:', key); });
    }
  }).on('error', (err) => {
    console.error('Error downloading', key, err);
  });
});
