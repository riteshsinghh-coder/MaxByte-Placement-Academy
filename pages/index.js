import Head from 'next/head';
import Script from 'next/script'; // Import the Script component
import NavBar from '../components/NavBar';
import Placed from '../components/Placed';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import PlacementPage from '../components/PlacementPage';
import Services from '../components/Services';
import PopularClass from '../components/PopularClass';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div>
      <Head>
        {/* Primary SEO Tags */}
        <title>MaxByte Placement Academy | Best IT, Accounts, Digital Marketing Institute & Placement in Faridabad</title>
        <meta
          name="description"
          content="MaxByte Placement Academy offers the best IT, Accounts & Tally, and Digital Marketing courses with guaranteed job placements in Faridabad. Unlock your career potential with expert-led training. Voted top institute for career training in Faridabad!"
        />
        <meta
          name="keywords"
          content="MaxByte Placement Academy, best institute in Faridabad, best placement academy in Faridabad, IT courses Faridabad, software training Faridabad, web development courses Faridabad, data science Faridabad, IT job placements Faridabad, accounts course Faridabad, Tally training Faridabad, digital marketing course Faridabad, SEO training Faridabad, career advancement Faridabad, job search Faridabad, Wipro, Infosys, Amazon, Flipkart, Google, Microsoft, Jobs in Delhi NCR, Software engineering training, Coding bootcamps Faridabad, Tech certifications, Internships Faridabad, IT training Faridabad, Employment opportunities Faridabad, Technology careers, Programming courses, Technical skills, Entry-level IT jobs, Web design courses, Cloud computing training, Networking courses, Full-stack development, UI/UX design, Mobile app development, Java, Python, JavaScript, HTML/CSS, DevOps, Artificial intelligence, Machine learning, Big data, Blockchain, Internet of Things, Virtual reality, Augmented reality, Game development, Digital marketing, Project management, Agile, Scrum, Remote work, Freelancing, Resume building, Interview preparation, Soft skills, Leadership development, Career counseling, Job placement, Talent acquisition, Staffing, Industry partnerships, Networking events, IT job fairs, Recruitment drives, Career progression, Upskilling, Reskilling, Continuing education, Lifelong learning, Curriculum, Mentorship, Alumni network, financial accounting courses, taxation courses, GST training, bookkeeping"
        />
        <link rel="canonical" href="https://www.maxbyteplacementacademy.in" />
        <link rel="icon" type="image/png" href="/favicon.png" /> {/* Ensure this favicon exists */}

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content="MaxByte Placement Academy | Top IT, Accounts & Digital Marketing Institute in Faridabad" />
        <meta property="og:description" content="Unlock your potential with MaxByte Placement Academy! Offering the best IT, Accounts & Tally, and Digital Marketing courses with guaranteed job placement support for a thriving career in Faridabad." />
        <meta property="og:image" content="https://www.maxbyteplacementacademy.in/assets/maxbyte_og_image.png" /> {/* Use a high-quality OG image */}
        <meta property="og:image:width" content="1200" /> {/* Recommended width for OG images */}
        <meta property="og:image:height" content="630" /> {/* Recommended height for OG images */}
        <meta property="og:url" content="https://www.maxbyteplacementacademy.in" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MaxByte Placement Academy" />

        {/* Twitter Card Meta Tags (for Twitter specific sharing) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MaxByteAcademy" /> {/* Replace with your actual Twitter handle if you have one */}
        <meta name="twitter:creator" content="@MaxByteAcademy" /> {/* Replace with your actual Twitter handle if you have one */}
        <meta name="twitter:title" content="MaxByte Placement Academy: Best IT, Accounts & Digital Marketing Training & Jobs in Faridabad" />
        <meta name="twitter:description" content="Get hands-on training in IT, Accounts & Tally, and Digital Marketing, and secure your dream job with the best placement academy in Faridabad. Join MaxByte today!" />
        <meta name="twitter:image" content="https://www.maxbyteplacementacademy.in/assets/maxbyte_og_image.png" /> {/* Use the same OG image or a Twitter-specific one */}

        {/* Schema.org Structured Data (JSON-LD) for Educational Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "MaxByte Placement Academy",
              "url": "https://www.maxbyteplacementacademy.in",
              "logo": "https://www.maxbyteplacementacademy.in/assets/logo.png", // Full URL for your logo
              "description": "MaxByte Placement Academy is the top IT, Accounts & Tally, and Digital Marketing training and placement institute in Faridabad, Haryana, India. We offer comprehensive courses and guaranteed job assistance to empower students for successful careers in technology, finance, and marketing. Your best choice for professional education and job placement in Faridabad.",
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
                "https://www.youtube.com/channel/UCUOszJIYskBMjPTmYxr-f1A" // **ACTION REQUIRED: PLEASE VERIFY THIS YOUTUBE URL**
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "enrollment",
                  "email": "maxbyteplacement@gmail.com",
                  "telephone": "+917545840365",
                  "description": "Enrollment and general inquiries for MaxByte Placement Academy",
                  "areaServed": "Faridabad",
                  "availableLanguage": ["en", "hi"]
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "url": "https://wa.me/7545840365",
                  "description": "WhatsApp contact for quick support and inquiries",
                  "areaServed": "Faridabad",
                  "availableLanguage": ["en", "hi"]
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Training Courses & Placement Services",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "Software Development Courses",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Course",
                          "name": "Full Stack Web Development"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Course",
                          "name": "Python Programming"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Course",
                          "name": "Java Development"
                        }
                      }
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Accounts & Finance Courses",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Course",
                          "name": "Accounts & Tally ERP 9 Training"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Course",
                          "name": "Advanced Financial Accounting"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Course",
                          "name": "GST & Taxation Course"
                        }
                      }
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Digital Marketing Courses",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Course",
                          "name": "Certified Digital Marketing Professional"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Course",
                          "name": "SEO & SEM Masterclass"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Course",
                          "name": "Social Media Marketing"
                        }
                      }
                    ]
                  },
                   {
                    "@type": "OfferCatalog",
                    "name": "Placement Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Guaranteed Job Placement"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Resume Building & Interview Preparation"
                        }
                      },
                       {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Career Counseling & Mentorship"
                        }
                      }
                    ]
                  }
                ]
              }
            }),
          }}
        />
      </Head>

      {/* Google Analytics Global Site Tag using next/script */}
      <Script
        strategy="afterInteractive" // Loads after hydration, good balance for performance
        src="https://www.googletagmanager.com/gtag/js?id=G-WCM4HJ7JL8"
      />
      <Script
        id="google-analytics-init" // Unique ID for the inline script
        strategy="afterInteractive" // Loads after hydration
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WCM4HJ7JL8');
          `,
        }}
      />

      <NavBar />
      <Hero />
      <PlacementPage />
      <Services />
      <PopularClass />
      <Testimonials />
      <Placed />
      <Footer />
    </div>
  );
}