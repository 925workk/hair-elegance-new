const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');
const imagesDir = path.join(publicDir, 'images');

async function optimizeImages() {
  try {
    const files = fs.readdirSync(imagesDir);
    
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const inputPath = path.join(imagesDir, file);
        const outputDir = path.join(imagesDir, 'optimized');
        
        // Create optimized directory if it doesn't exist
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }
        
        const baseName = path.parse(file).name;
        
        // Generate WebP version
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(path.join(outputDir, `${baseName}.webp`));
        
        // Generate AVIF version
        await sharp(inputPath)
          .avif({ quality: 80 })
          .toFile(path.join(outputDir, `${baseName}.avif`));
        
        // Optimize original
        await sharp(inputPath)
          .jpeg({ quality: 85, progressive: true })
          .png({ quality: 85, progressive: true })
          .toFile(path.join(outputDir, file));
        
        console.log(`Optimized: ${file}`);
      }
    }
    
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages(); 