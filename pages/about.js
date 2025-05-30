import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const whatsappGroupLink = 'https://chat.whatsapp.com/JeKWQKQFZc5GbbPOE4oS9k';

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15, duration: 0.8 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12, duration: 0.6 }
    }
  };

  return (
    <>
      <Helmet>
        <title>About Us - MaxByte Placement Academy</title>
        <meta name="description" content="Learn about MaxByte Placement Academy — your trusted partner for IT education, placement, and career success. Join us to transform your future." />
        <meta name="keywords" content="MaxByte, IT Training, Placement, Tech Academy, Web Development, Career Growth, Learn Programming, India IT Academy" />
        <meta name="author" content="MaxByte Placement Academy" />
        <meta property="og:title" content="About MaxByte Placement Academy" />
        <meta property="og:description" content="Discover how MaxByte empowers students and professionals in tech. Learn about our mission, vision, and dedication to nation-building." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.maxbyteplacementacademy.in/about" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.maxbyteplacementacademy.in/about" />
      </Helmet>

      <NavBar />

      <main className="pt-16 bg-[#0a0a0a] text-gray-100 min-h-screen">
        {/* Hero Section */}
        <motion.section
          className="relative py-20 px-4 text-center bg-gradient-to-r from-purple-800 to-indigo-900 overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
        >
          <div className="absolute inset-0 bg-pattern-light opacity-10"></div>

          <div className="relative z-10 container mx-auto max-w-4xl">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-white drop-shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Empowering Your Future in Tech
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl mb-8 text-purple-200"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Welcome to MaxByte Placement Academy. Your journey to a successful IT career starts here.
            </motion.p>
            <motion.a 
              href={whatsappGroupLink} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-block bg-white text-purple-700 hover:bg-purple-100 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5, type: 'spring', stiffness: 200 }}
            >
              Join Our Community on WhatsApp
            </motion.a>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          className="container mx-auto px-4 py-16 max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold mb-6 text-purple-500 text-center md:text-left">About MaxByte Placement Academy</h2>
          <p className="text-lg leading-relaxed mb-4 text-gray-300">
            MaxByte Placement Academy is a leading institution dedicated to providing comprehensive IT education and career placement services. Our academy was founded with the vision of bridging the gap between education and industry, empowering individuals with the skills and knowledge needed to thrive in the fast-paced world of technology.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            We are committed to fostering a dynamic learning environment where innovation, collaboration, and excellence are not just encouraged, but are the core tenets of our approach.
          </p>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          className="bg-[#1a1a2a] py-16 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6 text-purple-500">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              At MaxByte, our mission is to empower students and professionals with industry-relevant skills and experiences that enable them to excel in their careers. We aim to produce highly competent individuals ready to make significant contributions to the global tech landscape.
            </p>
          </div>
        </motion.section>

        {/* Vision, Join Us, Serving the Nation Section */}
        <motion.section
          className="container mx-auto px-4 py-16 max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold mb-12 text-purple-500 text-center">Why MaxByte?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Join Us */}
            <motion.div variants={itemVariants} className="bg-[#1a1a2a] rounded-lg p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-purple-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Why Join Us?</h3>
              <p className="text-gray-300 leading-relaxed">
                With our expert faculty, comprehensive courses, and dedicated placement assistance, MaxByte provides the support you need to achieve your tech career goals.
              </p>
            </motion.div>
            {/* Vision */}
            <motion.div variants={itemVariants} className="bg-[#1a1a2a] rounded-lg p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-purple-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the premier IT education and career hub known for excellence, innovation, and student empowerment in the digital era.
              </p>
            </motion.div>
            {/* Nation */}
            <motion.div variants={itemVariants} className="bg-[#1a1a2a] rounded-lg p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-purple-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Serving Our Nation</h3>
              <p className="text-gray-300 leading-relaxed">
                We equip students to contribute to national progress through quality IT education and professional skill-building.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="bg-gradient-to-r from-indigo-900 to-purple-800 py-12 px-4 text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Career?</h2>
            <p className="text-lg text-purple-200 mb-8">
              Join MaxByte Placement Academy today and take the first step toward a successful IT career.
            </p>
            <motion.a 
              href={whatsappGroupLink} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-block bg-white text-purple-700 hover:bg-purple-100 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect with Us Now
            </motion.a>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default AboutPage;
