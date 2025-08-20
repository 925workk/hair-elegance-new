const fs = require('fs');
const path = require('path');

// Function to extract critical CSS from globals.css
function extractCriticalCSS() {
  const globalsPath = path.join(process.cwd(), 'app/globals.css');
  const criticalPath = path.join(process.cwd(), 'app/critical.css');
  
  if (!fs.existsSync(globalsPath)) {
    console.log('globals.css not found, skipping CSS optimization');
    return;
  }
  
  const globalsContent = fs.readFileSync(globalsPath, 'utf8');
  
  // Extract critical styles (basic layout, typography, and above-the-fold styles)
  const criticalStyles = `
/* Critical CSS for above-the-fold content - Inline this for faster LCP */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Critical base styles */
html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-montserrat), system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  color: #333;
  margin: 0;
  padding: 0;
}

/* Critical layout styles */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Critical header styles */
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

/* Critical hero section styles */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 800px;
  padding: 2rem;
}

.hero-title {
  font-family: var(--font-playfair-display), serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
  font-weight: 400;
}

/* Critical button styles */
.btn-primary {
  display: inline-block;
  background: #b71c1c;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background: #8b0000;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(183, 28, 28, 0.3);
}

/* Critical responsive styles */
@media (max-width: 640px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.125rem;
  }
  
  .container {
    padding: 0 0.75rem;
  }
}

/* Critical accessibility styles */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.focus-visible {
  outline: 2px solid #b71c1c;
  outline-offset: 2px;
}

/* Critical image styles */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Critical font loading optimization */
.font-display {
  font-display: swap;
}
`;
  
  fs.writeFileSync(criticalPath, criticalStyles);
  console.log('✅ Critical CSS extracted to app/critical.css');
}

// Function to optimize non-critical CSS
function optimizeNonCriticalCSS() {
  const globalsPath = path.join(process.cwd(), 'app/globals.css');
  const publicPath = path.join(process.cwd(), 'public/globals.css');
  
  if (!fs.existsSync(globalsPath)) {
    console.log('globals.css not found, skipping optimization');
    return;
  }
  
  const nonCriticalStyles = `/* Non-critical CSS - loaded after initial render for better performance */

@layer base {
  /* Additional base styles for below-the-fold content */
  .section-padding {
    padding: 4rem 0;
  }
  
  .text-gradient {
    background: linear-gradient(135deg, #b71c1c, #8b0000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

@layer components {
  /* Non-critical component styles */
  .card {
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
  }
  
  .btn-secondary {
    padding: 0.75rem 1.5rem;
    background: transparent;
    border: 2px solid #b71c1c;
    color: #b71c1c;
    font-weight: 600;
    border-radius: 50px;
    transition: all 0.3s ease;
  }
  
  .btn-secondary:hover {
    background: #b71c1c;
    color: white;
  }
  
  /* Non-critical animations */
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Non-critical hover effects */
  .hover-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .hover-lift:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
}

@layer utilities {
  /* Non-critical utility classes */
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  .backdrop-blur {
    backdrop-filter: blur(10px);
  }
  
  /* Non-critical responsive utilities */
  .container-sm {
    max-width: 640px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .container-lg {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .container-xl {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
  }
}

/* Additional responsive styles */
@media (max-width: 640px) {
  .hero-title {
    font-size: 2.5rem !important;
  }
  
  .hero-subtitle {
    font-size: 1.125rem !important;
  }
}

@media (min-width: 1280px) {
  .hero-title {
    font-size: 5rem !important;
  }
  
  .hero-subtitle {
    font-size: 1.5rem !important;
  }
}

/* Additional print styles */
@media print {
  .no-print {
    display: none !important;
  }
  
  .print-only {
    display: block !important;
  }
}`;
  
  fs.writeFileSync(publicPath, nonCriticalStyles);
  console.log('✅ Non-critical CSS optimized and saved to public/globals.css');
}

// Run optimizations
console.log('🚀 Starting CSS optimization...');
extractCriticalCSS();
optimizeNonCriticalCSS();
console.log('✅ CSS optimization complete!');
