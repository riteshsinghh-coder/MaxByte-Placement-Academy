import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import React from 'react';

const Footer = () => {
  // Define the URLs for your social media pages
  const facebookUrl = "https://www.facebook.com/profile.php?id=61558540708282";
  const instagramUrl = "https://www.instagram.com/maxbyteplacementacademy";
  const whatsappUrl = "https://wa.me/7545840365";
  
  return (
    <div className='bg-[#101828]'>
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 text-white">
          <div className="flex flex-col gap-4">
            <img src="/assets/logo.png" alt="" className="w-25 h-24" />
            <p>Top learning experiences that create more talent in the world.</p>
          </div>  
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap gap-5 sm:flex-nowrap">
              <div className="w-full sm:w-auto">
                <p className='text-lg font-medium'>Terms</p>
                <p className='text-base sm:w-60'>Terms and conditions of use: These terms govern your use of the MaxByte Placement Academy website and services. By accessing or using our website and services, you agree to abide by these terms and conditions.</p>
              </div>
              <div className="w-full sm:w-auto">
                <p className='text-lg font-medium'>Privacy</p>
                <p className='text-base sm:w-60'>Privacy policy: Our privacy policy outlines how we collect, use, disclose, and protect your personal information when you use our website and services. We are committed to maintaining the confidentiality and security of your personal data.</p>
              </div>
              <div className="w-full sm:w-auto">
                <p className='text-lg font-medium'>Cookies</p>
                <p className='text-base sm:w-60'>Cookie policy: Our cookie policy explains how we use cookies and similar tracking technologies on our website to enhance your browsing experience, analyze website traffic, and personalize content. By using our website, you consent to the use of cookies as described in our cookie policy.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center pt-20 pb-5">
          <p className='text-gray-500'>© 2024 MaxByte Placement Academy All rights reserved.</p>
          <div className="flex gap-3 mt-5 sm:mt-0">
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer"><BsFacebook className='text-gray-500 hover:text-primary'/></a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer"><BsInstagram className='text-gray-500 hover:text-primary'/></a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><FaWhatsapp className='text-gray-500 hover:text-primary'/></a>
          </div>
        </div>
      </div>
      {/* About Us Modal */}
  
    </div>
  );
}

export default Footer;
