import React from "react";
import { useRouter } from "next/router";
import { HiOutlineArrowUpRight, HiOutlineStar, HiOutlineUsers, HiOutlineEye, HiOutlineFire } from "react-icons/hi2";
import { motion } from "framer-motion";
import Head from "next/head";

const PopularClass = () => {
  const router = useRouter();

  const handleClassClick = (id) => {
    router.push(`/course/${id}`);
  };

  const courses = [
    {
      id: 1,
      img: "/assets/Basic.jpg",
      title: "Basic Programming",
      sub: "Master foundational programming concepts with hands-on exercises and real-world examples. Perfect for beginners starting their coding journey.",
      view: "5.6K", // Changed to K for brevity
      enrolled: "200",
      price: "₹6,000",
      originalPrice: "₹8,000",
      rating: "4.5",
      duration: "3 months",
      tags: ["Beginner", "Certification", "Placement Support"],
      bgColor: "from-purple-500 to-indigo-500",
      isNew: true // Added for 'New' badge
    },
    {
      id: 2,
      img: "/assets/Placement.jpg",
      title: "Placement Program",
      sub: "Comprehensive training including technical interviews, resume building, mock interviews, and 100+ company partnerships for guaranteed placements.",
      view: "896",
      enrolled: "341",
      price: "₹20,000",
      originalPrice: "₹30,000",
      rating: "4.8",
      duration: "10 months",
      tags: ["Guaranteed Internship", "Mock Interviews", "Resume Building"],
      bgColor: "from-blue-500 to-cyan-500",
      isNew: true // Added for 'New' badge
    },
    {
      id: 3,
      img: "/assets/webdevelopment.jpg",
      title: "Full Stack Development",
      sub: "Master both frontend and backend development with modern frameworks like React, Node.js, and MongoDB. Build 5+ real-world projects for your portfolio.",
      view: "1.2K", // Changed to K for brevity
      enrolled: "712",
      price: "₹30,000",
      originalPrice: "₹40,000",
      rating: "5.0", // Changed to 5.0 for consistency
      duration: "12 Months",
      tags: ["React", "Node.js", "MongoDB"],
      bgColor: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      img: "/assets/images.jpeg",
      title: "Digital Marketing",
      sub: "Learn SEO, social media marketing, Google Ads, and analytics tools. Includes certification and hands-on campaign management experience.",
      view: "2.3K", // Changed to K for brevity
      enrolled: "489",
      price: "₹15,000",
      originalPrice: "₹20,000",
      rating: "4.7",
      duration: "6 months",
      tags: ["SEO", "Google Ads", "Certification"],
      bgColor: "from-red-500 to-pink-500"
    },
    {
      id: 5,
      img: "assets/Accounts-Tally-ERP-9-Course-in-Khanna.jpg",
      title: "Accounts & Tally",
      sub: "Master financial accounting with Tally Prime, GST implementation, and financial reporting. Includes practical training on real business scenarios.",
      view: "1.7K", // Changed to K for brevity
      enrolled: "326",
      price: "₹12,000",
      originalPrice: "₹20,000",
      rating: "4.6",
      duration: "6 months",
      tags: ["Tally Prime", "GST", "Accounting"],
      bgColor: "from-amber-500 to-yellow-500"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] // More natural ease
      } 
    },
    hover: { 
      y: -8, // Slightly more pronounced lift
      boxShadow: "0 15px 30px -8px rgba(0, 0, 0, 0.15)", // Stronger, softer shadow
      transition: { duration: 0.2 }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 }, // Added slight y-offset for fade in
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Head>
        <title>Popular Courses | MaxByte Placement Academy</title>
        <meta 
          name="description" 
          content="Explore our most popular courses in programming, web development, digital marketing, accounts, and cloud computing with placement support." 
        />
        <meta 
          name="keywords" 
          content="programming courses, web development, digital marketing, tally course, cloud computing, placement preparation, coding bootcamp" 
        />
        <meta property="og:title" content="Popular Career Courses | MaxByte Placement Academy" />
        <meta property="og:description" content="Industry-relevant courses with placement support and certification." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 relative overflow-hidden">
        {/* Decorative background gradients - adjusted for more subtle effect */}
        <div className="absolute inset-0 z-0 opacity-10">
            <div className="w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob absolute top-0 left-0"></div>
            <div className="w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 absolute bottom-0 right-0"></div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          className="text-center mb-12 md:mb-16 lg:mb-20 relative z-10"
        >
          <motion.p 
            className="inline-block text-sm md:text-base text-purple-700 font-semibold mb-2 px-4 py-1.5 rounded-full bg-purple-100 shadow-sm" // Stronger purple, slight shadow
            variants={fadeIn}
          >
            Boost Your Career
          </motion.p>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight" // Font-extrabold, tracking-tight
            variants={fadeIn}
          >
            Our <span className="bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">Top-Rated Courses</span>
          </motion.h1>
          <motion.p 
            className="text-gray-600 text-base md:text-lg max-w-3xl md:max-w-4xl mx-auto leading-relaxed"
            variants={fadeIn}
          >
            Dive into **industry-relevant programs** crafted by experts, designed to equip you with in-demand skills, **guaranteed placement support**, and valuable certification.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 relative z-10" // Increased gap
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={item}
              whileHover="hover"
              className="bg-white rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer group relative transform-gpu" // Stronger shadow, transform-gpu for smooth animation
              onClick={() => handleClassClick(course.id)}
              role="button"
              tabIndex={0}
              aria-label={`View ${course.title} course`}
              onKeyDown={(e) => e.key === 'Enter' && handleClassClick(course.id)}
            >
              {/* Discount Badge */}
              {course.originalPrice && (
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${course.bgColor} text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md`}>
                  {Math.round((1 - parseFloat(course.price.replace(/[^0-9]/g, '') / parseFloat(course.originalPrice.replace(/[^0-9]/g, ''))) ) * 100)}% OFF
                </div>
              )}
              {/* New Badge */}
              {course.isNew && (
                <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md flex items-center">
                    <HiOutlineFire className="mr-1" size={14} /> NEW
                </div>
              )}

              {/* Course Image */}
              <div className="relative overflow-hidden h-44 sm:h-48 md:h-52 lg:h-56"> {/* Increased image height */}
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" // Stronger zoom on hover
                  src={course.img} 
                  alt={course.title}
                  loading="lazy"
                  width={600} // Increased width/height for better quality
                  height={350}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"> {/* Darker overlay, increased padding */}
                  <span className="text-white font-semibold text-sm sm:text-base bg-purple-600 px-3 py-1.5 rounded-full shadow-lg"> {/* Stronger text, shadow */}
                    {course.duration} • {course.enrolled} Enrolled
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-5 sm:p-6 md:p-7"> {/* Increased padding */}
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors line-clamp-2"> {/* Stronger text, bigger title */}
                    {course.title}
                  </h3>
                  <HiOutlineArrowUpRight className="text-gray-400 group-hover:text-purple-600 mt-1 transition-colors flex-shrink-0" size={20} /> {/* Slightly bigger icon */}
                </div>

                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5 line-clamp-3"> {/* Increased line-clamp */}
                  {course.sub}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-5"> {/* Increased gap */}
                  {course.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs sm:text-sm px-2.5 py-1.5 bg-gray-100 text-gray-700 rounded-lg font-medium" // Rounded-lg, font-medium
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Rating and Views */}
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="flex items-center bg-purple-50 px-2.5 py-1.5 rounded-lg shadow-sm"> {/* Rounded-lg, shadow */}
                    <HiOutlineStar className="text-yellow-500 mr-1.5" size={18} /> {/* Stronger yellow, slightly bigger icon */}
                    <span className="text-purple-700 font-semibold text-sm">{course.rating}</span> {/* Stronger text */}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm"> {/* Consistent text size */}
                    <HiOutlineEye className="mr-1.5" size={16} />
                    <span>{course.view} views</span>
                  </div>
                </div>

                {/* Price and Enrollments */}
                <div className="flex justify-between items-center pt-4 sm:pt-5 border-t border-gray-100"> {/* Increased padding */}
                  <div className="flex items-center text-sm text-gray-600">
                    <HiOutlineUsers className="mr-1.5 text-purple-600" size={18} />
                    <span className="font-semibold text-gray-800">{course.enrolled}</span>
                    <span className="ml-1">students</span>
                  </div>
                  <div className="text-right">
                    {course.originalPrice && (
                      <del className="text-gray-400 text-sm block -mb-0.5">
                        {course.originalPrice}
                      </del>
                    )}
                    <p className="text-xl sm:text-2xl font-extrabold text-purple-700"> {/* Bigger, bolder price */}
                      {course.price}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      
      </section>
    </>
  );
};

export default PopularClass;