
import FadeIn from '../components/FadeIn';
import Link from 'next/link';
import { getServicesByCategory } from '../lib/services';

export default function ServicesPage() {
  return (
    <main id="main-content" className="bg-off-white">
      {/* Page Title Section */}
      <section className="bg-primary-red py-12">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl font-bold text-white font-serif">SERVICES</h1>
            <p className="mt-4 text-lg text-white font-sans opacity-90">
              Prices may vary based on artist experience, hair length, and
              thickness.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Women's Color */}
      <section id="color" className="container mx-auto px-6 py-20">
        <FadeIn>
          <div className="border-b border-gray-300 pb-4">
            <h2 className="text-3xl font-bold text-left text-dark-gray font-serif flex items-center">
              <svg className="mr-4 text-primary-red" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3a9 9 0 100 18 1.5 1.5 0 000-3h-1a2 2 0 110-4h2a3 3 0 003-3 8 8 0 00-8-8z"/></svg> COLOR
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {getServicesByCategory('womens-color').map((s) => (
            <FadeIn key={s.slug}>
              <Link href={`/${s.slug}`} className="block p-8 bg-white rounded-lg shadow-lg font-sans h-full">
                <h4 className="font-serif text-lg font-bold text-dark-gray">{s.name}</h4>
                {s.priceFrom && <p className="text-primary-red font-bold text-lg text-right mt-4">{s.priceFrom}</p>}
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Cuts & Styling */}
      <section id="cuts" className="bg-soft-cream">
        <div className="container mx-auto px-6 py-20">
          <FadeIn>
            <div className="border-b border-gray-300 pb-4">
              <h2 className="text-3xl font-bold text-left text-dark-gray font-serif flex items-center">
                <svg className="mr-4 text-primary-red" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 3a3 3 0 100 6 3 3 0 000-6zm10 0a3 3 0 100 6 3 3 0 000-6zM2 20l8-8M22 20l-8-8"/></svg> CUTS & STYLING
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {getServicesByCategory('womens-haircuts-styling').map((s) => (
              <FadeIn key={s.slug}>
                <Link href={`/${s.slug}`} className="block p-8 bg-white rounded-lg shadow-lg font-sans h-full">
                  <h4 className="font-serif text-lg font-bold text-dark-gray">{s.name}</h4>
                  {s.priceFrom && <p className="text-primary-red font-bold text-lg text-right mt-4">{s.priceFrom}</p>}
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Nails */}
      <section id="nails" className="container mx-auto px-6 py-20">
        <FadeIn>
          <div className="border-b border-gray-300 pb-4">
            <h2 className="text-3xl font-bold text-left text-dark-gray font-serif flex items-center">
              <svg className="mr-4 text-primary-red" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 20h14v-2a7 7 0 00-14 0v2zm7-18a3 3 0 013 3v6h-6V5a3 3 0 013-3z"/></svg> NAILS
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {getServicesByCategory('nails').map((s) => (
            <FadeIn key={s.slug}>
              <Link href={`/${s.slug}`} className="block p-8 bg-white rounded-lg shadow-lg font-sans h-full">
                <h4 className="font-serif text-lg font-bold text-dark-gray">{s.name}</h4>
                {s.priceFrom && <p className="text-primary-red font-bold text-lg text-right mt-4">{s.priceFrom}</p>}
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Men&apos;s Services */}
      <section id="mens-services" className="bg-soft-cream">
        <div className="container mx-auto px-6 py-20">
          <FadeIn>
            <div className="border-b border-gray-300 pb-4">
              <h2 className="text-3xl font-bold text-left text-dark-gray font-serif flex items-center">
                <svg className="mr-4 text-primary-red" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 2h6v6h-2V5.41l-5.3 5.3a6 6 0 11-1.42-1.42l5.3-5.3V2zM8 14a4 4 0 104-4 4 4 0 00-4 4z"/></svg> MEN&apos;S SERVICES
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {getServicesByCategory('mens-haircuts-color').map((s) => (
              <FadeIn key={s.slug}>
                <Link href={`/${s.slug}`} className="block p-8 bg-white rounded-lg shadow-lg font-sans h-full">
                  <h4 className="font-serif text-lg font-bold text-dark-gray">{s.name}</h4>
                  {s.priceFrom && <p className="text-primary-red font-bold text-lg text-right mt-4">{s.priceFrom}</p>}
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
			
			{/* Services Intro */}
      <section className="bg-soft-cream">
        <div className="container mx-auto px-6 py-12 text-center">
          <FadeIn>
            <p className="text-lg text-text-color font-sans leading-relaxed">
              All services begin with a professional consultation.<br />
              Complimentary bang trims between your regular 6-8 week appointments.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="container mx-auto px-6 py-12">
        <FadeIn>
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary-red">
            <h3 className="text-2xl font-bold text-primary-red font-serif mb-4">Cancellation Policy</h3>
            <p className="text-text-color font-sans leading-relaxed">
              We understand that sometimes schedule adjustments are necessary. We respectfully request at least 24 hours notice for cancellations or rescheduling of appointments. Appointments cancelled or rescheduled with less than 24 hours notice may be subject to a charge equal to 50% of the scheduled service amount. No-shows will be charged the full service amount.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Call to Action */}
      <section className="bg-soft-cream">
        <div className="container mx-auto px-6 py-12 text-center">
          <FadeIn>
            <p className="text-lg text-text-color font-sans mb-8">
              Don&apos;t see what you&apos;re looking for, or have a custom request? Our talented artists are here to help!
            </p>
            <a 
              href="tel:8017274247" 
              className="inline-block bg-primary-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors duration-300 shadow-lg"
            >
              CALL US: 801-727-4247
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  );
} 