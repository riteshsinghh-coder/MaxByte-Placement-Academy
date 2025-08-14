import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image"; // Added Next.js Image import

const CourseDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false); // Added for hydration fix

  useEffect(() => {
    setMounted(true);
    const fetchCourseDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulate API call with timeout for demo purposes
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data - replace with your actual API call
        const mockCourse = {
          id,
          title: `Advanced ${id?.toUpperCase()} Programming`,
          description: `Master ${id?.toUpperCase()} with this comprehensive course covering all advanced concepts and practical applications.`,
          instructor: "Dr. Sarah Johnson",
          price: "$199.99",
          duration: "8 weeks",
          rating: 4.8,
          students: 1250,
          thumbnail: `https://source.unsplash.com/random/800x400/?${id},coding`,
          syllabus: [
            "Introduction to Advanced Concepts",
            "Deep Dive into Core Principles",
            "Practical Applications",
            "Performance Optimization",
            "Real-world Projects"
          ]
        };
        
        setCourse(mockCourse);
      } catch (error) {
        console.error(error);
        setError("Failed to load course details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCourseDetails();
    }
  }, [id]);

  if (!mounted) {
    return null; // Return null during SSR to prevent hydration mismatch
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </motion.div>
    );
  }

  if (!course) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{course.title} | Learn {course.title.split(' ')[0]} Online</title>
        <meta name="description" content={course.description} />
        <meta property="og:title" content={course.title} />
        <meta property="og:description" content={course.description} />
        <meta property="og:image" content={course.thumbnail} />
        <meta name="keywords" content={`${id}, programming, course, online learning, coding`} />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-50"
      >
        <div className="container mx-auto px-4 py-12">
          {/* Course Header */}
          <motion.div 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <motion.h1 
              whileHover={{ scale: 1.01 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              {course.title}
            </motion.h1>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-6"
            />
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Course Content */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="lg:w-2/3"
            >
              <motion.div 
                whileHover={{ scale: 1.005 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
              >
                <div className="w-full h-64 relative"> {/* Changed to Next.js Image */}
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                </div>
                <div className="p-6">
                  <motion.p 
                    whileHover={{ color: "#4F46E5" }}
                    className="text-gray-700 text-lg mb-6"
                  >
                    {course.description}
                  </motion.p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center bg-blue-50 px-4 py-2 rounded-full"
                    >
                      <span className="text-blue-600 font-medium">⭐ {course.rating}</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center bg-green-50 px-4 py-2 rounded-full"
                    >
                      <span className="text-green-600 font-medium">👥 {course.students} students</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Syllabus Section */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg p-6 mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Syllabus</h2>
                <ul className="space-y-3">
                  {course.syllabus.map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ x: 5 }}
                      className="flex items-start"
                    >
                      <span className="text-blue-500 mr-2">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="lg:w-1/3"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
                <motion.div 
                  whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="border border-gray-200 rounded-lg p-4 mb-6"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Course Details</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Instructor:</span>
                      <span className="font-medium">{course.instructor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price:</span>
                      <motion.span 
                        whileHover={{ scale: 1.1 }}
                        className="font-bold text-blue-600"
                      >
                        {course.price}
                      </motion.span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                  </div>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 4px 14px rgba(79, 70, 229, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-bold text-lg shadow-md"
                >
                  Enroll Now
                </motion.button>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 text-center"
                >
                  <p className="text-gray-500 text-sm">30-day money-back guarantee</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CourseDetails;