import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import EnrollmentModal from '../../components/EnrollmentModal';

function Course({ course }) {
  const router = useRouter();
  const { id } = router.query;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleEnroll = (name, phone) => {
    console.log(`Enrolling ${name} with phone number ${phone} to course ${course.title}`);
  };

  if (!course) {
    return (
      <div className="container mx-auto text-center mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  const renderSyllabus = () => {
    if (!course.syllabus) return null;

    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 "
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Course Syllabus
        </h2>
        <div className="space-y-4">
          {course.syllabus.map((section, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.01 }}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full px-4 py-3 bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 text-left flex justify-between items-center transition-all duration-300"
                aria-expanded={expandedSections[index]}
                aria-controls={`section-${index}`}
              >
                <span className="font-medium text-gray-800 flex items-center gap-2">
                  <motion.span 
                    className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center"
                    animate={{ rotate: expandedSections[index] ? 360 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-purple-600 text-sm font-bold">{index + 1}</span>
                  </motion.span>
                  {section.title}
                </span>
                <motion.span
                  animate={{ rotate: expandedSections[index] ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>
              {expandedSections[index] && (
                <motion.div
                  id={`section-${index}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 py-3 bg-white"
                >
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {section.items.map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i }}
                        className="hover:text-purple-600 transition-colors duration-200"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <Head>
        <title>{course.title} | MaxByte Placement Academy</title>
        <meta name="description" content={course.description.substring(0, 160)} />
        <meta name="keywords" content={`${course.title}, course, training, ${course.title.toLowerCase()} syllabus, placement program`} />
        <meta property="og:title" content={`${course.title} | MaxByte Placement Academy`} />
        <meta property="og:description" content={course.description.substring(0, 160)} />
      </Head>

      <NavBar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-8 shadow-sm border border-purple-100 mt-10"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <motion.h1 
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {course.title}
                </motion.h1>
                <motion.p 
                  className="text-lg text-gray-700 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {course.description}
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-4 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div 
                    className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 flex items-center gap-2"
                    whileHover={{ y: -3 }}
                  >
                    <span className="text-purple-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <div>
                      <span className="text-gray-600 font-medium">Duration:</span>
                      <span className="ml-2 font-bold text-gray-800">{course.duration}</span>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 flex items-center gap-2"
                    whileHover={{ y: -3 }}
                  >
                    <span className="text-blue-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <div>
                      <span className="text-gray-600 font-medium">Price:</span>
                      <span className="ml-2 font-bold text-gray-800">₹{course.price}</span>
                      {course.discount && (
                        <del className="ml-2 text-gray-400">₹{course.discount}</del>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(124, 58, 237, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Enroll Now
                </motion.button>
              </div>
              
              <motion.div 
                className="hidden md:block w-64 h-64 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <motion.div 
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 6,
                      ease: "easeInOut"
                    }}
                    className="text-center"
                  >
                    <div className="text-4xl mb-2">📊</div>
                    <div className="text-xl font-bold text-gray-700">{course.title}</div>
                  </motion.div>
                  <motion.div 
                    className="absolute top-0 right-0 bg-yellow-100 text-yellow-800 px-2 py-1 text-xs font-bold rounded-bl-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    {course.duration}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {renderSyllabus()}

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-xl shadow-md p-8 border border-gray-200"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Why Choose This Course?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {course.benefits?.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-300 transition-all duration-300"
                >
                  <motion.div 
                    className="p-2 bg-purple-100 rounded-full"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <span className="font-medium text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {course.certification && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg p-8 text-white"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <motion.div 
                  className="flex-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold mb-4">Course Certification</h2>
                  <p className="mb-4 opacity-90">{course.certification.description}</p>
                  <ul className="space-y-2">
                    {course.certification.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div 
                  className="w-full md:w-64 h-64 bg-white bg-opacity-20 rounded-lg border-2 border-white border-opacity-30 flex items-center justify-center backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center p-4">
                    <div className="text-5xl mb-4">🏆</div>
                    <h3 className="font-bold text-lg">Certificate of Completion</h3>
                    <p className="text-sm opacity-80 mt-2">Recognized by industry leaders</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>

        {isModalOpen && (
          <EnrollmentModal
            onClose={() => setIsModalOpen(false)}
            onEnroll={handleEnroll}
            courseId={id}
            courseTitle={course.title}
          />
        )}
      </motion.main>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  const courses = {
    '1': {
      id: '1',
      title: 'Basic',
      description: 'Embark on a transformative journey into the digital realm with our exclusive Basic Course, meticulously designed to equip you with essential skills and knowledge crucial for thriving in todays digital landscape. From mastering Computer Fundamentals to harnessing the power of Microsoft Office Suite and navigating the intricacies of the internet, our comprehensive curriculum ensures you gain fluency in essential applications and digital literacy.',
      duration: '3-4 months',
      price: '6,000',
      discount: '8,000',
      syllabus: [
        {
          title: 'Fundamentals of Computer',
          items: [
            'What is Computer?',
            'Input & Output devices',
            'Hardware components',
            'Software types',
            'Central Processing Unit',
            'RAM and Hard disk',
            'Motherboard',
            'A-Z shortcut keys'
          ]
        },
        {
          title: 'Windows Operating System',
          items: [
            'Windows basics',
            'File management',
            'System settings',
            'User accounts',
            'Task manager'
          ]
        },
        {
          title: 'MS-Word',
          items: [
            'Formatting tools',
            'Tables and templates',
            'Mail merge',
            'Headers and footers',
            'Page layout',
            'References and citations'
          ]
        },
        {
          title: 'MS-Excel',
          items: [
            'Basic formulas',
            'Conditional formatting',
            'Pivot tables',
            'Data validation',
            'Advanced functions (VLOOKUP, HLOOKUP)',
            'Financial calculations'
          ]
        },
        {
          title: 'MS-PowerPoint',
          items: [
            'Slide creation',
            'Animations',
            'Transitions',
            'Presentation design',
            'Speaker notes'
          ]
        },
        {
          title: 'Additional Tools',
          items: [
            'Internet basics',
            'Google Suite (Sheets, Forms)',
            'Email (Gmail, Outlook)',
            'AI tools introduction (ChatGPT, Gemini, etc)'
          ]
        }
      ],
      benefits: [
        "Industry-relevant curriculum",
        "Hands-on projects",
        "Expert instructors",
        "Placement assistance",
        "Flexible learning options",
        "Certification upon completion"
      ]
    },
    '2': {
      id: '2',
      title: 'Placement Program',
      description: 'Our Placement Program is meticulously crafted to empower students with the essential skills and knowledge needed to thrive in the competitive job market. Through an extensive curriculum, participants undergo rigorous training in programming languages such as C++, Java, and Python, alongside mastering object-oriented programming principles and database management systems like MySQL.',
      duration: '6 months',
      price: '15,000',
      discount: '40,000',
      syllabus: [
        {
          title: 'Programming with C++',
          items: [
            'Flowchart and algorithms',
            'Variables and data types',
            'Control structures',
            'Functions and arrays',
            'Pointers and memory management',
            'Object-oriented concepts',
            'File handling'
          ]
        },
        {
          title: 'Object-Oriented Programming in Java',
          items: [
            'Classes and objects',
            'Inheritance and polymorphism',
            'Encapsulation and abstraction',
            'Constructors and destructors',
            'Exception handling',
            'Collections framework'
          ]
        },
        {
          title: 'DBMS & SQL',
          items: [
            'Database fundamentals',
            'ER diagrams',
            'Normalization',
            'SQL queries',
            'Joins and subqueries',
            'Transactions and ACID properties',
            'Indexing and optimization'
          ]
        },
        {
          title: 'Computer Networks',
          items: [
            'Network topologies',
            'OSI and TCP/IP models',
            'HTTP/HTTPS protocols',
            'DNS working',
            'Firewalls and security',
            'IP addressing'
          ]
        },
        {
          title: 'Operating Systems',
          items: [
            'Process scheduling',
            'Thread management',
            'Deadlocks',
            'Memory management',
            'Page replacement',
            'Disk scheduling'
          ]
        },
        {
          title: 'Data Structures & Algorithms',
          items: [
            'Arrays and linked lists',
            'Stacks and queues',
            'Trees and graphs',
            'Sorting algorithms',
            'Searching algorithms',
            'Dynamic programming'
          ]
        }
      ],
      benefits: [
        "Comprehensive technical training",
        "Mock interviews",
        "Resume building",
        "Soft skills development",
        "1000+ placement partners",
        "Guaranteed internship"
      ],
      certification: {
        description: "Upon successful completion, students receive a certification recognized by top IT companies, validating their technical proficiency and readiness for the job market.",
        benefits: [
          "Enhances job prospects",
          "Validates technical skills",
          "Recognized by industry leaders",
          "Includes project portfolio",
          "LinkedIn profile optimization"
        ]
      }
    },
    '3': {
      id: '3',
      title: 'Web Development',
      description: 'Embark on a transformative journey with our cutting-edge web development course, meticulously crafted to empower aspiring developers with a comprehensive skill set that transcends conventional boundaries. Delving deep into the realms of HTML, CSS, and JavaScript, this course lays a robust foundation, paving the way for mastery in frontend and backend technologies.',
      duration: '12 months',
      price: '30,000',
      discount: '50,000',
      syllabus: [
        {
          title: 'Frontend Fundamentals',
          items: [
            'HTML5 and semantic markup',
            'CSS3 and responsive design',
            'Flexbox and Grid layout',
            'JavaScript basics',
            'DOM manipulation',
            'ES6+ features'
          ]
        },
        {
          title: 'Backend Development',
          items: [
            'Node.js fundamentals',
            'Express.js framework',
            'RESTful APIs',
            'Authentication (JWT, OAuth)',
            'MongoDB and databases',
            'WebSockets'
          ]
        },
        {
          title: 'Advanced Concepts',
          items: [
            'React.js framework',
            'State management (Redux)',
            'TypeScript',
            'Next.js framework',
            'Docker and containers',
            'CI/CD pipelines'
          ]
        },
        {
          title: 'Additional Tools',
          items: [
            'Git and GitHub',
            'Postman API testing',
            'Prisma ORM',
            'Tailwind CSS',
            'GraphQL',
            'Open-source contributions'
          ]
        }
      ],
      benefits: [
        "Full-stack development skills",
        "Real-world projects",
        "Portfolio building",
        "Deployment strategies",
        "Performance optimization",
        "Career guidance"
      ],
      certification: {
        description: "Graduates receive a Full-Stack Developer certification showcasing their ability to build modern web applications from frontend to backend.",
        benefits: [
          "Showcases full-stack competence",
          "Includes 5+ projects",
          "GitHub repository included",
          "Deployed application examples",
          "Technical interview preparation"
        ]
      }
    },
    '4': {
      id: '4',
      title: 'Digital Marketing',
      description: 'Master the art of digital marketing in this comprehensive course that covers all aspects of modern online marketing. Learn to create impactful digital campaigns, analyze performance metrics, and develop strategies that drive business growth. This program prepares you for diverse career opportunities in the fast-growing digital marketing sector.',
      duration: '6-months',
      price: '15,000',
      discount: '20,000',
      syllabus: [
        {
          title: 'Digital Marketing Fundamentals',
          items: [
            'Introduction to digital marketing landscape',
            'Understanding digital marketing funnel',
            'Customer journey mapping',
            'Digital marketing vs traditional marketing',
            'Key performance indicators (KPIs)'
          ]
        },
        {
          title: 'Search Engine Optimization (SEO)',
          items: [
            'On-page SEO techniques',
            'Off-page SEO strategies',
            'Technical SEO fundamentals',
            'Keyword research tools (Google Keyword Planner, SEMrush)',
            'SEO analytics and reporting',
            'Local SEO optimization'
          ]
        },
        {
          title: 'Social Media Marketing',
          items: [
            'Facebook & Instagram marketing strategies',
            'LinkedIn marketing for professionals',
            'Twitter marketing techniques',
            'Pinterest marketing for visual brands',
            'Social media content calendar creation',
            'Community management best practices'
          ]
        },
        {
          title: 'Google Ads & Analytics',
          items: [
            'Google Search Ads setup',
            'Display network advertising',
            'Remarketing strategies',
            'Google Analytics implementation',
            'Conversion tracking setup',
            'Campaign performance analysis'
          ]
        },
        {
          title: 'Content Marketing & Email Marketing',
          items: [
            'Content strategy development',
            'Blog writing for SEO',
            'Video marketing basics',
            'Email campaign creation (Mailchimp, Sendinblue)',
            'Lead nurturing sequences',
            'Marketing automation basics'
          ]
        },
        {
          title: 'Google Tools Integration',
          items: [
            'Google Sheets for data analysis',
            'Google Forms for lead generation',
            'Google Data Studio for reporting',
            'Google Tag Manager implementation',
            'Google My Business optimization',
            'Integrating Google tools with marketing strategies'
          ]
        },
        {
          title: 'Practical Campaign Management',
          items: [
            'Creating complete marketing campaigns',
            'Budget allocation strategies',
            'A/B testing methodologies',
            'ROI calculation and reporting',
            'Client presentation skills',
            'Portfolio development'
          ]
        }
      ],
      benefits: [
        "Comprehensive digital marketing knowledge",
        "Hands-on campaign experience",
        "Industry-recognized certification",
        "Placement assistance",
        "Freelance opportunities",
        "Real-world project experience"
      ],
      certification: {
        description: "Earn a certification in Digital Marketing that showcases your ability to plan, execute, and analyze complete digital marketing campaigns across multiple channels.",
        benefits: [
          "Certified Digital Marketer credential",
          "Campaign portfolio samples",
          "Google Analytics certification prep",
          "Social media campaign examples",
          "LinkedIn profile optimization"
        ]
      }
    },
    '5': {
      id: '5',
      title: 'Accounts & Tally',
      description: 'Master financial accounting and Tally software in this comprehensive course designed for aspiring accountants and finance professionals. Learn bookkeeping fundamentals, GST implementation, financial reporting, and advanced Tally features to manage complete accounting cycles for businesses of all sizes.',
      duration: '6 months',
      price: '12,000',
      discount: '25,000',
      syllabus: [
        {
          title: 'Accounting Fundamentals',
          items: [
            'Basic accounting principles',
            'Double-entry bookkeeping system',
            'Journal entries and ledger maintenance',
            'Trial balance preparation',
            'Financial statements (P&L, Balance Sheet)',
            'Accounting standards overview'
          ]
        },
        {
          title: 'Taxation Basics',
          items: [
            'GST concepts and framework',
            'Tax slabs and calculations',
            'Invoice requirements under GST',
            'GST returns filing process',
            'TDS basics and compliance',
            'Tax deduction at source'
          ]
        },
        {
          title: 'Tally Prime Fundamentals',
          items: [
            'Tally installation and setup',
            'Company creation and configuration',
            'Accounting vouchers entry',
            'Inventory management in Tally',
            'Basic reporting features',
            'Data backup and restore'
          ]
        },
        {
          title: 'Advanced Tally Operations',
          items: [
            'GST implementation in Tally',
            'E-way bill generation',
            'Bank reconciliation',
            'Payroll processing in Tally',
            'Budgeting and scenario management',
            'Multi-currency transactions'
          ]
        },
        {
          title: 'Google Sheets for Accounting',
          items: [
            'Basic spreadsheet operations',
            'Financial formulas and functions',
            'Data visualization with charts',
            'Creating accounting templates',
            'Collaborative accounting workflows',
            'Importing/exporting Tally data'
          ]
        },
        {
          title: 'Practical Accounting Applications',
          items: [
            'Complete accounting cycle practice',
            'Generating statutory reports',
            'Financial ratio analysis',
            'Business case studies',
            'Client data handling',
            'Final project submission'
          ]
        }
      ],
      benefits: [
        "Comprehensive accounting knowledge",
        "Hands-on Tally experience",
        "GST compliance training",
        "Industry-recognized certification",
        "Placement assistance",
        "Real-world accounting scenarios"
      ],
      certification: {
        description: "Earn a dual certification in Financial Accounting and Tally Prime that validates your ability to manage complete accounting operations for businesses using Tally software.",
        benefits: [
          "Certified Tally Professional credential",
          "Financial reporting samples",
          "GST filing documentation",
          "Practical accounting portfolio",
          "Job placement support"
        ]
      }
    },
    '6': {
      id: '6',
      title: 'Cloud Computing',
      description: 'Cloud computing is a revolutionary paradigm that offers scalable and on-demand access to computing resources over the internet. Studying cloud computing provides individuals with the knowledge and skills necessary to leverage this technology for various purposes.',
      duration: '6-7 months',
      price: '15,000',
      discount: '24,000',
      syllabus: [
        {
          title: 'Linux Fundamentals',
          items: [
            'Command line basics',
            'File management',
            'User permissions',
            'Process management',
            'Networking'
          ]
        },
        {
          title: 'AWS Core Services',
          items: [
            'EC2 instances',
            'S3 storage',
            'VPC networking',
            'IAM security',
            'RDS databases'
          ]
        },
        {
          title: 'DevOps Tools',
          items: [
            'Git version control',
            'Jenkins CI/CD',
            'Docker containers',
            'Kubernetes orchestration',
            'Terraform infrastructure'
          ]
        }
      ],
      benefits: [
        "AWS cloud architecture",
        "Infrastructure as code",
        "DevOps methodologies",
        "Scalable solutions",
        "Security best practices",
        "Cost optimization"
      ],
      certification: {
        description: "Students receive AWS Cloud Practitioner certification preparation along with hands-on experience deploying real-world cloud solutions.",
        benefits: [
          "Cloud deployment skills",
          "AWS certification prep",
          "Architecture diagrams",
          "Terraform configurations",
          "Resume-ready projects"
        ]
      }
      

      
    },
    '7': {
    id: '7',
    title: 'Artificial Intelligence & Machine Learning Masterclass',
    description: 'Become a skilled AI and ML practitioner with this in-depth masterclass. This course covers the theoretical foundations and practical applications of modern AI, from core machine learning algorithms to advanced deep learning architectures and natural language processing. Gain hands-on experience with industry-standard tools and build a strong portfolio to launch your career in AI.',
    duration: '6-8 months', // Typical duration for a comprehensive course
    price: '40,000', // Example pricing in INR
    discount: '55,000', // Example discount in INR
    syllabus: [
        {
            title: '1. Foundations of AI & Python for ML',
            items: [
                'Introduction to AI: History, Applications, and Ethical Considerations',
                'Machine Learning vs. Deep Learning vs. Data Science',
                'Setting up the Development Environment (Anaconda, Jupyter Notebook)',
                'Python Fundamentals for ML (Data Types, Control Flow, Functions)',
                'NumPy for Numerical Computing',
                'Pandas for Data Manipulation and Analysis',
                'Matplotlib & Seaborn for Data Visualization'
            ]
        },
        {
            title: '2. Data Preprocessing & Feature Engineering',
            items: [
                'Understanding Data Quality: Missing Values, Outliers',
                'Techniques for Handling Missing Data (Imputation)',
                'Outlier Detection and Treatment',
                'Data Scaling: Standardization, Normalization',
                'Encoding Categorical Variables (One-Hot, Label Encoding)',
                'Feature Engineering Concepts and Techniques',
                'Feature Selection Methods',
                'Dimensionality Reduction (PCA)'
            ]
        },
        {
            title: '3. Core Machine Learning Algorithms (Supervised)',
            items: [
                'Linear Regression (Simple, Multiple, Polynomial)',
                'Regularization Techniques (Lasso, Ridge)',
                'Logistic Regression (Binary and Multi-class Classification)',
                'Decision Trees & Random Forests',
                'Support Vector Machines (SVM)',
                'K-Nearest Neighbors (KNN)',
                'Model Evaluation Metrics (Accuracy, Precision, Recall, F1-Score, ROC-AUC, MSE, R-squared)',
                'Cross-validation and Hyperparameter Tuning'
            ]
        },
        {
            title: '4. Unsupervised Learning & Recommender Systems',
            items: [
                'Introduction to Unsupervised Learning: Clustering and Association',
                'Clustering Algorithms: K-Means, Hierarchical Clustering, DBSCAN',
                'Evaluating Clustering Performance',
                'Introduction to Recommender Systems',
                'Collaborative Filtering (User-based, Item-based)'
            ]
        },
        {
            title: '5. Deep Learning Fundamentals & Architectures',
            items: [
                'Introduction to Neural Networks: Perceptrons, Activation Functions',
                'Feedforward Neural Networks (MLPs)',
                'Backpropagation Algorithm and Optimizers (Adam, SGD)',
                'Building Neural Networks with TensorFlow and Keras',
                'Convolutional Neural Networks (CNNs) for Image Data',
                'Recurrent Neural Networks (RNNs) for Sequential Data',
                'Understanding LSTMs and GRUs'
            ]
        },
        {
            title: '6. Natural Language Processing (NLP)',
            items: [
                'Text Preprocessing: Tokenization, Stemming, Lemmatization, Stop Words',
                'Text Representation: Bag-of-Words, TF-IDF',
                'Word Embeddings (Word2Vec, GloVe)',
                'Sentiment Analysis',
                'Introduction to Sequence-to-Sequence Models',
                'Overview of Transformer Architectures (BERT, GPT concepts)'
            ]
        },
        {
            title: '7. Project Work & Deployment Basics',
            items: [
                'End-to-End Capstone Project Development',
                'Model Persistence: Saving and Loading Models (Pickle, Keras formats)',
                'Introduction to MLOps Concepts',
                'Basic Web Deployment of ML Models (e.g., using Flask/Streamlit)',
                'Version Control with Git and GitHub',
                'Industry Case Studies and Best Practices'
            ]
        }
    ],
    benefits: [
        "Comprehensive theoretical and practical learning experience",
        "Hands-on projects to build a robust portfolio",
        "Taught by experienced industry professionals",
        "Dedicated doubt-solving and mentorship sessions",
        "Career guidance, resume building, and interview preparation",
        "Networking opportunities with peers and AI experts",
        "Access to latest tools and technologies in AI/ML",
        "Certificate of Completion for industry recognition"
    ]
}
      };

  const course = courses[id] || null;

  return {
    props: {
      course,
    },
  };
}

export default Course;