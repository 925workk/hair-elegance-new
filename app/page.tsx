
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from './components/FadeIn';
import MobileOptimized from './components/MobileOptimized';

export default function Home() {
  return (
    <main id="main-content" className="bg-off-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/salonimage.jpg"
            alt="Salon Interior"
            fill
            className="object-cover scale-105"
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, 100vw"
            quality={60}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <FadeIn>
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-playfair font-bold text-white leading-tight">
                <span className="block">Where Beauty</span>
                <span className="block text-soft-cream">Meets Excellence</span>
              </h1>
              
              <div className="w-24 h-1 bg-primary-red mx-auto"></div>
              
              <p className="text-xl sm:text-2xl lg:text-3xl font-montserrat text-gray-200 max-w-3xl mx-auto leading-relaxed">
                A South Jordan Favorite Since 2008
              </p>
              
              <p className="text-base sm:text-lg font-montserrat text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Experience the perfect blend of artistry, luxury, and personalized care in our elegant salon sanctuary.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                <Link 
                  href="/contact" 
                  className="group relative px-10 py-4 bg-primary-red text-white font-montserrat font-semibold text-lg rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10">Book Your Appointment</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link 
                  href="/services" 
                  className="group px-10 py-4 bg-transparent border-2 border-white text-white font-montserrat font-semibold text-lg rounded-full hover:bg-white hover:text-primary-red transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Snippet */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative w-full h-96 rounded-lg shadow-2xl overflow-hidden">
                <Image
                  src="/images/reception-area.png"
                  alt="Comfortable salon reception area"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={75}
                />
              </div>
            </FadeIn>
            <FadeIn>
              <h2 className="text-4xl font-playfair font-bold text-dark-gray">
                A Sanctuary of Style & Comfort
              </h2>
              <p className="mt-4 text-lg font-montserrat text-text-color">
                Hair Elegance has been a cherished part of the South Jordan
                community since 2008. We have grown into a sanctuary where beauty,
                comfort, and personalized attention are combined to create a
                memorable experience for our clients.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 font-montserrat text-text-color">
                    <span className="font-bold">Expert Stylists:</span> Our team is passionate, skilled, and dedicated to their craft.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 font-montserrat text-text-color">
                    <span className="font-bold">Premium Products:</span> We use only high-quality, professional products for the best results.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 font-montserrat text-text-color">
                    <span className="font-bold">Relaxing Atmosphere:</span> Enjoy a welcoming environment designed for your comfort.
                  </p>
                </div>
              </div>
              <Link href="/about" className="inline-block mt-10 px-10 py-4 text-lg font-bold text-white bg-primary-red rounded-full hover:bg-red-700 font-montserrat transition-transform duration-300 transform hover:scale-105">
                Learn More About Us
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-soft-cream py-32">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-dark-gray mb-6">Our Signature Services</h2>
              <div className="w-24 h-1 bg-primary-red mx-auto mb-8"></div>
              <p className="text-xl font-montserrat text-text-color max-w-3xl mx-auto leading-relaxed">
                Discover the artistry and expertise that define our salon. We offer a curated selection of services designed to enhance your natural beauty and boost your confidence.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn>
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <Image 
                    src="/images/hair color.png" 
                    alt="Hair Color" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    quality={80}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-playfair font-bold mb-2">Hair Color</h3>
                    <p className="text-sm font-montserrat">Expert coloring services to achieve your perfect shade</p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-playfair font-bold text-dark-gray mb-3">Hair Color</h3>
                  <p className="font-montserrat text-text-color mb-6 leading-relaxed">Expert coloring services to achieve your perfect shade with premium products and techniques.</p>
                  <Link href="/services#color" className="inline-flex items-center text-primary-red font-montserrat font-semibold hover:text-red-700 transition-colors duration-200">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn>
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <Image 
                    src="/images/cuts and styling.png" 
                    alt="Cuts & Styling" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    quality={80}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-playfair font-bold mb-2">Cuts & Styling</h3>
                    <p className="text-sm font-montserrat">Modern and classic cuts to suit your style</p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-playfair font-bold text-dark-gray mb-3">Cuts & Styling</h3>
                  <p className="font-montserrat text-text-color mb-6 leading-relaxed">Modern and classic cuts tailored to your unique style and face shape for the perfect look.</p>
                  <Link href="/services#cuts" className="inline-flex items-center text-primary-red font-montserrat font-semibold hover:text-red-700 transition-colors duration-200">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn>
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                                      <Image 
                      src="/images/nails.png" 
                      alt="Nails" 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      quality={80}
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-playfair font-bold mb-2">Nails</h3>
                    <p className="text-sm font-montserrat">Manicures and pedicures for a polished look</p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-playfair font-bold text-dark-gray mb-3">Nails</h3>
                  <p className="font-montserrat text-text-color mb-6 leading-relaxed">Professional manicures and pedicures for beautifully polished nails that make a statement.</p>
                  <Link href="/services#nails" className="inline-flex items-center text-primary-red font-montserrat font-semibold hover:text-red-700 transition-colors duration-200">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn>
            <div className="text-center mt-20">
              <Link href="/services" className="group inline-flex items-center px-12 py-4 text-lg font-bold text-white bg-primary-red rounded-full hover:bg-red-700 font-montserrat transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View All Services
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stylists Preview */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-dark-gray mb-6">Meet Our Talented Artists</h2>
              <div className="w-24 h-1 bg-primary-red mx-auto mb-8"></div>
              <p className="text-xl font-montserrat text-text-color max-w-3xl mx-auto leading-relaxed">
                Our team of passionate and skilled stylists is dedicated to bringing your vision to life with artistry and precision.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <FadeIn>
              <div className="group text-center">
                <div className="relative mb-8">
                  <div className="relative inline-block">
                    <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                      <Image 
                        src="/images/stylist-1.png" 
                        alt="Hanh Truong" 
                        width={320} 
                        height={320} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-primary-red transition-colors duration-300"></div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-playfair font-bold text-dark-gray group-hover:text-primary-red transition-colors duration-300">Hanh Truong</h3>
                  <p className="text-lg font-montserrat text-primary-red font-semibold">Owner/Stylist</p>
                  <p className="text-base font-montserrat text-text-color max-w-sm mx-auto leading-relaxed">
                    With over 15 years of experience, Hanh brings passion and expertise to every client.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn>
              <div className="group text-center">
                <div className="relative mb-8">
                  <div className="relative inline-block">
                    <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                      <Image 
                        src="/images/stylist-2.png" 
                        alt="Haley Claybaugh" 
                        width={320} 
                        height={320} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-primary-red transition-colors duration-300"></div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-playfair font-bold text-dark-gray group-hover:text-primary-red transition-colors duration-300">Haley Claybaugh</h3>
                  <p className="text-lg font-montserrat text-primary-red font-semibold">Nail Technician</p>
                  <p className="text-base font-montserrat text-text-color max-w-sm mx-auto leading-relaxed">
                    Specializing in nail artistry and creating beautiful, long-lasting manicures.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn>
              <div className="group text-center">
                <div className="relative mb-8">
                  <div className="relative inline-block">
                    <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                      <Image 
                        src="/images/stylist-3.png" 
                        alt="Emery Nelson" 
                        width={320} 
                        height={320} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-primary-red transition-colors duration-300"></div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-playfair font-bold text-dark-gray group-hover:text-primary-red transition-colors duration-300">Emery Nelson</h3>
                  <p className="text-lg font-montserrat text-primary-red font-semibold">Stylist</p>
                  <p className="text-base font-montserrat text-text-color max-w-sm mx-auto leading-relaxed">
                    Expert in modern styling techniques and creating personalized looks for every client.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn>
            <div className="text-center mt-20">
              <Link href="/stylists" className="group inline-flex items-center px-12 py-4 text-lg font-bold text-white bg-primary-red rounded-full hover:bg-red-700 font-montserrat transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Meet The Full Team
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="bg-soft-cream py-32">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-dark-gray mb-6">Follow Our Journey</h2>
              <div className="w-24 h-1 bg-primary-red mx-auto mb-8"></div>
              <p className="text-xl font-montserrat text-text-color max-w-3xl mx-auto leading-relaxed mb-6">
                Stay connected with our latest work and behind-the-scenes moments
              </p>
              <a 
                href="https://www.instagram.com/hairelegance.utah" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-2xl font-montserrat text-primary-red hover:text-red-700 transition-colors duration-200 font-semibold"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @hairelegance.utah
              </a>
            </div>
          </FadeIn>
          
          <MobileOptimized
            mobileFallback={
              <div className="text-center py-8">
                <p className="text-lg font-montserrat text-text-color">
                  Follow us on Instagram for the latest updates and behind-the-scenes content!
                </p>
                <a 
                  href="https://www.instagram.com/hairelegance.utah" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block mt-4 px-6 py-3 bg-primary-red text-white font-montserrat font-semibold rounded-full hover:bg-red-700 transition-colors"
                >
                  View Instagram Feed
                </a>
              </div>
            }
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <FadeIn>
                <a 
                  href="https://www.instagram.com/p/DJ4e3XAJQAI/?img_index=1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group block relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="aspect-square">
                    <Image 
                      src="/images/insta-feature-1.png" 
                      alt="Instagram Post 1" 
                      width={400} 
                      height={400} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <p className="text-sm font-montserrat font-semibold">View on Instagram</p>
                    </div>
                  </div>
                </a>
              </FadeIn>
            
            <FadeIn>
              <a 
                href="https://www.instagram.com/p/DEq9ABKR3rx/?img_index=1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-square">
                  <Image 
                    src="/images/insta-feature-2.png" 
                    alt="Instagram Post 2" 
                    width={400} 
                    height={400} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <p className="text-sm font-montserrat font-semibold">View on Instagram</p>
                  </div>
                </div>
              </a>
            </FadeIn>
            
            <FadeIn>
              <a 
                href="https://www.instagram.com/p/C-6aca6vxMB/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-square">
                  <Image 
                    src="/images/insta-feature-3.png" 
                    alt="Instagram Post 3" 
                    width={400} 
                    height={400} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <p className="text-sm font-montserrat font-semibold">View on Instagram</p>
                  </div>
                </div>
              </a>
            </FadeIn>
            
            <FadeIn>
              <a 
                href="https://www.instagram.com/p/C8FPdtVpuLB/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-square">
                  <Image 
                    src="/images/insta-feature-4.png" 
                    alt="Instagram Post 4" 
                    width={400} 
                    height={400} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <p className="text-sm font-montserrat font-semibold">View on Instagram</p>
                  </div>
                </div>
              </a>
            </FadeIn>
          </div>
        </MobileOptimized>
          
          <FadeIn>
            <div className="text-center mt-20">
              <a 
                href="https://www.instagram.com/hairelegance.utah" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group inline-flex items-center px-12 py-4 text-lg font-bold text-white bg-primary-red rounded-full hover:bg-red-700 font-montserrat transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow Us on Instagram
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-dark-gray mb-6">What Our Clients Say</h2>
              <div className="w-24 h-1 bg-primary-red mx-auto mb-8"></div>
              <p className="text-xl font-montserrat text-text-color max-w-3xl mx-auto leading-relaxed">
                Don&apos;t just take our word for it - hear from our satisfied clients who have experienced the Hair Elegance difference.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn>
              <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 border-l-4 border-primary-red">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg font-montserrat text-text-color italic leading-relaxed mb-6">
                  &ldquo;Great cut! Awesome person. They take good care of my mom&apos;s hair too. We&apos;ve been coming here for over two years.&rdquo;
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center text-white font-bold text-lg">
                    J
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-dark-gray font-montserrat">Jack Leininger</h4>
                    <p className="text-sm text-text-color font-montserrat">Verified Client</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn>
              <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 border-l-4 border-primary-red">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg font-montserrat text-text-color italic leading-relaxed mb-6">
                  &ldquo;I&apos;ve been coming to Hair Elegance for 5 years. Hanh is the best! She&apos;s so great at getting the best color for my hair and I love her haircuts!&rdquo;
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center text-white font-bold text-lg">
                    L
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-dark-gray font-montserrat">Lisa G.</h4>
                    <p className="text-sm text-text-color font-montserrat">Verified Client</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn>
              <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 border-l-4 border-primary-red">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg font-montserrat text-text-color italic leading-relaxed mb-6">
                  &ldquo;Hanh is an amazing stylist! I always leave feeling beautiful. She is a master of her craft and I highly recommend her.&rdquo;
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center text-white font-bold text-lg">
                    G
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-dark-gray font-montserrat">A Google User</h4>
                    <p className="text-sm text-text-color font-montserrat">Verified Client</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn>
            <div className="text-center mt-20">
              <p className="text-lg font-montserrat text-text-color mb-8">
                Ready to experience the Hair Elegance difference for yourself?
              </p>
              <Link 
                href="/contact" 
                className="group inline-flex items-center px-12 py-4 text-lg font-bold text-white bg-primary-red rounded-full hover:bg-red-700 font-montserrat transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book Your Appointment
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Location and Hours */}
      <section className="bg-soft-cream text-dark-gray py-24">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-5xl font-bold font-serif">Visit Us</h2>
                <p className="mt-6 text-xl font-sans opacity-90">
                  11516 So. District Main Drive Ste 200<br />South Jordan, Utah, 84095
                </p>
                <p className="mt-6 text-xl font-sans">
                  <strong className="text-primary-red">PHONE:</strong> 801-727-4247 (HAIR)
                </p>
                <h3 className="mt-12 text-4xl font-bold font-serif">Hours</h3>
                <div className="mt-6 text-xl font-sans opacity-90 space-y-2">
                  <p><strong>Monday - Saturday:</strong> 10:00 AM to 6:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>
              <div className="h-96 w-full rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.9678199632185!2d-111.98097229999999!3d40.5423001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752859680cd0953%3A0xf678ad13f699d85c!2sHair%20Elegance!5e0!3m2!1sen!2sus!4v1747842969253!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hair Elegance Salon Location - Google Maps"
                  aria-label="Interactive map showing Hair Elegance salon location at 11516 So. District Main Drive Ste 200, South Jordan, Utah"
                ></iframe>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
