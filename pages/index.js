import Head from 'next/head';
import NavBar from '../components/NavBar';
import Placed from '../components/Placed';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import PlacementPage from '../components/PlacementPage';
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
