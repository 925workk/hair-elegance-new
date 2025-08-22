import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-soft-cream font-sans">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Hair Elegance</h3>
            <p className="text-soft-cream leading-relaxed">
              A South Jordan favorite since 2008, offering a blend of artistry, luxury, and personalized care.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-primary-red transition-colors">Services</Link></li>
              <li><Link href="/stylists" className="hover:text-primary-red transition-colors">Stylists</Link></li>
              <li><Link href="/gallery" className="hover:text-primary-red transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-primary-red transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a 
                href="https://www.facebook.com/p/Hair-Elegance-Utah-100037601265613/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl hover:text-primary-red transition-colors"
                aria-label="Follow Hair Elegance on Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.35 2 1.87 6.48 1.87 12.07c0 4.99 3.65 9.13 8.43 9.93v-7.02H7.9v-2.91h2.4V9.41c0-2.38 1.42-3.69 3.58-3.69 1.04 0 2.14.19 2.14.19v2.36h-1.2c-1.18 0-1.55.73-1.55 1.48v1.78h2.64l-.42 2.91h-2.22V22c4.78-.8 8.43-4.94 8.43-9.93z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/hairbosshanh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl hover:text-primary-red transition-colors"
                aria-label="Follow Hair Elegance on Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18 6.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18 6.25z" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex justify-between items-center text-light-gray">
          <p className="text-sm">© 2024 Hair Elegance. All rights reserved.</p>
          <p className="text-sm">
            Website Created by{' '}
            <a
              href="https://www.zensitemedia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Zensite Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 