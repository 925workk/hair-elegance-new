
import React from 'react';
import Image from 'next/image';
import FadeIn from '../components/FadeIn';

export default function CareersPage() {
  return (
    <main id="main-content" className="bg-off-white">
      {/* Page Title Section */}
      <section className="bg-primary-red py-12">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl font-bold text-white font-serif">Join Our Team</h1>
          </FadeIn>
        </div>
      </section>

      {/* Team Introduction with Image */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <h2 className="text-4xl font-bold text-dark-gray font-serif">Become a Part of the Hair Elegance Family</h2>
              <p className="mt-6 text-lg text-text-color font-sans">
                Hair Elegance is more than just a salon; it&apos;s a place where talent thrives, creativity is celebrated, 
                and careers flourish. We are always looking for passionate, skilled, and dedicated beauty professionals 
                to join our dynamic team.
              </p>
              <p className="mt-4 text-lg text-text-color font-sans">
                If you are a licensed cosmetologist, nail technician, or lash artist with a commitment to excellence 
                and a desire to grow in a supportive and upscale environment, we would love to hear from you.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="relative">
              <Image 
                src="/images/team-pic.png" 
                alt="Hair Elegance Team" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-xl"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="bg-soft-cream">
        <div className="container mx-auto px-6 py-20">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center text-dark-gray font-serif">Career Opportunities</h2>
            <p className="mt-6 text-lg text-text-color font-sans text-center max-w-3xl mx-auto">
              We are currently seeking talented individuals for various roles and are always open to connecting with great talent!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-dark-gray font-serif">Licensed Hair Stylists</h3>
                <p className="mt-4 text-text-color font-sans">
                  We&apos;re seeking experienced stylists who are passionate about their craft and committed to 
                  providing exceptional service to our clients.
                </p>
                <ul className="mt-4 text-text-color font-sans space-y-2">
                  <li>• Valid cosmetology license</li>
                  <li>• 2+ years of experience preferred</li>
                  <li>• Strong communication skills</li>
                  <li>• Passion for continuing education</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-dark-gray font-serif">Nail Technicians</h3>
                <p className="mt-4 text-text-color font-sans">
                  Join our nail team and help clients feel pampered and beautiful with your artistic skills 
                  and attention to detail.
                </p>
                <ul className="mt-4 text-text-color font-sans space-y-2">
                  <li>• Valid nail technician license</li>
                  <li>• Experience with various nail techniques</li>
                  <li>• Artistic eye for detail</li>
                  <li>• Customer service oriented</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-dark-gray font-serif">Lash Artists</h3>
                <p className="mt-4 text-text-color font-sans">
                  Help clients achieve beautiful, dramatic lashes with your precision and artistry in lash extensions 
                  and treatments.
                </p>
                <ul className="mt-4 text-text-color font-sans space-y-2">
                  <li>• Lash extension certification</li>
                  <li>• Attention to detail</li>
                  <li>• Steady hands and patience</li>
                  <li>• Client consultation skills</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-dark-gray font-serif">Why Choose Hair Elegance?</h3>
                <ul className="mt-4 text-text-color font-sans space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-red mr-2">✓</span>
                    A modern, elegant, and well-equipped salon
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-red mr-2">✓</span>
                    Opportunities for continuous learning and professional development
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-red mr-2">✓</span>
                    A supportive and collaborative team environment
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-red mr-2">✓</span>
                    Competitive compensation and growth potential
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-red mr-2">✓</span>
                    A loyal and growing clientele in South Jordan
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Application Process */}
      <section className="container mx-auto px-6 py-20">
        <FadeIn>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-dark-gray font-serif">Ready to Join Us?</h3>
            <p className="mt-4 text-lg text-text-color font-sans max-w-2xl mx-auto">
              If you&apos;re interested in joining our team, we&apos;d love to hear from you! Please send your resume 
              and a portfolio of your work (if applicable) to get started.
            </p>
            <div className="mt-8">
              <a href="mailto:hairelegance@hotmail.com" className="inline-block px-8 py-3 text-lg font-semibold text-white bg-primary-red rounded-lg hover:bg-red-700 font-sans">
                Send Your Resume
              </a>
            </div>
            <p className="mt-4 text-text-color font-sans">
              Or call us at <a href="tel:8017274247" className="text-primary-red hover:underline">801-727-4247</a> to discuss current openings.
            </p>
            <p className="mt-2 text-text-color font-sans">
              We look forward to learning more about you and how you can contribute to the Hair Elegance experience!
            </p>
          </div>
        </FadeIn>
      </section>
    </main>
  );
} 