// components/NavBar.js

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

// Modal component
const Modal = ({ isOpen, onClose, title, content }) => {
  // Function to handle phone call
  const handlePhoneCall = () => {
    window.location.href = 'tel:7545840365'; // Replace with your phone number
  };
  const handleWhatsAppMessage = () => {
    const businessDetails = encodeURIComponent('Welcome to MaxByte Placement Academy. We offer comprehensive IT education and career placement services.');
    
    // Function to encode the logo path for use in the WhatsApp link
    const encodeLogoPath = (path) => {
      return encodeURIComponent(window.location.origin + path);
    }; 
    
    // Logo path within the public directory
    const logoPath = "https://drive.google.com/file/d/1QfB9qnLyQmxVrcpk1LWyV18919GlOQag/view?usp=sharing"; 
    
    // Encode the logo URL
    const logoUrl = encodeLogoPath(logoPath);
    
    // Construct the WhatsApp link
    const whatsappLink = `https://wa.me/7545840365/?text=${businessDetails}&amp;logo=${logoUrl}`;
    
    // Open the WhatsApp link in a new tab
    window.open(whatsappLink, '_blank'); // Replace with your WhatsApp number
  };
  

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="flex items-center mb-4">
          <FaPhone className="mr-2" />
          <a className="text-base " onClick={handlePhoneCall}>Phone: <span className="cursor-pointer text-purple-500"> 7545840365</span></a>
        </div>
        <div className="flex items-center mb-4">
          <FaWhatsapp className="mr-2" />
          <p className="text-base">WhatsApp: <a onClick={handleWhatsAppMessage} className="text-purple-600 cursor-pointer" target="_blank">Chat with Us</a></p>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="mr-2" />
          <p className="text-base">Email: <a href="mailto:maxbyteplacementacademy@gmail.com" className="text-purple-600">maxbyteplacementacademy@gmail.com</a></p>
        </div>
        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

const NavBar = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  // Function to open the modal with specific content
  const openModal = (title, content) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to navigate to the About Us page
  const handleAboutClick = () => {
    router.push('/about');
  };

  return (
    <div className='mx-auto'>
      <div className="container mx-auto flex flex-col lg:flex-row py-2 justify-between items-center">
        {/* Logo */}
        <img src="/assets/logo.png" alt="logo" className="w-25 h-24" />

        {/* Navigation */}
        <div className="flex items-center gap-4">
          {/* About Us */}
          <a className='text-base font-medium cursor-pointer' onClick={handleAboutClick}>About Us</a>

          {/* Contact Us */}
          <div className='text-base font-medium cursor-pointer flex items-center' onClick={() => openModal('Contact Us', 'Feel free to reach us via phone, WhatsApp, or email.')}>
            <span>Contact Us</span>
          </div>

        </div>

        {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={closeModal} title={modalContent.title} content={modalContent.content} />
      </div>
    </div>
  );
}

export default NavBar;
