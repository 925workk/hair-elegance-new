import React from 'react';
import Image from 'next/image';
import FadeIn from '../components/FadeIn';
import StructuredData from '../components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hair Salon Gallery - Hair Elegance Salon Work Portfolio | South Jordan, Utah",
  description: "Browse our hair salon gallery showcasing expert haircuts, hair coloring, highlights, balayage, and nail services at Hair Elegance Salon in South Jordan, Utah. See our latest work and transformations.",
  keywords: [
    "hair salon gallery South Jordan",
    "Hair Elegance gallery",
    "hair salon before after South Jordan",
    "hair color gallery South Jordan",
    "haircut gallery South Jordan",
    "balayage gallery South Jordan",
    "highlights gallery South Jordan",
    "nail art gallery South Jordan",
    "hair salon portfolio South Jordan",
    "Hair Elegance work examples",
    "hair styling gallery Utah"
  ],
  openGraph: {
    title: "Hair Salon Gallery - Hair Elegance Salon Work Portfolio | South Jordan, Utah",
    description: "Browse our hair salon gallery showcasing expert haircuts, hair coloring, highlights, balayage, and nail services at Hair Elegance Salon in South Jordan, Utah.",
    url: 'https://haireleganceutah.com/gallery',
    images: [
      {
        url: '/images/gallery1.jpg',
        width: 800,
        height: 600,
        alt: 'Hair Elegance Salon gallery - hair styling work examples',
      },
    ],
  },
  alternates: {
    canonical: 'https://haireleganceutah.com/gallery',
  },
};

const images = [
  '/images/gallery1.jpg',
  '/images/gallery2.JPG',
  '/images/gallery3.JPG',
  '/images/gallery4.JPG',
  '/images/gallery5.jpg',
  '/images/gallery6.jpg',
  '/images/gallery7.JPG',
  '/images/gallery8.jpg',
  '/images/gallery9.jpg',
  '/images/gallery10.jpg',
  '/images/gallery11.jpg',
  '/images/gallery12.jpg',
  '/images/gallery13.JPG',
  '/images/gallery14.jpg',
  '/images/gallery15.jpg',
  '/images/gallery16.jpg',
  '/images/gallery17.jpg',
  '/images/gallery18.jpg',
  '/images/gallery19.jpg',
  '/images/gallery20.jpg',
  '/images/gallery21.jpg',
  '/images/gallery22.jpg',
  '/images/gallery23.jpg',
];

export default function GalleryPage() {
  return (
    <main id="main-content" className="bg-off-white">
      {/* Page Title Section */}
      <section className="bg-primary-red py-12">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl font-bold text-white font-serif" style={{fontSize: '3rem'}}>GALLERY</h1>
            <p className="mt-4 text-lg text-white font-sans opacity-90">
              A Glimpse of Our Craftsmanship and Creativity
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Structured Data for Gallery Page */}
      <StructuredData type="gallery" />

      {/* Gallery Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <FadeIn key={index}>
              <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <Image
                  src={src}
                  alt={`Hair Elegance Salon gallery image ${index + 1} - South Jordan, Utah`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white bg-opacity-90 rounded-full p-2">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-soft-cream py-16">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-dark-gray font-serif mb-6">
              Ready to Experience Our Work?
            </h2>
            <p className="text-lg text-text-color font-montserrat mb-8 max-w-2xl mx-auto">
              See our gallery in person and let our expert stylists create the perfect look for you. 
              Book your appointment today and join our satisfied clients in South Jordan.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-primary-red text-white font-semibold rounded-full hover:bg-red-700 transition-colors duration-300 shadow-lg"
            >
              Book Your Appointment
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  );
} 