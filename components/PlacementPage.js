import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaBriefcase, FaHandshake } from 'react-icons/fa';

class PlacementPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placements: [
        { id: 1, name: "Microsoft", logoUrl: "https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen-1920x706.jpg" },
        { id: 2, name: "Acko Insurance", logoUrl: "https://www.acko.com/wp-content/uploads/2019/03/acko-logo-knowledge-panel.png" },
        { id: 3, name: "Hashnode", logoUrl: "https://www.svgrepo.com/show/353856/hashnode.svg" },
        { id: 4, name: "Success Insights", logoUrl: "https://successinsightsindia.com/wp-content/uploads/2023/10/1661492943731-og_image.png" },
        { id: 5, name: "Rentomojo", logoUrl: "https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL3JlbnRvbW9qby5qcGc.png" },
        { id: 6, name: "Medium", logoUrl: "https://miro.medium.com/v2/resize:fit:1400/0*ok6yuDnTx4o2PSFx.png" },
        { id: 7, name: "Airbase", logoUrl: "https://mms.businesswire.com/media/20231114533627/en/1943742/22/airbase_logo.jpg" },
        { id: 8, name: "Swiggy", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxVJNqJ9fOL-jnVJbeRBSStvzyt0Tz_JtmhoTee9Liw&s" },
        { id: 9, name: "BrowserStack", logoUrl: "https://www.browserstack.com/images/layout/browserstack-logo-600x315.png" },
        { id: 10, name: "Gojek", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Gojek_logo_2022.svg/2560px-Gojek_logo_2022.svg.png" },
        { id: 11, name: "Razorpay", logoUrl: "https://assets-global.website-files.com/5b928a5439bbd3a36c44e301/5bafe547c110e44f487f6a3a_image_preview.png" },
        { id: 12, name: "Unacademy", logoUrl: "https://images.yourstory.com/cs/images/companies/c69bc5b91c9888b7bd09-1622548235763.jpg?fm=auto&ar=1:1&mode=fill&fill-color=fff" },
        { id: 13, name: "Zerodha", logoUrl: "https://www.eklavvya.com/blog/wp-content/uploads/2022/03/Zerodha-Logo.png" },
        { id: 14, name: "Devfolio", logoUrl: "https://cdn.iconscout.com/icon/free/png-256/free-devfolio-1649779-1399882.png" },
        { id: 15, name: "Sahaj Software", logoUrl: "https://media.licdn.com/dms/image/C560BAQHg_l1h_XiBZA/company-logo_200_200/0/1634569247323/sahajsoftware_logo?e=2147483647&v=beta&t=1Ii9jD_KiJtr47Xf0RHza5wG7oQWHptx9poThSYJgAM" },
        { id: 16, name: "Ola", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScz8GvbXFR548bsC47Mcx1CQB_Ii3kRCt5-Q_8_IaX8Q&s" },
        { id: 17, name: "Wipro", logoUrl: "https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/05/05/Photos/Processed/wiprologo-kXmF--621x414@LiveMint.jpg" },
        { id: 18, name: "Infosys", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2560px-Infosys_logo.svg.png" }
      ],
      loadedImages: []
    };
  }

  handleImageLoad = (id) => {
    this.setState(prevState => ({
      loadedImages: [...prevState.loadedImages, id]
    }));
  };

  render() {
    const { placements, loadedImages } = this.state;

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
          <title>Top Companies Hiring Our Students | MaxByte Placement Academy</title>
          <meta
            name="description"
            content="Discover the top companies where our students have been placed. We partner with leading organizations to provide excellent career opportunities."
          />
          <meta
            name="keywords"
            content="placement companies, hiring partners, tech jobs, career opportunities, MaxByte placements"
          />
        </Head>

        <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center items-center mb-4">
              <FaBriefcase className="text-purple-600 text-3xl mr-3" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                Our <span className="text-purple-600">Recruitment</span> Partners
              </h1>
              <FaHandshake className="text-purple-600 text-3xl ml-3" />
            </div>
            {/* FIX APPLIED HERE: Changed 'We're' to 'We&apos;re' */}
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re proud to collaborate with industry leaders who recognize the talent we nurture
            </p>
          </motion.section>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
          >
            {placements.map(placement => (
              <motion.div
                key={placement.id}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="p-4 flex flex-col items-center h-full">
                  <div className="relative w-full h-32 flex items-center justify-center">
                    <img
                      src={placement.logoUrl}
                      // Best practice for alt text: escape any potential apostrophes in company names
                      alt={`${placement.name.replace(/'/g, '&apos;')} logo`}
                      className={`h-20 w-auto object-contain transition-opacity duration-300 ${loadedImages.includes(placement.id) ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => this.handleImageLoad(placement.id)}
                      loading={placement.id <= 6 ? "eager" : "lazy"}
                    />
                    {!loadedImages.includes(placement.id) && (
                      <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-lg"></div>
                    )}
                  </div>
                  <p className="mt-3 text-sm font-medium text-gray-700 text-center">
                    {placement.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Ready to join these companies?
            </h2>
            <motion.a
              href="https://docs.google.com/forms/d/1Xe3mQCw_9YTzOyKbUiVX1NVMGMMx-6B1dOHTkIHisro/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Journey Today
            </motion.a>
          </motion.div>
        </main>
      </>
    );
  }
}

export default PlacementPage;