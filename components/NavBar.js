import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaPhone, FaEnvelope, FaWhatsapp, FaBars, FaTimes, FaUserGraduate } from 'react-icons/fa';
import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image"; // Added Next.js Image import

// Modal component with animations and accessibility features
const Modal = ({ isOpen, onClose, title, content }) => {
  // Function to handle phone call
  const handlePhoneCall = () => {
    window.location.href = 'tel:+917545840365';
  };

  // Function to handle WhatsApp message
  const handleWhatsAppMessage = () => {
    const message = encodeURIComponent('Welcome to MaxByte Placement Academy. We offer comprehensive IT education and career placement services.');
    window.open(`https://wa.me/917545840365?text=${message}`, '_blank');
  };

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Trap focus inside modal for accessibility
  useEffect(() => {
    if (isOpen) {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const modal = document.querySelector('#contact-modal');
      // Ensure modal exists before trying to query its elements
      if (modal) { 
        const focusableContent = modal.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0];
        const lastFocusableElement = focusableContent[focusableContent.length - 1];

        const handleTabKey = (e) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
              }
            }
          }
        };

        // Only try to focus if there's a first focusable element
        if (firstFocusableElement) {
            firstFocusableElement.focus();
        }
        document.addEventListener('keydown', handleTabKey);

        return () => {
          document.removeEventListener('keydown', handleTabKey);
        };
      }
    }
  }, [isOpen]);

  return (
    <div 
      id="contact-modal"
      className={`fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className={`bg-white p-6 md:p-8 rounded-lg shadow-xl transform transition-all duration-300 w-full max-w-md mx-4 ${
          isOpen ? 'scale-100' : 'scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="modal-title" className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-6">{content}</p>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <FaPhone className="mr-3 text-purple-600" size={18} aria-hidden="true" />
            <button 
              onClick={handlePhoneCall} 
              className="text-base text-gray-700 hover:text-purple-600 transition-colors cursor-pointer text-left"
              aria-label="Call us at +91 7545840365"
            >
              Phone: <span className="font-medium text-purple-600">+91 7545840365</span>
            </button>
          </div>
          
          <div className="flex items-center">
            <FaWhatsapp className="mr-3 text-green-500" size={18} aria-hidden="true" />
            <button 
              onClick={handleWhatsAppMessage}
              className="text-base text-gray-700 hover:text-green-500 transition-colors cursor-pointer text-left"
              aria-label="Chat with us on WhatsApp"
            >
              WhatsApp: <span className="font-medium text-green-500">Chat with Us</span>
            </button>
          </div>
          
          <div className="flex items-center">
            <FaEnvelope className="mr-3 text-purple-600" size={18} aria-hidden="true" />
            <a 
              href="mailto:maxbyteplacementacademy@gmail.com" 
              className="text-base text-gray-700 hover:text-purple-600 transition-colors"
              aria-label="Email us at maxbyteplacementacademy@gmail.com"
            >
              Email: <span className="font-medium text-purple-600">maxbyteplacementacademy@gmail.com</span>
            </a>
          </div>
        </div>
        
        <button 
          className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          onClick={onClose}
          aria-label="Close contact modal"
        >
          Close
        </button>
      </div>
    </div>
  );
}

const NavBar = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalContent, setModalContent] = useState({ 
    title: 'Contact Us', 
    content: 'Feel free to reach us via phone, WhatsApp, or email.' 
  });

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
  <title>MaxByte Placement Academy | IT Education, Coaching & Digital Marketing in Faridabad</title>
  <meta
    name="description"
    content="MaxByte Placement Academy offers top-notch IT education, school tuition (5th–10th), and digital marketing training in Faridabad. Join our Coaching Institute or Digital Hub to level up your future."
  />
  <meta
    name="keywords"
    content="IT education Faridabad, coaching institute 5th to 10th, tuition classes in Faridabad, digital marketing training, SEO courses, social media marketing Faridabad, best coaching Faridabad, MaxByte"
  />
  <meta name="author" content="MaxByte Placement Academy" />

  {/* Open Graph */}
  <meta property="og:title" content="MaxByte Placement Academy - Coaching & Digital Training in Faridabad" />
  <meta property="og:description" content="Coaching for classes 5–10 and digital marketing training. Trusted by hundreds in Faridabad." />
  <meta property="og:image" content="https://maxbyteplacementacademy.in/assets/logo.png" />
  <meta property="og:url" content="https://maxbyteplacementacademy.in" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="MaxByte Placement Academy - Coaching & Digital Training" />
  <meta name="twitter:description" content="Join our school coaching and digital hub in Faridabad. Practical education for students and professionals." />
  <meta name="twitter:image" content="https://maxbyteplacementacademy.in/assets/logo.png" />

  <link rel="canonical" href="https://maxbyteplacementacademy.in" />
  <link rel="preload" href="/assets/logo.png" as="image" />

  {/* Schema.org - Main Academy */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "MaxByte Placement Academy",
      "url": "https://maxbyteplacementacademy.in",
      "logo": "https://maxbyteplacementacademy.in/assets/logo.png",
      "description": "IT education, student coaching (5th–10th), and digital marketing training in Faridabad.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+917545840365",
        "contactType": "Customer Service",
        "email": "maxbyteplacementacademy@gmail.com",
        "areaServed": "India"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Faridabad",
        "addressRegion": "Haryana",
        "addressCountry": "India"
      }
    })}
  </script>

  {/* Schema - MaxByte Coaching Institute */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "MaxByte Coaching Institute",
      "url": "https://maxbytecoachinginstitute.maxbyteplacementacademy.in",
      "description": "Best coaching institute for classes 5 to 10 in Faridabad with expert faculty and proven results.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Faridabad",
        "addressRegion": "Haryana",
        "addressCountry": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+917545840365",
        "contactType": "Customer Service"
      }
    })}
  </script>

  {/* Schema - MaxByte Digital Hub */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MaxByte Digital Hub",
      "url": "https://maxbyteplacementacademy.in",
      "description": "Faridabad’s leading digital marketing training institute offering SEO, Google Ads, social media, and freelancing skills.",
      "sameAs": [
        "https://www.facebook.com/maxbyteplacementacademy",
        "https://www.instagram.com/maxbyteplacementacademy"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+917545840365",
        "contactType": "Customer Service"
      }
    })}
  </script>
</Head>

      <header className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-1' : 'bg-white/95 py-2'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo with Link to Home */}
            <Link href="/" passHref legacyBehavior>
              <a className="flex items-center" aria-label="MaxByte Placement Academy Home">
                <Image 
                  src="/assets/logo.png" 
                  alt="MaxByte Placement Academy Logo" 
                  className="h-16 md:h-20 w-auto transition-all duration-300 hover:opacity-90"
                  width={120}
                  height={80}
                  loading="eager"
                />
                <span className="sr-only">MaxByte Placement Academy</span>
              </a>
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label="Main navigation" className="hidden md:flex items-center space-x-6">
              <Link href="/about" passHref legacyBehavior>
                <a className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group">
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </Link>
              <Link href="https://maxbytecoachinginstitute.maxbyteplacementacademy.in/" passHref legacyBehavior>
                <a className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group">
                  Maxbyte Coaching Intitute
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </Link>
              <Link href="" passHref legacyBehavior>
                <a className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group">
                  Maxbyte Digital Hub
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </Link>
              
              <button 
                onClick={() => openModal('Contact Us', 'Feel free to reach us via phone, WhatsApp, or email.')}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group"
                aria-label="Contact Us"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Student Portal Link */}
              <a
                href="https://app.maxbyteplacementacademy.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group"
                aria-label="Student Portal - Opens in new tab"
              >
                <FaUserGraduate className="mr-2" aria-hidden="true" />
                Student Portal
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" aria-hidden="true" />
              ) : (
                <FaBars className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div 
            id="mobile-menu"
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? 'max-h-64 py-4' : 'max-h-0 py-0'
            }`}
            aria-hidden={!isMobileMenuOpen}
          >
            <nav aria-label="Mobile navigation" className="flex flex-col space-y-4 px-4">
              <Link href="/about" passHref legacyBehavior>
                <a className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 py-2">
                  About Us
                </a>
              </Link>
               <Link href="https://maxbytecoachinginstitute.maxbyteplacementacademy.in/" passHref legacyBehavior>
                <a className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group">
                  Maxbyte Coaching Intitute
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </Link>
              <Link href="" passHref legacyBehavior>
                <a className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group">
                  Maxbyte Digital Hub
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </Link>
              <button 
                onClick={() => {
                  openModal('Contact Us', 'Feel free to reach us via phone, WhatsApp, or email.');
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 text-left py-2"
              >
                Contact Us
              </button>

              {/* Mobile Student Portal Link */}
              <a
                href="https://app.maxbyteplacementacademy.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 py-2"
                aria-label="Student Portal - Opens in new tab"
              >
                <FaUserGraduate className="mr-2" aria-hidden="true" />
                Student Portal
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title={modalContent.title} 
        content={modalContent.content} 
      />
    </>
  );
}

export default NavBar;