
import FadeIn from '../components/FadeIn';

export default function ContactPage() {
  return (
    <main id="main-content" className="bg-off-white">
      {/* Page Title Section */}
      <section className="bg-primary-red py-12">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl font-bold text-white font-serif">Contact Us</h1>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <FadeIn>
            <div>
              <svg className="text-4xl text-primary-red mx-auto" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h2.49a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.02l-2.2 2.2z"/></svg>
              <h3 className="mt-4 text-2xl font-bold text-dark-gray font-serif">Call Us</h3>
              <p className="mt-2 text-lg text-text-color font-sans">For appointments and inquiries:</p>
              <a href="tel:8017274247" className="text-primary-red hover:underline font-sans">801-727-4247 (HAIR)</a>
            </div>
          </FadeIn>
          <FadeIn>
            <div>
              <svg className="text-4xl text-primary-red mx-auto" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18 6.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18 6.25z"/></svg>
              <h3 className="mt-4 text-2xl font-bold text-dark-gray font-serif">Connect With Us</h3>
              <p className="mt-2 text-lg text-text-color font-sans">Follow our latest work and updates:</p>
              <a href="https://www.instagram.com/hairelegance.utah" target="_blank" rel="noopener noreferrer" className="text-primary-red hover:underline font-sans">@hairelegance.utah</a>
            </div>
          </FadeIn>
          <FadeIn>
            <div>
              <svg className="text-4xl text-primary-red mx-auto" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <h3 className="mt-4 text-2xl font-bold text-dark-gray font-serif">Email Us</h3>
              <p className="mt-2 text-lg text-text-color font-sans">For general questions or career inquiries:</p>
              <a href="mailto:hairelegance@hotmail.com" className="text-primary-red hover:underline font-sans">hairelegance@hotmail.com</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Booking Section */}
      <section className="bg-soft-cream">
        <div className="container mx-auto px-6 py-20 text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold text-dark-gray font-serif">Book Your Appointment</h2>
            <p className="mt-4 text-lg text-text-color font-sans max-w-3xl mx-auto">
              Ready to experience Hair Elegance? We recommend calling us to schedule
              your appointment for personalized service. You can also send us a
              message below with your preferred date and time, and we will get back
              to you to confirm.
            </p>
            <a href="tel:8017274247" className="inline-block mt-8 px-8 py-3 text-lg font-semibold text-white bg-primary-red rounded-lg hover:bg-red-700 font-sans">
              Call to Book: 801-727-4247
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Location and Map */}
      <section className="container mx-auto px-6 py-20">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center text-dark-gray font-serif">Our Location & Hours</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
          <FadeIn>
            <div className="text-lg text-text-color font-sans">
              <p>
                <strong>ADDRESS</strong><br />
                11516 So. District Main Drive Ste 200<br />
                South Jordan, Utah, 84095
              </p>
              <h3 className="text-2xl font-bold text-dark-gray font-serif mt-8">Salon Hours</h3>
              <p className="mt-4">
                <strong>BUSINESS HOURS</strong><br />
                Monday: 10:00 AM to 6:00 PM<br />
                Tuesday: 10:00 AM to 6:00 PM<br />
                Wednesday: Closed<br />
                Thursday: 10:00 AM to 6:00 PM<br />
                Friday: 10:00 AM to 6:00 PM<br />
                Saturday: 10:00 AM to 6:00 PM<br />
                Sunday: Closed
              </p>
              <p className="mt-4">
                <em>
                  Walk-ins are welcome based on availability, but appointments
                  are highly recommended.
                </em>
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.9678199632185!2d-111.98097229999999!3d40.5423001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752859680cd0953%3A0xf678ad13f699d85c!2sHair%20Elegance!5e0!3m2!1sen!2sus!4v1747842969253!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hair Elegance Salon Location - Google Maps"
                aria-label="Interactive map showing Hair Elegance salon location at 11516 So. District Main Drive Ste 200, South Jordan, Utah"
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
} 