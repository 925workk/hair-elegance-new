import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-soft-cream font-sans">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Hair Elegance</h3>
            <p className="text-light-gray">
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
                <FaFacebook />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/hairelegance.utah" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl hover:text-primary-red transition-colors"
                aria-label="Follow Hair Elegance on Instagram"
              >
                <FaInstagram />
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