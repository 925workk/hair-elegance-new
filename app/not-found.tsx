import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-red mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-primary-red text-white px-8 py-3 rounded-md hover:bg-red-800 transition-colors duration-300 font-semibold"
          >
            Return Home
          </Link>

          <div className="mt-8 pt-8 border-t border-gray-300">
            <p className="text-gray-600 mb-4">Quick Links:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services" className="text-primary-red hover:underline">
                Services
              </Link>
              <Link href="/gallery" className="text-primary-red hover:underline">
                Gallery
              </Link>
              <Link href="/stylists" className="text-primary-red hover:underline">
                Our Team
              </Link>
              <Link href="/contact" className="text-primary-red hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Hair Elegance Salon</p>
          <p>11516 So. District Main Drive Ste 200, South Jordan, UT 84095</p>
          <p className="mt-2">
            <a href="tel:+18017274247" className="text-primary-red hover:underline">
              (801) 727-4247
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}


