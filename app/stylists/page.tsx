
import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaPhone } from 'react-icons/fa';
import FadeIn from '../components/FadeIn';
import StructuredData from '../components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Meet Our Expert Hair Stylists - Hair Elegance Salon | South Jordan, Utah",
  description: "Meet the talented team at Hair Elegance Salon in South Jordan, Utah. Our expert stylists specialize in hair coloring, cuts, styling, and nail services. Book with Hanh, Ashley, Emery, Tori, or Haley today.",
  keywords: [
    "hair stylists South Jordan",
    "Hair Elegance stylists",
    "South Jordan hair stylists",
    "Hanh Truong hair stylist",
    "Ashley Privett hair stylist",
    "Emery Nelson hair stylist",
    "Tori Goodsell hair stylist",
    "Haley Claybaugh nail tech",
    "hair salon team South Jordan",
    "expert hair stylists Utah",
    "hair color specialist South Jordan",
    "nail technician South Jordan"
  ],
  openGraph: {
    title: "Meet Our Expert Hair Stylists - Hair Elegance Salon | South Jordan, Utah",
    description: "Meet the talented team at Hair Elegance Salon in South Jordan, Utah. Our expert stylists specialize in hair coloring, cuts, styling, and nail services.",
    url: 'https://haireleganceutah.com/stylists',
    images: [
      {
        url: '/images/stylist-1.png',
        width: 800,
        height: 600,
        alt: 'Hair Elegance Salon stylists team - South Jordan, Utah',
      },
    ],
  },
  alternates: {
    canonical: 'https://haireleganceutah.com/stylists',
  },
};

const stylists = [
  {
    name: 'Hanh Truong',
    title: 'Owner/Stylist',
    image: '/images/stylist-1.png',
    bio: "I've been working as a hairstylist behind the chair for over 16 years. I love customizing each client's color & cut to fit their personality, lifestyle, and needs. Along with specializing in color, highlights, balayage, and women's & men's cuts, I am certified in the Brazilian Blowout smoothing treatment and Foxy Hair beaded extensions. Customer service and continuing education are high priorities for me.",
    instagram: 'asianhairboss',
    instagramLink: 'https://www.instagram.com/asianhairboss',
    phone: '801-860-3102',
  },
  {
    name: 'Ashley Privett',
    title: 'Stylist',
    image: '/images/stylist-5.png',
    bio: "I've been a licensed stylist since 2009, though I've been interested and practiced with hair for much longer. I love all the different types of cuts and colors, and staying current with industry trends. Feel free to call or text me for an appointment!",
    instagram: '_hair_by_ashley_',
    instagramLink: 'https://www.instagram.com/_hair_by_ashley_',
    phone: '801-712-9117',
  },
  {
    name: 'Emery Nelson',
    title: 'Stylist',
    image: '/images/stylist-3.png',
    bio: "Hi my name is Emery and I have been doing hair for two years now. I love being able to make someone feel beautiful! I really enjoy getting to know the client. There's no better feeling then bringing there vision to life. I'm so excited for the relationships I get to form. I can't wait to have you in my chair.",
    instagram: 'hair_by_emery',
    instagramLink: 'https://www.instagram.com/hair_by_emery',
    phone: '801-727-4247',
  },
  {
    name: 'Tori Goodsell',
    title: 'Stylist',
    image: '/images/stylist-4.png',
    bio: "Hi, I'm Tori! I've been a stylist for over three years, though my love for beauty began much earlier. I enjoy learning new techniques and pride myself on thorough consultations to meet your needs. My goal is to make you feel confident and glamorous! New to the area, I look forward to meeting you. Please reach out with any questions.",
    instagram: 'teased_bytori',
    instagramLink: 'https://www.instagram.com/teased_bytori/',
    phone: '435-773-0797',
  },
  {
    name: 'Haley Claybaugh',
    title: 'Nail Tech',
    image: '/images/stylist-2.png',
    bio: "Hi, I'm Hayley, a nail technician passionate about creativity and precision. A Paul Mitchell School graduate with two years of experience, including training with Tammy Taylor, I specialize in acrylics, extensions, gels, and detailed nail art, especially French tips. I prioritize nail health and infection control to ensure a luxurious experience, aiming to make your nails works of art and leave you feeling polished.",
    instagram: 'hayleyc.nails',
    instagramLink: 'https://www.instagram.com/hayleyc.nails',
    phone: '801-674-6042',
  },
];

export default function StylistsPage() {
  return (
    <main id="main-content" className="bg-off-white">
      {/* Page Title Section */}
      <section className="bg-primary-red py-12">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl font-bold text-white font-serif">MEET YOUR STYLISTS</h1>
          </FadeIn>
        </div>
      </section>

      {/* Structured Data for Stylists Page */}
      <StructuredData type="stylists" />

      {/* Stylists Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {stylists.map((stylist) => (
            <FadeIn key={stylist.name}>
              <div className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col text-center h-full">
                <div className="mx-auto mb-6">
                  <div className="relative w-48 h-48">
                    <Image
                      src={stylist.image}
                      alt={stylist.name}
                      fill
                      className="rounded-full object-cover border-4 border-primary-red"
                    />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-primary-red font-serif">{stylist.name}</h3>
                <p className="text-lg text-dark-gray font-sans italic mt-2">{stylist.title}</p>
                <p className="text-text-color font-sans mt-6 leading-relaxed flex-grow">{stylist.bio}</p>
                <div className="mt-8">
                  <a href={stylist.instagramLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-dark-gray hover:text-primary-red font-sans transition-colors duration-200 mb-3">
                    <FaInstagram className="mr-3 text-lg" />
                    {stylist.instagram}
                  </a>
                  <a href={`tel:${stylist.phone}`} className="flex items-center justify-center text-dark-gray hover:text-primary-red font-sans transition-colors duration-200">
                    <FaPhone className="mr-3 text-lg" />
                    {stylist.title.includes('Owner') || stylist.title.includes('Nail') ? 'Mobile' : 'Phone'}: {stylist.phone}
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
} 