'use client';

interface StructuredDataProps {
  type: 'localBusiness' | 'services' | 'about' | 'contact' | 'stylists' | 'gallery' | 'careers';
}

export default function StructuredData({ type }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseBusinessData = {
      "@context": "https://schema.org",
      "@type": "HairSalon",
      "name": "Hair Elegance Salon",
      "description": "Premier hair salon in South Jordan, Utah offering expert haircuts, hair coloring, styling, and nail services since 2008.",
      "url": "https://haireleganceutah.com",
      "telephone": "+1-801-727-4247",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "11516 So. District Main Drive Ste 200",
        "addressLocality": "South Jordan",
        "addressRegion": "UT",
        "postalCode": "84095",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.5423001,
        "longitude": -111.9809723
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00",
          "closes": "18:00"
        }
      ],
      "priceRange": "$$",
      "image": [
        "https://haireleganceutah.com/images/salonimage.jpg",
        "https://haireleganceutah.com/images/reception-area.png"
      ],
      "sameAs": [
        "https://www.instagram.com/hairelegance.utah"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "50",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    switch (type) {
      case 'localBusiness':
        return {
          ...baseBusinessData,
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Hair Salon Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Hair Color Services",
                  "description": "Professional hair coloring including highlights, balayage, and all-over color"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Haircuts & Styling",
                  "description": "Expert haircuts and styling for all hair types"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Nail Services",
                  "description": "Professional manicures and pedicures"
                }
              }
            ]
          }
        };

      case 'services':
        return {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Hair Salon Services",
          "description": "Complete list of hair salon services offered at Hair Elegance in South Jordan, Utah",
          "itemListElement": [
            {
              "@type": "Service",
              "position": 1,
              "name": "Balayage",
              "description": "Professional balayage hair coloring service",
              "offeredBy": {
                "@type": "HairSalon",
                "name": "Hair Elegance Salon"
              },
              "price": "195",
              "priceCurrency": "USD"
            },
            {
              "@type": "Service",
              "position": 2,
              "name": "Women's Full Highlight",
              "description": "Complete hair highlighting service for women",
              "offeredBy": {
                "@type": "HairSalon",
                "name": "Hair Elegance Salon"
              },
              "price": "145",
              "priceCurrency": "USD"
            },
            {
              "@type": "Service",
              "position": 3,
              "name": "Women's Haircut & Style",
              "description": "Professional haircut and styling service",
              "offeredBy": {
                "@type": "HairSalon",
                "name": "Hair Elegance Salon"
              },
              "price": "50",
              "priceCurrency": "USD"
            },
            {
              "@type": "Service",
              "position": 4,
              "name": "Gel Manicure",
              "description": "Professional gel nail manicure service",
              "offeredBy": {
                "@type": "HairSalon",
                "name": "Hair Elegance Salon"
              },
              "price": "40",
              "priceCurrency": "USD"
            }
          ]
        };

      case 'about':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Hair Elegance Salon",
          "description": "Premier hair salon in South Jordan, Utah offering expert hair styling, coloring, and nail services since 2008",
          "url": "https://haireleganceutah.com",
          "foundingDate": "2008",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "11516 So. District Main Drive Ste 200",
            "addressLocality": "South Jordan",
            "addressRegion": "UT",
            "postalCode": "84095",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-801-727-4247",
            "contactType": "customer service",
            "areaServed": "South Jordan, Utah"
          },
          "employee": [
            {
              "@type": "Person",
              "name": "Hanh Truong",
              "jobTitle": "Owner/Stylist",
              "worksFor": {
                "@type": "Organization",
                "name": "Hair Elegance Salon"
              }
            },
            {
              "@type": "Person",
              "name": "Haley Claybaugh",
              "jobTitle": "Nail Technician",
              "worksFor": {
                "@type": "Organization",
                "name": "Hair Elegance Salon"
              }
            },
            {
              "@type": "Person",
              "name": "Emery Nelson",
              "jobTitle": "Stylist",
              "worksFor": {
                "@type": "Organization",
                "name": "Hair Elegance Salon"
              }
            }
          ]
        };

      case 'contact':
        return {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Hair Elegance Salon",
          "description": "Contact information and appointment booking for Hair Elegance Salon in South Jordan, Utah",
          "url": "https://haireleganceutah.com/contact",
          "mainEntity": {
            "@type": "HairSalon",
            "name": "Hair Elegance Salon",
            "telephone": "+1-801-727-4247",
            "email": "hairelegance@hotmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "11516 So. District Main Drive Ste 200",
              "addressLocality": "South Jordan",
              "addressRegion": "UT",
              "postalCode": "84095",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.5423001,
              "longitude": -111.9809723
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
                "opens": "10:00",
                "closes": "18:00"
              }
            ],
            "sameAs": [
              "https://www.instagram.com/hairelegance.utah"
            ]
          }
        };

      case 'stylists':
        return {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Hair Elegance Salon Team",
          "description": "Meet the expert stylists and nail technicians at Hair Elegance Salon in South Jordan, Utah",
          "itemListElement": [
            {
              "@type": "Person",
              "position": 1,
              "name": "Hanh Truong",
              "jobTitle": "Owner/Stylist",
              "description": "Expert hair stylist with over 16 years of experience specializing in color, highlights, balayage, and Brazilian Blowout treatments",
              "worksFor": {
                "@type": "HairSalon",
                "name": "Hair Elegance Salon"
              },
              "sameAs": "https://www.instagram.com/asianhairboss"
            },
            {
              "@type": "Person",
              "position": 2,
              "name": "Ashley Privett",
              "jobTitle": "Stylist",
              "description": "Licensed stylist since 2009 specializing in cuts and colors with current industry trends",
              "worksFor": {
                "@type": "HairSalon",
                "name": "Hair Elegance Salon"
              },
              "sameAs": "https://www.instagram.com/_hair_by_ashley_"
            },
            {
              "@type": "Person",
              "position": 3,
              "name": "Emery Nelson",
              "jobTitle": "Stylist",
              "description": "Hair stylist with 2 years of experience focused on making clients feel beautiful and bringing their vision to life",
              "worksFor": {
                "@type": "HairSalon",
                "name": "Hair Elegance Salon"
              },
              "sameAs": "https://www.instagram.com/hair_by_emery"
            },
            {
              "@type": "Person",
              "position": 4,
              "name": "Tori Goodsell",
              "jobTitle": "Stylist",
              "description": "Stylist with over 3 years of experience specializing in thorough consultations and making clients feel confident",
              "worksFor": {
                "@type": "HairSalon",
                "name": "Hair Elegance Salon"
              },
              "sameAs": "https://www.instagram.com/teased_bytori"
            },
            {
              "@type": "Person",
              "position": 5,
              "name": "Haley Claybaugh",
              "jobTitle": "Nail Technician",
              "description": "Paul Mitchell School graduate specializing in acrylics, extensions, gels, and detailed nail art",
              "worksFor": {
                "@type": "HairSalon",
                "name": "Hair Elegance Salon"
              },
              "sameAs": "https://www.instagram.com/hayleyc.nails"
            }
          ]
        };

      case 'gallery':
        return {
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Hair Elegance Salon Gallery",
          "description": "Gallery showcasing hair styling, coloring, and nail services work at Hair Elegance Salon in South Jordan, Utah",
          "url": "https://haireleganceutah.com/gallery",
          "publisher": {
            "@type": "HairSalon",
            "name": "Hair Elegance Salon"
          },
          "image": [
            "https://haireleganceutah.com/images/gallery1.jpg",
            "https://haireleganceutah.com/images/gallery2.JPG",
            "https://haireleganceutah.com/images/gallery3.JPG",
            "https://haireleganceutah.com/images/gallery4.JPG",
            "https://haireleganceutah.com/images/gallery5.jpg"
          ]
        };

      case 'careers':
        return {
          "@context": "https://schema.org",
          "@type": "JobPosting",
          "title": "Hair Stylist",
          "description": "Join Hair Elegance Salon in South Jordan, Utah as a licensed hair stylist. We're seeking experienced stylists who are passionate about their craft and committed to providing exceptional service.",
          "hiringOrganization": {
            "@type": "Organization",
            "name": "Hair Elegance Salon",
            "url": "https://haireleganceutah.com"
          },
          "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "11516 So. District Main Drive Ste 200",
              "addressLocality": "South Jordan",
              "addressRegion": "UT",
              "postalCode": "84095",
              "addressCountry": "US"
            }
          },
          "employmentType": "FULL_TIME",
          "qualifications": "Valid cosmetology license, 2+ years of experience preferred, strong communication skills, passion for continuing education"
        };

      default:
        return baseBusinessData;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2)
      }}
    />
  );
}
