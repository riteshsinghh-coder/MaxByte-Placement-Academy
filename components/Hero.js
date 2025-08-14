import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import EnrollmentModal from './EnrollmentModal';
import Image from "next/image";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enrollmentData, setEnrollmentData] = useState({ name: '', phone: '' });
  const [isMounted, setIsMounted] = useState(false);
  const whatsappGroupLink = "https://chat.whatsapp.com/JeKWQKQFZc5GbbPOE4oS9k";
  const googleFormUrl = "https://docs.google.com/forms/d/1Xe3mQCw_9YTzOyKbUiVX1NVMGMMx-6B1dOHTkIHisro/edit";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const hoverEffect = {
    scale: 1.05,
    transition: { duration: 0.2 }
  };

  const tapEffect = {
    scale: 0.98
  };

  const handleGetStarted = () => {
    window.open(googleFormUrl, '_blank', 'noopener,noreferrer');
    
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-123456789/AbCdEfGhIjKlMnOpQrStUvWxYz',
        'event_callback': () => {}
      });
    }
  };

  const openEnrollmentModal = () => {
    setIsModalOpen(true);
  };

  const closeEnrollmentModal = () => {
    setIsModalOpen(false);
  };

  const handleEnroll = () => {
    console.log(`Enrolling ${enrollmentData.name} with phone number ${enrollmentData.phone}`);
    closeEnrollmentModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEnrollmentData({ ...enrollmentData, [name]: value });
  };

  const openModalIfNeeded = () => {
    if (typeof window !== 'undefined' && window.location.pathname === '/getfreetrial') {
      openEnrollmentModal();
    }
  };

  useEffect(() => {
    setIsMounted(true);
    openModalIfNeeded();
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Head>
        <title>MaxByte Placement Academy | Best IT Institute & Placement in Faridabad</title>
        <meta 
          name="description" 
          content="MaxByte Placement Academy: Your leading IT institute in Faridabad for comprehensive training, guaranteed placements, and career success. Master in-demand skills with expert-led courses." 
        />
        <meta 
          name="keywords" 
          content="MaxByte Placement Academy, best institute in Faridabad, best placement academy in Faridabad, IT courses Faridabad, software training Faridabad, career advancement, skill development, job placement, professional training, online learning, coding bootcamps" 
        />
        <link rel="canonical" href="https://www.maxbyteplacementacademy.in" />
        <meta property="og:title" content="MaxByte Placement Academy | Best IT Training & Placement in Faridabad" />
        <meta property="og:description" content="Unlock your potential with MaxByte Placement Academy! Offering top-tier IT courses and exceptional job placement support for a thriving tech career in Faridabad." />
        <meta property="og:image" content="https://www.maxbyteplacementacademy.in/assets/maxbyte_og_image.png" /> 
        <meta property="og:url" content="https://www.maxbyteplacementacademy.in" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MaxByte Placement Academy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MaxByteAcademy" />
        <meta name="twitter:creator" content="@MaxByteAcademy" />
        <meta name="twitter:title" content="MaxByte Placement Academy: IT Careers in Faridabad" />
        <meta name="twitter:description" content="Get hands-on IT training and secure your dream job with the best placement academy in Faridabad. Join MaxByte today!" />
        <meta name="twitter:image" content="https://www.maxbyteplacementacademy.in/assets/maxbyte_og_image.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "MaxByte Placement Academy",
            "url": "https://www.maxbyteplacementacademy.in",
            "logo": "https://www.maxbyteplacementacademy.in/assets/logo.png", 
            "description": "MaxByte Placement Academy is a leading IT training and placement institute located in Faridabad, Haryana, India.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "AP School Gali, Sector 23",
              "addressLocality": "Faridabad",
              "addressRegion": "Haryana",
              "postalCode": "121005",
              "addressCountry": "IN"
            },
            "telephone": "+917545840365",
            "email": "maxbyteplacement@gmail.com",
            "sameAs": [
              "https://www.instagram.com/maxbyteplacementacademy",
              "https://www.facebook.com/profile.php?id=61558540708282",
              "https://www.youtube.com/channel/UCUOszJIYskBMjPTmYxr-f1A"
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "contactType": "enrollment",
                "email": "maxbyteplacement@gmail.com",
                "telephone": "+917545840365",
                "description": "Enrollment and general inquiries"
              },
              {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://wa.me/7545840365",
                "description": "WhatsApp contact for quick support"
              }
            ]
          })}
        </script>
      </Head>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-16 md:py-24 lg:py-32"
        aria-labelledby="hero-heading"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Left Content */}
          <motion.div className="flex flex-col gap-4 md:gap-6 w-full lg:w-1/2 order-2 lg:order-1">
            <motion.h1 
              id="hero-heading"
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            >
              <motion.span 
                whileHover={{ color: '#8B5CF6' }}
                className="inline-block transition-colors"
              >
                Boost Your
              </motion.span>{' '}
              <motion.span 
                variants={itemVariants}
                className="text-purple-500"
              >
                Skills
              </motion.span>
              <br />
              <motion.span 
                variants={itemVariants}
                className="text-purple-500"
              >
                Advance
              </motion.span>{' '}
              your
              <br />
              <motion.span 
                variants={itemVariants}
                className="text-purple-500"
              >
                Career
              </motion.span>{' '}
              path
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg text-gray-600"
            >
              Unlock the latest in online learning technology and resources to support your ongoing knowledge enrichment.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4"
            >
              <motion.button
                whileHover={hoverEffect}
                whileTap={tapEffect}
                onClick={handleGetStarted}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                aria-label="Get Started - Opens enrollment form in new tab"
              >
                Get Started
              </motion.button>
              
              <motion.a
                whileHover={hoverEffect}
                whileTap={tapEffect}
                href={whatsappGroupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-purple-100 hover:bg-purple-200 text-purple-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center text-sm sm:text-base"
                aria-label="Get Free Trial - Join our WhatsApp group"
              >
                Get Free Trial
              </motion.a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 sm:gap-6 items-center pt-4 md:pt-6"
            >
              {[
                { icon: '/assets/public.svg', text: 'Public Speaking', alt: 'Public speaking icon' },
                { icon: '/assets/career.svg', text: 'Career Oriented', alt: 'Career oriented icon' },
                { icon: '/assets/think.svg', text: 'Creative Thinking', alt: 'Creative thinking icon' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex gap-2 items-center bg-white p-2 sm:p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm sm:text-base"
                >
                  <Image
                    src={item.icon} 
                    alt={item.alt}
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <p className="text-gray-700">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full lg:w-1/2 mb-8 lg:mb-0 order-1 lg:order-2"
          >
            <div className="w-full max-w-md lg:max-w-xl rounded-xl shadow-2xl mx-auto overflow-hidden">
              <Image
                src="/assets/hero.png"
                alt="Students learning and advancing their careers at MaxByte Placement Academy"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-purple-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg text-sm sm:text-base"
            >
              <p className="font-bold">1000+ Students Enrolled</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Enrollment Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <EnrollmentModal
              onClose={closeEnrollmentModal}
              onEnroll={handleEnroll}
              onChange={handleInputChange}
              formData={enrollmentData}
            />
          )}
        </AnimatePresence>
      </motion.section>
    </>
  );
};

export default Hero;