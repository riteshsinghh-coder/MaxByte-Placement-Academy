import Head from 'next/head';
import Script from 'next/script';
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
        <title>MaxByte Placement Academy | Best Computer Institute in Faridabad</title>
        <meta
          name="description"
          content="Join MaxByte Placement Academy – the top computer institute in Faridabad for IT, Accounting, Tally, Digital Marketing, and guaranteed job placement programs."
        />
        <meta
          name="keywords"
          content="MaxByte Placement Academy, Computer Institute Faridabad, IT Courses Faridabad, Tally Institute Faridabad, Digital Marketing Faridabad, Python training, Java, Web Development, SEO Training, Best Computer Classes in Faridabad, Interview preparation, Resume building"
        />
        <meta name="author" content="MaxByte Placement Academy" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://maxbyteplacementacademy.in" />

        {/* Favicons */}

<link rel="apple-touch-icon" sizes="180x180" href="https://maxbyteplacementacademy.in/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="https://maxbyteplacementacademy.in/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="https://maxbyteplacementacademy.in/favicon-16x16.png" />
<link rel="manifest" href="https://maxbyteplacementacademy.in/site.webmanifest" />
<link rel="shortcut icon" href="https://maxbyteplacementacademy.in/favicon.ico" />

<meta name="theme-color" content="#ffffff" />
<meta name="msapplication-TileColor" content="#ffffff" />
<meta name="msapplication-config" content="https://maxbyteplacementacademy.in/browserconfig.xml" />


        {/* Open Graph (Facebook & LinkedIn) */}
        <meta property="og:title" content="MaxByte Placement Academy | Best Computer Institute in Faridabad" />
        <meta property="og:description" content="Top institute for IT, Accounting, Digital Marketing, Tally & job placement in Faridabad." />
        <meta property="og:image" content="https://maxbyteplacementacademy.in/assets/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://maxbyteplacementacademy.in" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MaxByte Placement Academy" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MaxByte Placement Academy | Best Computer Institute in Faridabad" />
        <meta name="twitter:description" content="Join MaxByte for the best IT, Tally, Accounts & Digital Marketing training in Faridabad." />
        <meta name="twitter:image" content="https://maxbyteplacementacademy.in/assets/logo.png" />
        <meta name="twitter:site" content="@MaxByteAcademy" />

        {/* Structured Data: JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "MaxByte Placement Academy",
              url: "https://maxbyteplacementacademy.in",
              logo: "https://maxbyteplacementacademy.in/assets/logo.png",
              description:
                "MaxByte Placement Academy offers professional training in IT, Accounts, Digital Marketing, and more, with 100% placement assistance in Faridabad.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "AP School Gali, Sector 23",
                addressLocality: "Faridabad",
                addressRegion: "Haryana",
                postalCode: "121005",
                addressCountry: "IN",
              },
              telephone: "+917545840365",
              email: "maxbyteplacement@gmail.com",
              sameAs: [
                "https://www.instagram.com/maxbyteplacementacademy",
                "https://www.facebook.com/profile.php?id=61558540708282",
                "https://www.youtube.com/channel/UCUOszJIYskBMjPTmYxr-f1A",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "enrollment",
                  email: "maxbyteplacement@gmail.com",
                  telephone: "+917545840365",
                  description: "Enrollment and general inquiries",
                  areaServed: "Faridabad",
                  availableLanguage: ["en", "hi"],
                },
                {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  url: "https://wa.me/7545840365",
                  description: "WhatsApp support",
                  areaServed: "Faridabad",
                  availableLanguage: ["en", "hi"],
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Courses & Services",
                itemListElement: [
                  {
                    "@type": "OfferCatalog",
                    name: "IT & Development",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Course",
                          name: "Full Stack Web Development",
                          url: "https://maxbyteplacementacademy.in/course/3",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Course",
                          name: "Python Programming",
                        },
                      },
                    ],
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Accounts & Finance",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Course",
                          name: "Accounts & Tally ERP 9",
                          url: "https://maxbyteplacementacademy.in/course/5",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Course",
                          name: "GST & Taxation",
                        },
                      },
                    ],
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Digital Marketing",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Course",
                          name: "Certified Digital Marketing Professional",
                          url: "https://maxbyteplacementacademy.in/course/4",
                        },
                      },
                    ],
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Placement Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Guaranteed Job Placement",
                        },
                      },
                    ],
                  },
                ],
              },
              hasPart: [
                {
                  "@type": "WebSite",
                  name: "MaxByte Student Portal",
                  url: "https://app.maxbyteplacementacademy.in",
                },
              ],
            }),
          }}
        />
      </Head>

      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-WCM4HJ7JL8"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WCM4HJ7JL8');
          `,
        }}
      />

      {/* Page Components */}
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
