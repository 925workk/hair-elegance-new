
import { FaPalette, FaCut, FaHandSparkles, FaMale } from 'react-icons/fa';
import FadeIn from '../components/FadeIn';

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

      {/* Color Services */}
      <section id="color" className="container mx-auto px-6 py-20">
        <FadeIn>
          <div className="border-b border-gray-300 pb-4">
            <h2 className="text-3xl font-bold text-left text-dark-gray font-serif flex items-center">
              <FaPalette className="mr-4 text-primary-red" /> COLOR
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Balayage</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$195+</p></div></FadeIn>
          <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Women&apos;s Full Highlight</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$145+</p></div></FadeIn>
          <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Women&apos;s Partial Highlight</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$100+</p></div></FadeIn>
          <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Women&apos;s All Over Color w/Highlights</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$175+</p></div></FadeIn>
          <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Women&apos;s All Over Color w/Partial</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$145+</p></div></FadeIn>
          <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Women&apos;s All Over Color</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$110+</p></div></FadeIn>
          <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Women&apos;s All Over & 7 Foils</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$125+</p></div></FadeIn>
          <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">7 Foils w/Style</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$70+</p></div></FadeIn>
          <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">All Over Blonde</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$180+</p></div></FadeIn>
          <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Blonde Root Retouch</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$130+</p></div></FadeIn>
          <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Full Toner/Gloss</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$65+</p></div></FadeIn>
          <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Additional Fashion Color</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$65+</p></div></FadeIn>
          <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Root Retouch</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$78+</p></div></FadeIn>
          <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Root Touch Up w/Partial</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$128+</p></div></FadeIn>
          <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Color Remover</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$75+</p></div></FadeIn>
          <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Camo Color</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$40+</p></div></FadeIn>
        </div>
      </section>

      {/* Cuts & Styling */}
      <section id="cuts" className="bg-soft-cream">
        <div className="container mx-auto px-6 py-20">
          <FadeIn>
            <div className="border-b border-gray-300 pb-4">
              <h2 className="text-3xl font-bold text-left text-dark-gray font-serif flex items-center">
                <FaCut className="mr-4 text-primary-red" /> CUTS & STYLING
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Women&apos;s Haircut & Style</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$50+</p></div></FadeIn>
            <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Dry Cut</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$40+</p></div></FadeIn>
            <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Kid&apos;s Cut</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$35+</p></div></FadeIn>
            <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Shampoo & Style</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$35+</p></div></FadeIn>
            <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Brazillian Blowout</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$265+</p></div></FadeIn>
            <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Olaplex Treatment</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$45+</p></div></FadeIn>
            <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Deep Conditioner</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$30+</p></div></FadeIn>
            <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Deep Conditioner w/Style</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$45+</p></div></FadeIn>
            <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Curls No Shampoo</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$25+</p></div></FadeIn>
            <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Hair Extensions</h4><div className="text-right mt-4"><p className="text-text-color text-sm">Priced by consultation.</p><p className="text-primary-red font-bold text-lg">Consultation Required</p></div></div></FadeIn>
          </div>
        </div>
      </section>

      {/* Nails */}
      <section id="nails" className="container mx-auto px-6 py-20">
        <FadeIn>
          <div className="border-b border-gray-300 pb-4">
            <h2 className="text-3xl font-bold text-left text-dark-gray font-serif flex items-center">
              <FaHandSparkles className="mr-4 text-primary-red" /> NAILS
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Acrylic Full Set</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$60+</p></div></FadeIn>
          <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Gel Manicure</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$40+</p></div></FadeIn>
          <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Pedicure</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$45+</p></div></FadeIn>
        </div>
      </section>

      {/* Men&apos;s Services */}
      <section id="mens-services" className="bg-soft-cream">
        <div className="container mx-auto px-6 py-20">
          <FadeIn>
            <div className="border-b border-gray-300 pb-4">
              <h2 className="text-3xl font-bold text-left text-dark-gray font-serif flex items-center">
                <FaMale className="mr-4 text-primary-red" /> MEN&apos;S SERVICES
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Men&apos;s Cut</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$31+</p></div></FadeIn>
            <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Men&apos;s All Over Color</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$50+</p></div></FadeIn>
            <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Men&apos;s All Blonde w/Toner</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$140+</p></div></FadeIn>
            <FadeIn><div className="p-8 bg-white rounded-lg shadow-lg font-sans h-full flex flex-col"><h4 className="font-serif text-lg font-bold text-dark-gray flex-grow">Men&apos;s Highlight</h4><p className="text-primary-red font-bold text-lg text-right mt-4">$70+</p></div></FadeIn>
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