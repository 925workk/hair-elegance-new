'use client';

interface StructuredDataProps {
  type: 'localBusiness' | 'services' | 'about' | 'gallery' | 'stylists' | 'contact' | 'careers';
}

export default function StructuredData({ type }: StructuredDataProps) {
  const baseUrl = 'https://haireleganceutah.com';
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "Hair Elegance Salon",
    "description": "Premier hair salon in South Jordan, Utah offering expert haircuts, hair coloring, styling, and nail services since 2008.",
    "url": baseUrl,
    "telephone": "+1-801-727-4247",
    "email": "info@haireleganceutah.com",
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
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "USD",
    "areaServed": {
      "@type": "City",
      "name": "South Jordan"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 40.5423001,
        "longitude": -111.9809723
      },
      "geoRadius": "25000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hair Salon Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Haircut",
            "description": "Professional haircut and styling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hair Color",
            "description": "Professional hair coloring services including highlights, balayage, and all-over color"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nail Services",
            "description": "Manicure and pedicure services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lash Services",
            "description": "Professional lash extensions and treatments"
          }
        }
      ]
    },
    "image": [
      `${baseUrl}/images/salonimage.jpg`,
      `${baseUrl}/images/reception-area.png`,
      `${baseUrl}/images/styling-stations.jpg`
    ],
    "logo": `${baseUrl}/images/logo.png`,
    "sameAs": [
      "https://www.instagram.com/hairelegance.utah",
      "https://www.facebook.com/p/Hair-Elegance-Utah-100037601265613/"
    ],
    "foundingDate": "2008",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewBody": "Amazing salon! The stylists are incredibly talented and the atmosphere is so welcoming. I've been coming here for years and always leave feeling beautiful."
      }
    ]
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Hair Elegance Salon Services",
    "description": "Complete list of hair, nail, and lash services offered at Hair Elegance Salon in South Jordan, Utah",
    "url": `${baseUrl}/services`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Hair Color",
          "description": "Professional hair coloring including highlights, balayage, and all-over color"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Haircuts & Styling",
          "description": "Professional haircuts and styling services"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Nail Services",
          "description": "Manicure and pedicure services"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Lash Services",
          "description": "Professional lash extensions and treatments"
        }
      }
    ]
  };

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hair Elegance Salon",
    "description": "Premier hair salon in South Jordan, Utah since 2008, specializing in hair, nail, and lash services",
    "url": baseUrl,
    "foundingDate": "2008",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11516 So. District Main Drive Ste 200",
      "addressLocality": "South Jordan",
      "addressRegion": "UT",
      "postalCode": "84095",
      "addressCountry": "US"
    },
    "mission": "To empower individuals by enhancing their natural beauty through exceptional hair, nail, and lash services in a luxurious and inviting atmosphere."
  };

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Hair Elegance Salon Gallery",
    "description": "Gallery showcasing our hair, nail, and lash work at Hair Elegance Salon in South Jordan, Utah",
    "url": `${baseUrl}/gallery`,
    "image": [
      `${baseUrl}/images/gallery1.jpg`,
      `${baseUrl}/images/gallery2.JPG`,
      `${baseUrl}/images/gallery3.JPG`,
      `${baseUrl}/images/gallery4.JPG`,
      `${baseUrl}/images/gallery5.jpg`
    ]
  };

  const stylistsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Hair Elegance Salon Stylists",
    "description": "Meet our team of professional stylists at Hair Elegance Salon in South Jordan, Utah",
    "url": `${baseUrl}/stylists`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Person",
          "name": "Hayley",
          "jobTitle": "Nail Technician",
          "description": "Specialized nail technician with expertise in manicures and pedicures"
        }
      }
    ]
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Hair Elegance Salon",
    "description": "Contact information and location for Hair Elegance Salon in South Jordan, Utah",
    "url": `${baseUrl}/contact`,
    "mainEntity": {
      "@type": "HairSalon",
      "name": "Hair Elegance Salon",
      "telephone": "+1-801-727-4247",
      "email": "info@haireleganceutah.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "11516 So. District Main Drive Ste 200",
        "addressLocality": "South Jordan",
        "addressRegion": "UT",
        "postalCode": "84095",
        "addressCountry": "US"
      }
    }
  };

  const careersSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Hair Stylist Position",
    "description": "Join the Hair Elegance Salon team in South Jordan, Utah. We're hiring licensed hair stylists, nail technicians, and lash artists.",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Hair Elegance Salon",
      "url": baseUrl
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
    "qualifications": "Licensed cosmetologist, nail technician, or lash artist"
  };

  const schemas = {
    localBusiness: localBusinessSchema,
    services: servicesSchema,
    about: aboutSchema,
    gallery: gallerySchema,
    stylists: stylistsSchema,
    contact: contactSchema,
    careers: careersSchema
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas[type])
      }}
    />
  );
}
