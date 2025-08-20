const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_IMAGES_DIR = path.join(process.cwd(), 'public', 'images');

// Image optimization settings
const OPTIMIZATION_SETTINGS = {
  quality: 85,
  format: 'webp',
  progressive: true,
  mozjpeg: {
    quality: 85,
    progressive: true,
  },
  webp: {
    quality: 85,
    effort: 6,
  },
  avif: {
    quality: 85,
    effort: 6,
  },
};

// Supported image formats
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp'];

async function optimizeImage(inputPath, outputPath, format = 'webp') {
  try {
    const image = sharp(inputPath);
    
    // Get image metadata
    const metadata = await image.metadata();
    
    // Optimize based on format
    let optimizedImage;
    
    switch (format) {
      case 'webp':
        optimizedImage = image.webp(OPTIMIZATION_SETTINGS.webp);
        break;
      case 'avif':
        optimizedImage = image.avif(OPTIMIZATION_SETTINGS.avif);
        break;
      case 'jpeg':
      case 'jpg':
        optimizedImage = image.jpeg(OPTIMIZATION_SETTINGS.mozjpeg);
        break;
      default:
        optimizedImage = image.webp(OPTIMIZATION_SETTINGS.webp);
    }
    
    // Resize if image is too large (max 1920px width)
    if (metadata.width > 1920) {
      optimizedImage = optimizedImage.resize(1920, null, {
        withoutEnlargement: true,
        fit: 'inside',
      });
    }
    
    // Save optimized image
    await optimizedImage.toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ Optimized: ${path.basename(inputPath)}`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(1)} KB`);
    console.log(`   Optimized: ${(optimizedSize / 1024).toFixed(1)} KB`);
    console.log(`   Savings: ${savings}%`);
    console.log('');
    
    return { originalSize, optimizedSize, savings };
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function optimizeImagesInDirectory(directory) {
  const files = fs.readdirSync(directory);
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Recursively optimize subdirectories
      const subResults = await optimizeImagesInDirectory(filePath);
      totalOriginalSize += subResults.totalOriginalSize;
      totalOptimizedSize += subResults.totalOptimizedSize;
    } else {
      const ext = path.extname(file).toLowerCase();
      
      if (SUPPORTED_FORMATS.includes(ext)) {
        // Create optimized version
        const outputPath = filePath.replace(ext, '.webp');
        const result = await optimizeImage(filePath, outputPath, 'webp');
        
        if (result) {
          totalOriginalSize += result.originalSize;
          totalOptimizedSize += result.optimizedSize;
        }
      }
    }
  }
  
  return { totalOriginalSize, totalOptimizedSize };
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  if (!fs.existsSync(PUBLIC_IMAGES_DIR)) {
    console.error('❌ Images directory not found:', PUBLIC_IMAGES_DIR);
    process.exit(1);
  }
  
  const results = await optimizeImagesInDirectory(PUBLIC_IMAGES_DIR);
  
  console.log('📊 Optimization Summary:');
  console.log(`   Total Original Size: ${(results.totalOriginalSize / 1024).toFixed(1)} KB`);
  console.log(`   Total Optimized Size: ${(results.totalOptimizedSize / 1024).toFixed(1)} KB`);
  console.log(`   Total Savings: ${((results.totalOriginalSize - results.totalOptimizedSize) / results.totalOriginalSize * 100).toFixed(1)}%`);
  console.log('\n✅ Image optimization complete!');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { optimizeImage, optimizeImagesInDirectory }; 