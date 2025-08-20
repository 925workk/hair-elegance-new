import { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import { CATEGORY_LABELS, SERVICES, getServiceBySlug, getCopyForService } from '../lib/services';

export function generateStaticParams(): { slug: string }[] {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolved = await params;
  const service = getServiceBySlug(resolved.slug);
  const baseTitle = service ? `${service.name} in South Jordan` : 'Salon Services in South Jordan';
  const title = `${baseTitle} | Hair Elegance`;
  const description = service
    ? `Discover ${service.name} in South Jordan at Hair Elegance. Expert stylists, transparent pricing, and a relaxing salon in The District. Book your ${service.name.toLowerCase()} today.`
    : 'Professional hair and beauty services in South Jordan, Utah. Book now at Hair Elegance.';

  return {
    title,
    description,
    alternates: { canonical: `/${resolved.slug}` },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://www.haireleganceutah.com/${resolved.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return (
      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold font-serif">Service Not Found</h1>
        <p className="mt-4">Please return to our services page to explore our offerings.</p>
        <Link href="/services" className="text-primary-red underline mt-6 inline-block">Back to Services</Link>
      </main>
    );
  }

  const categoryLabel = CATEGORY_LABELS[service.category];
  const copy = getCopyForService(service);

  return (
    <main id="main-content" className="bg-off-white">
      <section className="bg-primary-red py-12">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl font-bold text-white font-serif">{service.name} – South Jordan</h1>
            <p className="text-white/90 mt-3 font-sans">Expert {service.name.toLowerCase()} at Hair Elegance in The District</p>
          </FadeIn>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
            <p className="font-sans text-lg text-text-color leading-relaxed">{copy.intro}</p>

            {copy.sections.map((s, i) => (
              <div key={i} className="mt-8">
                <h3 className="text-2xl font-serif font-bold text-dark-gray">{s.heading}</h3>
                <p className="mt-3 font-sans text-lg text-text-color leading-relaxed">{s.content}</p>
              </div>
            ))}

            <div className="mt-10">
              <h3 className="text-2xl font-serif font-bold text-dark-gray">Pricing</h3>
              <p className="mt-3 font-sans text-lg text-text-color leading-relaxed">
                {service.priceFrom
                  ? `Prices typically start at ${service.priceFrom}. Final pricing depends on hair length, thickness, and technique.`
                  : 'Pricing varies by consultation based on the scope of work and desired result.'}
              </p>
            </div>

            {copy.faqs.length > 0 && (
              <div className="mt-10">
                <h3 className="text-2xl font-serif font-bold text-dark-gray">Frequently Asked Questions</h3>
                <dl className="mt-4 space-y-4">
                  {copy.faqs.map((f, i) => (
                    <div key={i}>
                      <dt className="font-semibold font-sans text-dark-gray">{f.q}</dt>
                      <dd className="font-sans text-text-color">{f.a}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <div className="mt-10">
              <a href="tel:8017274247" className="inline-block px-8 py-4 bg-primary-red text-white rounded-full font-bold hover:bg-red-700">
                Call to Book: 801‑727‑4247
              </a>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-serif font-bold text-dark-gray">Related Services</h4>
              <ul className="mt-4 space-y-2">
                {SERVICES.filter((s) => s.category === service.category && s.slug !== service.slug)
                  .slice(0, 8)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link href={`/${s.slug}`} className="text-primary-red hover:underline">
                        {s.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="mt-6 bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-serif font-bold text-dark-gray">Category</h4>
              <p className="mt-2 text-text-color font-sans">{categoryLabel}</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}


