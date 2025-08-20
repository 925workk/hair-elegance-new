import Image from 'next/image';
import FadeIn from '../components/FadeIn';
import StructuredData from '../components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Hair Elegance Salon - South Jordan's Premier Hair Salon Since 2008",
  description: "Learn about Hair Elegance Salon in South Jordan, Utah. Our story of excellence in hair styling, coloring, and nail services since 2008. Meet our expert team and discover our commitment to beauty and customer satisfaction.",
  keywords: [
    "Hair Elegance Salon about",
    "South Jordan hair salon history",
    "hair salon South Jordan since 2008",
    "Hair Elegance team",
    "South Jordan hair stylists",
    "hair salon expertise South Jordan",
    "Hair Elegance mission",
    "South Jordan beauty salon",
    "hair salon customer service South Jordan",
    "Hair Elegance story"
  ],
  openGraph: {
    title: "About Hair Elegance Salon - South Jordan's Premier Hair Salon Since 2008",
    description: "Learn about Hair Elegance Salon in South Jordan, Utah. Our story of excellence in hair styling, coloring, and nail services since 2008.",
    url: 'https://haireleganceutah.com/about',
    images: [
      {
        url: '/images/team-pic.png',
        width: 800,
        height: 600,
        alt: 'Hair Elegance Salon team - South Jordan, Utah',
      },
    ],
  },
  alternates: {
    canonical: 'https://haireleganceutah.com/about',
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-off-white">
      {/* Page Title Section */}
      <section className="bg-primary-red py-12">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl font-bold text-white font-serif">About Hair Elegance</h1>
          </FadeIn>
        </div>
      </section>

      {/* Structured Data for About Page */}
      <StructuredData type="about" />

      {/* Mission Statement */}
      <section className="container mx-auto px-6 py-20">
        <FadeIn>
          <h2 className="text-4xl font-bold text-left text-dark-gray font-serif">Our Mission</h2>
          <div className="mt-8 text-lg text-text-color font-sans space-y-4">
            <p>
              Our journey began with a simple vision: to create a space where guests
              feel welcomed, understood, and beautiful. Over the years, we&apos;ve stayed
              true to this vision, continuously evolving our services and techniques
              to meet the ever-changing trends and needs of our discerning
              clientele.
            </p>
            <p>
              At Hair Elegance, our mission is to empower individuals by enhancing
              their natural beauty through exceptional hair, nail, and lash
              services. We are dedicated to providing a luxurious and inviting
              atmosphere where our clients can relax, rejuvenate, and receive the
              highest level of professional care. We strive for excellence in every
              aspect of our service, ensuring that each visit leaves you feeling
              confident, radiant, and valued.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Team Expertise */}
      <section className="bg-soft-cream">
        <div className="container mx-auto px-6 py-20">
          <FadeIn>
            <h2 className="text-4xl font-bold text-left text-dark-gray font-serif">Expertise & Continuous Learning</h2>
            <p className="mt-8 text-lg text-text-color font-sans">
              Our team of talented stylists and technicians is the heart of Hair
              Elegance. We are proud to have a highly skilled team trained in the
              latest techniques and trends, with expertise in renowned product lines
              such as Redken, Wella, Pravana, and Kenra. Continuous education is a
              cornerstone of our philosophy; our professionals regularly attend
              advanced training workshops and industry events to refine their skills
              and stay at the forefront of the beauty industry. This dedication
              ensures we can offer you the most innovative and effective treatments
              and styles.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Commitment to Premium Customer Service */}
      <section className="container mx-auto px-6 py-20">
        <FadeIn>
          <h2 className="text-4xl font-bold text-left text-dark-gray font-serif">Commitment to Premium Customer Service</h2>
          <p className="mt-8 text-lg text-text-color font-sans">
            We believe that exceptional service goes beyond technical skill. From
            the moment you step into Hair Elegance, you will be greeted with
            warmth and attentiveness. We take the time to listen to your desires
            and concerns, offering personalized consultations to ensure your
            vision is brought to life. Our goal is to make every appointment a
            relaxing and enjoyable experience, providing a haven where you can
            unwind while we take care of your beauty needs. Your satisfaction and
            comfort are our utmost priorities.
          </p>
        </FadeIn>
      </section>

      {/* Salon Interior */}
      <section className="bg-soft-cream">
        <div className="container mx-auto px-6 py-20">
          <FadeIn>
            <h2 className="text-4xl font-bold text-left text-dark-gray font-serif">Experience Our Elegant Salon</h2>
          </FadeIn>
          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
            <FadeIn>
              <div className="text-center">
                <Image 
                  src="/images/reception-area.png" 
                  alt="Reception Area" 
                  width={300} 
                  height={200} 
                  className="mx-auto rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
                <p className="mt-4 text-xl font-semibold text-dark-gray font-sans">Reception Area</p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="text-center">
                <Image 
                  src="/images/styling-stations.jpg" 
                  alt="Styling Stations" 
                  width={300} 
                  height={200} 
                  className="mx-auto rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
                <p className="mt-4 text-xl font-semibold text-dark-gray font-sans">Styling Stations</p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="text-center">
                <Image 
                  src="/images/nail-bar.png" 
                  alt="Nail Bar" 
                  width={300} 
                  height={200} 
                  className="mx-auto rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
                <p className="mt-4 text-xl font-semibold text-dark-gray font-sans">Nail Bar</p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="text-center">
                <Image 
                  src="/images/relaxation-center.png" 
                  alt="Relaxation Corner" 
                  width={300} 
                  height={200} 
                  className="mx-auto rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
                <p className="mt-4 text-xl font-semibold text-dark-gray font-sans">Relaxation Corner</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
} 