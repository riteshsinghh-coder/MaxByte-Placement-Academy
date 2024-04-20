
import Head from 'next/head';

import Placed from '../components/Placed';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import PlacementPage from '../components/PlacementPage';
import NavBar from '../components/NavBar';
import PopularClass from '../components/PopularClass';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

import dynamic from 'next/dynamic';

const DynamicVideoSection = dynamic(() => import('../components/VideoSection'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>MaxByte Placement Academy</title>
        <meta name="description" content="Top learning experiences that create more talent in the world." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MaxByte Placement Academy",
              "description": "Top learning experiences that create more talent in the world.",
              "url": "https://maxbyteplacementacademy.in",
              "logo": "/assets/logo/png",
              "sameAs": [
                "https://www.facebook.com/yourpage",
                "https://twitter.com/yourhandle"
              ]
            }
          `}
        </script>
        <link rel="canonical" href="https://yourwebsite.com" />
      </Head>
      <NavBar />
      <Hero />
      <PlacementPage />
      <Services />
      <PopularClass />
      <Testimonials />
      <Placed />
      <Footer />
      {/* Video Section */}
      <DynamicVideoSection />
    </div>
  );
}