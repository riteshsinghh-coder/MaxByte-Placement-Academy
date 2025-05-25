import { BsFacebook, BsInstagram, BsArrowUpRight } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import React from 'react';
import Head from 'next/head';

const Footer = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  // Social media URLs
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61558540708282",
      icon: <BsFacebook className="text-xl" />,
      ariaLabel: "Visit our Facebook page"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/maxbyteplacementacademy",
      icon: <BsInstagram className="text-xl" />,
      ariaLabel: "Visit our Instagram profile"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/7545840365",
      icon: <FaWhatsapp className="text-xl" />,
      ariaLabel: "Contact us on WhatsApp"
    }
  ];

  // Footer links data
  // "Policies" is now a standard section within this array
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", url: "/about" },
        { name: "Courses", url: "/courses" },
        { name: "Placements", url: "/placements" },
        { name: "Contact", url: "/contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", url: "/terms" },
        { name: "Privacy Policy", url: "/privacy" },
        { name: "Cookie Policy", url: "/cookies" },
        { name: "Refund Policy", url: "/refund" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", url: "/blog" },
        { name: "FAQs", url: "/faqs" },
        { name: "Testimonials", url: "/testimonials" },
        { name: "Support", url: "/support" }
      ]
    },
    // NEW SECTION: Policies as a standard link column
    {
      title: "Policies",
      links: [
        { name: "Terms & Conditions", url: "/terms" },
        { name: "Privacy Policy", url: "/privacy" },
        { name: "Cookie Policy", url: "/cookies" },
        // If there were other policies, they would go here
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    scale: 0.95
  };

  return (
    <>
      <Head>
        <link rel="canonical" href="https://maxbyteplacementacademy.com" />
        <meta name="author" content="MaxByte Placement Academy" />
        <meta name="description" content="MaxByte Placement Academy - Top learning experiences that create more talent in the world. Explore our courses and placement opportunities." />
      </Head>

      <footer className="bg-[#101828] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            // IMPORTANT CHANGE: Grid columns adjusted to get all 5 items in one row on large screens
            // Mobile: 1 column
            // Medium (md): 2 columns (Logo/newsletter spans 2, then others flow into 2 columns)
            // Large (lg) and up: 5 columns (1 for logo, 4 for link sections)
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12"
          >
            {/* Logo, Description, and Newsletter Subscription */}
            {/* On md: takes full width (2 columns).
                On lg: takes 1 column. This is crucial for the 5-column layout. */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 lg:col-span-1 flex flex-col gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex justify-center md:justify-start"
              >
                <img
                  src="/assets/logo.png"
                  alt="MaxByte Placement Academy Logo"
                  className="w-40 h-auto"
                  width={160}
                  height={96}
                  loading="lazy"
                />
              </motion.div>
              <p className="text-gray-300 leading-relaxed text-center md:text-left">
                Top learning experiences that create more talent in the world.
              </p>

              {/* Newsletter Subscription */}
              <div className="mt-4">
                <h3 className="font-medium mb-2 text-center md:text-left">Subscribe to our newsletter</h3>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-gray-800 text-white px-4 py-2 rounded-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                    aria-label="Email for newsletter subscription"
                  />
                  <motion.button
                    whileHover={hoverEffect}
                    whileTap={tapEffect}
                    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md sm:rounded-l-none font-medium whitespace-nowrap"
                    aria-label="Subscribe to newsletter"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Footer Links (Company, Legal, Resources, AND NOW Policies) */}
            {/* Each of these sections will naturally take 1 column in a grid.
                On md: the layout will wrap to 2 columns after the logo, then the 3 link groups and Policies will distribute.
                On lg: each will take 1 of the 5 columns. */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col gap-4" // Each takes 1 grid column naturally
              >
                <h3 className="text-lg font-semibold text-center md:text-left">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-center md:text-left"
                    >
                      <a
                        href={link.url}
                        className="text-gray-300 hover:text-white flex items-center justify-center md:justify-start gap-1 transition-colors group"
                        aria-label={link.name}
                      >
                        {link.name}
                        {/* Only show arrow for external/non-policy links if desired, otherwise remove */}
                        {/* <BsArrowUpRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" /> */}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* The separate Policies section is now REMOVED as it's integrated above */}
            {/* If you specifically want to render the policies with a bullet point and description,
                you would need a different structure within the 'link' object for 'Policies'
                and a conditional render in the map function. */}

          </motion.div>

          {/* Bottom Bar - Stack on mobile, row on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-gray-400 text-sm md:text-base text-center md:text-left">
              © {currentYear} MaxByte Placement Academy. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label={social.ariaLabel}
                  whileHover={{
                    y: -3,
                    color: "#8B5CF6", // Tailwind purple-400 equivalent for a nicer hover effect
                    transition: { duration: 0.2 }
                  }}
                  whileTap={tapEffect}
                  className="text-gray-400 hover:text-purple-400 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;