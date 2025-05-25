import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
// FaQuoteLeft is not in your image, so removing it from import and usage if you want exact match.
// If you'd like to add it back for better design, let me know.
// import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  // Testimonial data - ensured only one review
  const testimonials = [
    {
      id: 1,
      quote: "Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher.",
      name: "Rewati Raman",
      role: "Chandigarh University",
      avatar: "/assets/Rewati Raman.jpg" // Ensure this path is correct
    }
  ];

  // Animation variants for the overall title/section
  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 10,
        duration: 0.8
      }
    }
  };

  // Animation variants for the testimonial card
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 150, // A bit more snappy
        damping: 15,
        delay: 0.4 // Delay after title appears
      }
    }
  };

  return (
    <>
      <Head>
        <title>Student Testimonials | Learning Platform</title>
        <meta
          name="description"
          content="Hear from our students about their learning experiences and how our courses helped them achieve their career goals."
        />
      </Head>

      {/* Main section: bg-white for the light background, min-h-screen to ensure it takes full height */}
      <section className="bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto max-w-7xl">
          {/* Section title - Centered as in the image */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={sectionHeaderVariants}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-900" // Dark text
          >
            What Our Students Say
            {/* Subtitle is not in the image, so I'm removing it for exact match.
                If you want it back, uncomment the span below. */}
            {/* <span className="block text-lg md:text-xl font-medium text-gray-600 mt-3 max-w-2xl mx-auto">
              Hear directly from those who built their successful careers with us.
            </span> */}
          </motion.h2>

          {/* Testimonial card container - Centered horizontally */}
          <motion.div
            className="flex justify-center" // This centers the grid item (which is just one card)
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }} // Trigger when half of card is in view
                whileHover={{ y: -5 }} // Subtle lift on hover, matching your original code
                className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-100 max-w-sm w-full" // Added max-w-sm for card width, shadow-lg for more depth
              >
                {/* Quote icon - Not present in your image, so removing.
                    If you want it back, you'd need to import FaQuoteLeft and uncomment this div. */}
                {/* <div className="text-purple-500 text-4xl mb-4">
                  <FaQuoteLeft />
                </div> */}

                {/* Testimonial text */}
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>

                {/* Author info */}
                <div className="flex items-center">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-purple-200" // Keep border as it was in your original code
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dots indicator - Not present in your image, so removed. */}
          {/* <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center mt-12 space-x-2"
          >
            {[1, 2, 3].map((dot) => (
              <button
                key={dot}
                aria-label={`Testimonial ${dot}`}
                className="w-3 h-3 rounded-full bg-gray-300 hover:bg-purple-600 transition-colors focus:outline-none"
              />
            ))}
          </motion.div> */}
        </div>
      </section>
    </>
  );
};

export default Testimonials;