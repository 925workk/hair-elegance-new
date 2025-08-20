'use client';
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
  const [visibleImages, setVisibleImages] = React.useState(12);
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

  const showMoreImages = () => {
    setVisibleImages((prev) => Math.min(prev + 4, images.length));
  };

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev === 0 ? visibleImages - 1 : prev! - 1));
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev === visibleImages - 1 ? 0 : prev! + 1));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <main id="main-content" className="bg-off-white">
      {/* Page Title Section */}
      <section className="bg-primary-red py-12">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl font-bold text-white font-serif">GALLERY</h1>
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
          {images.slice(0, visibleImages).map((src, index) => (
            <FadeIn key={index}>
              <div 
                className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                onClick={() => openModal(index)}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white bg-opacity-90 rounded-full p-2">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        {visibleImages < images.length && (
          <div className="text-center mt-12">
            <button
              onClick={showMoreImages}
              className="bg-primary-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors duration-300 shadow-lg"
            >
              View More
            </button>
          </div>
        )}
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={images[selectedImage]}
                alt={`Gallery image ${selectedImage + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded">
              {selectedImage + 1} / {visibleImages}
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 