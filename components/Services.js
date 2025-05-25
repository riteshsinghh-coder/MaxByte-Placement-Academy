import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { useRouter } from "next/router"
import Head from 'next/head'
import { motion } from 'framer-motion'

const Services = () => {
    const router = useRouter()
    
    const handleServiceClick = (id) => {
        router.push(`/course/${id}`)
    }

    const services = [
        {
            id: 1,
            img: '/assets/ux.svg',
            title: 'Basic Computer and AI',
            sub: 'Learn essential computer skills, AI tools, and smart productivity techniques. Ideal for beginners stepping into the digital world.',
            category: 'Computer Basics',
            duration: '8 weeks',
            bgColor: 'from-purple-500 to-indigo-500'
        },
        {
            id: 2,
            img: '/assets/web.svg',
            title: 'Placement Program',
            sub: 'Get job-ready with resume building, mock interviews, and direct company connections.',
            category: 'Career',
            duration: '12 weeks',
            bgColor: 'from-blue-500 to-cyan-500'
        },
        {
            id: 3,
            img: '/assets/web-development.svg',
            title: 'Full Stack Web Development',
            sub: 'Build responsive websites with React, Node.js, and MongoDB. Includes real-world projects for your portfolio.',
            category: 'Development',
            duration: '6 weeks',
            bgColor: 'from-green-500 to-emerald-500'
        },
        {
            id: 4,
            img: '/assets/market.svg',
            title: 'Digital Marketing Certification',
            sub: 'Learn SEO, social media marketing, and Google Analytics from industry experts.',
            category: 'Marketing',
            duration: '10 weeks',
            bgColor: 'from-red-500 to-pink-500'
        },
        { 
            id: 5,
            img: '/assets/accounting-calculate-calculation.svg',
            title: 'Financial Accounting with Tally',
            sub: 'Comprehensive training in accounting principles and Tally ERP 9 software.',
            category: 'Finance',
            duration: '8 weeks',
            bgColor: 'from-amber-500 to-yellow-500'
        },
        {
            id: 6,
            img: '/assets/CloudFormation.svg',
            title: 'Cloud Engineering with AWS',
            sub: 'Deploy and manage applications on AWS cloud infrastructure. Includes certification prep.',
            category: 'Cloud',
            duration: '10 weeks',
            bgColor: 'from-sky-500 to-blue-400'
        },
        {
            id: 7,
            img: '/assets/images.jpeg',
            title: 'AI & Machine Learning Bootcamp',
            sub: 'Hands-on training in Python, TensorFlow, and neural networks for real-world applications.',
            category: 'Data Science',
            duration: '14 weeks',
            bgColor: 'from-violet-500 to-fuchsia-500'
        }
    ]

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                type: "spring",
                stiffness: 80,
                damping: 15
            } 
        }
    }

    return (
        <>
            <Head>
                <title>Our Courses | Professional Training Programs for Career Growth</title>
                <meta 
                    name="description" 
                    content="Industry-relevant courses in Web Development, Digital Marketing, Cloud Computing, AI/ML and more. Transform your career with hands-on training." 
                />
                <meta 
                    name="keywords" 
                    content="professional courses, web development bootcamp, digital marketing training, cloud computing certification, AI ML course, career placement program"
                />
                <meta property="og:title" content="Premium Career-Focused Courses | Learn In-Demand Skills" />
                <meta property="og:description" content="Join our practical training programs designed by industry experts to bridge the skills gap." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20'>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='text-center mb-12 md:mb-16'
                >
                    <motion.p 
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className='inline-block text-sm md:text-lg text-purple-600 font-medium mb-3 px-4 py-1 rounded-full bg-purple-50'
                    >
                        Our Courses
                    </motion.p>
                    <motion.h1 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-5 leading-snug md:leading-tight'
                    >
                        <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                            Career-Focused
                        </span> <br className="hidden sm:block" />
                        Learning Programs
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className='text-base md:text-lg text-gray-600 max-w-3xl md:max-w-4xl mx-auto leading-relaxed'
                    >
                        Practical, project-based training designed in collaboration with industry leaders to help you land your dream job.
                    </motion.p>
                </motion.div>

                <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
                >
                    {services.map((service) => (
                        <motion.div 
                            variants={item}
                            whileHover={{ 
                                y: -5,
                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                            }}
                            key={service.id}
                            onClick={() => handleServiceClick(service.id)}
                            className={`relative px-5 py-6 md:px-6 md:py-8 rounded-xl md:rounded-2xl bg-white group border border-gray-200 
                            shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out overflow-hidden 
                            cursor-pointer h-full flex flex-col hover:bg-gradient-to-br ${service.bgColor}`}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && handleServiceClick(service.id)}
                            aria-label={`Explore ${service.title} course`}
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                            
                            <div className="flex flex-col h-full">
                                <div className="flex gap-3 md:gap-4 items-start mb-4 md:mb-5">
                                    <div className={`p-2 md:p-3 bg-purple-50 group-hover:bg-white rounded-lg md:rounded-xl transition-all duration-300 group-hover:scale-110`}>
                                        <img 
                                            src={service.img} 
                                            alt={service.title} 
                                            className='w-8 h-8 md:w-10 md:h-10 object-contain' 
                                            loading="lazy"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    <div>
                                        <span className={`text-xs font-semibold text-${service.bgColor.split(' ')[0].replace('from-', '')} bg-${service.bgColor.split(' ')[0].replace('from-', '')}/10 px-2 py-1 rounded-full`}>
                                            {service.category}
                                        </span>
                                        <h2 className='text-lg md:text-xl font-bold text-gray-800 group-hover:text-white mt-1 md:mt-2 transition-colors duration-300 line-clamp-2'>
                                            {service.title}
                                        </h2>
                                    </div>
                                </div>
                                
                                <p className='text-sm md:text-base text-gray-600 group-hover:text-white/90 mb-4 md:mb-6 transition-colors duration-300 flex-grow'>
                                    {service.sub}
                                </p>
                                
                                <div className='flex justify-between items-center mt-auto'>
                                    <span className={`text-xs md:text-sm text-gray-500 group-hover:text-white/80`}>
                                        {service.duration}
                                    </span>
                                    <div className={`flex gap-1 md:gap-2 items-center text-purple-600 group-hover:text-white font-medium transition-colors duration-300`}>
                                        <span className="text-sm md:text-base">Explore</span>
                                        <IoIosArrowForward className='group-hover:translate-x-1 transition-transform duration-200' />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Animated background elements */}
                            <div className={`absolute -bottom-12 -right-12 w-24 h-24 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            <div className={`absolute -top-6 -left-6 w-16 h-16 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                        </motion.div>
                    ))}
                </motion.div>

              
            </div>
        </>
    )
}

export default Services