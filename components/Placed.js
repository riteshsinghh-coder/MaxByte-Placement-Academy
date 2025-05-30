import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

const Placed = () => {
  const students = [
    {
      img: "/assets/Rewati-Raman.jpg",
      title: "Rewati Raman",
      company: "Hashnode",
      logoUrl: "https://www.svgrepo.com/show/353856/hashnode.svg",
    },
    {
      img: "/assets/Ayush.jpg",
      title: "Aayush Mall",
      company: "Acko Insurance",
      logoUrl: "https://www.acko.com/wp-content/uploads/2019/03/acko-logo-knowledge-panel.png",
    },
    {
      img: "/assets/Navneet.jpg",
      title: "Navneet Mall",
      company: "Medium",
      logoUrl: "https://miro.medium.com/v2/resize:fit:1400/0*ok6yuDnTx4o2PSFx.png"
    },
    {
      img: "/assets/Akash.jpg",
      title: "Akash Singh",
      company: "Rentomojo",
      logoUrl: "https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL3JlbnRvbW9qby5qcGc.png"
    },
    {
      img: "/assets/sahil.jpg",
      title: "Sahil Aggarwal",
      company: "BrowserStack",
      logoUrl: "https://www.browserstack.com/images/layout/browserstack-logo-600x315.png"
    },
    {
      img: "/assets/sahib.jpg",
      title: "Sahib Singh",
      company: "Success Insights",
      logoUrl: "https://successinsightsindia.com/wp-content/uploads/2023/10/1661492943731-og_image.png"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <Head>
        <title>Our Placed Students | MaxByte Placement Academy | Best Computer Center </title>
        <meta 
          name="description" 
          content="See our successfully placed students and their achievements at MaxByte Placement Academy" 
        />
      </Head>

      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our Success Stories
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our students who have successfully placed in top companies
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {students.map((student, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-6 flex flex-col items-center">
                <div className="relative mb-6 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <img 
                    className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md group-hover:border-purple-200 transition-all duration-300"
                    src={student.img} 
                    alt={`${student.title} - Placed at ${student.company}`}
                    width={160}
                    height={160}
                    loading={index < 4 ? "eager" : "lazy"}
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">
                  {student.title}
                </h3>
                <p className="text-gray-500 mb-4 text-center">
                  Placed at
                </p>
                
                <div className="flex items-center justify-center bg-gray-50 p-3 rounded-lg w-full">
                  <img 
                    src={student.logoUrl} 
                    alt={`${student.company} logo`}
                    className="h-10 max-w-full object-contain"
                    loading="lazy"
                  />
                  <span className="sr-only">{student.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View More Success Stories
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default Placed;