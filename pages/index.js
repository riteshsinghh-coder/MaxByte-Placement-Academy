import Head from 'next/head';
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
        <title>MaxByte Placement Academy | Best Placement Center in Faridabad | Empowering Careers </title>
        <meta name="description" content="Unlock top-notch placement services and IT courses at MaxByte Placement Academy. Discover web development, IT job placements, and career advancement opportunities in Faridabad, Haryana." />
        <meta name="keywords" content="Placement center in Faridabad, IT jobs, Web development courses, Career advancement, Job placements, Wipro, Infosys, Amazon, Flipkart, Google, Microsoft, Jobs in Delhi NCR, Software engineering, Coding bootcamps, Tech certifications, Internships, IT training, Employment opportunities, Technology careers, Programming courses, Technical skills, Entry-level jobs, Web design, Data science, Cloud computing, Networking, Full-stack development, UI/UX design, Mobile app development, Java, Python, JavaScript, HTML/CSS, DevOps, Artificial intelligence, Machine learning, Big data, Blockchain, Internet of Things, Virtual reality, Augmented reality, Game development, Digital marketing, Project management, Agile, Scrum, Remote work, Freelancing, Resume building, Interview preparation, Soft skills, Leadership development, Career counseling, Job placement, Talent acquisition, Staffing, Industry partnerships, Networking events, IT job fairs, Recruitment drives, Career progression, Upskilling, Reskilling, Continuing education, Lifelong learning, Curriculum, Mentorship, Alumni network." />
        <link rel="canonical" href="https://maxbyteplacementacademy.in" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WCM4HJ7JL8"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WCM4HJ7JL8');
          `}
        </script>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="MaxByte Placement Academy | Best Placement Center in Faridabad | Empowering Careers" />
        <meta property="og:description" content="Unlock top-notch placement services and IT courses at MaxByte Placement Academy. Discover web development, IT job placements, and career advancement opportunities in Faridabad, Haryana." />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="60" />
        <meta property="og:url" content="https://maxbyteplacementacademy.in" />
        <meta property="og:type" content="website" />
        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MaxByte Placement Academy",
              "description": "Unlock top-notch placement services and IT courses at MaxByte Placement Academy. Discover web development, IT job placements, and career advancement opportunities in Faridabad, Haryana.",
              "url": "https://maxbyteplacementacademy.in",
              "logo": {
                "@type": "ImageObject",
                "url": "/assets/logo.png",
                "width": 600,
                "height": 60
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61558540708282",
                "https://twitter.com/maxbyteplacementacademy"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "Phone no": "+91 7545840365",
                "contactType": "Placement Service"
              }
            }
          `}
        </script>
      </Head>
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
