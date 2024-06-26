// components/Hero.js

import React, { useState, useEffect } from 'react';
import EnrollmentModal from './EnrollmentModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enrollmentData, setEnrollmentData] = useState({ name: '', phone: '' });
  const whatsappGroupLink = "https://chat.whatsapp.com/JeKWQKQFZc5GbbPOE4oS9k";

  const openEnrollmentModal = () => {
    setIsModalOpen(true);
  };

  const closeEnrollmentModal = () => {
    setIsModalOpen(false);
  };

  const handleEnroll = () => {
    console.log(`Enrolling ${enrollmentData.name} with phone number ${enrollmentData.phone}`);
    closeEnrollmentModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEnrollmentData({ ...enrollmentData, [name]: value });
  };

  const openModalIfNeeded = () => {
    if (typeof window !== 'undefined' && window.location.pathname === '/getfreetrial') {
      openEnrollmentModal();
    }
  };

  useEffect(() => {
    openModalIfNeeded();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center py-10">
        <div className="flex flex-col gap-4">
          <p className="text-7xl capitalize font-semibold">
            Boost Your
            <span className="text-purple-500 pl-2 capitalize">Skills</span>{" "}
            <br /> {" "}
            <span className="text-purple-500 pl-2 capitalize">Advance</span>{" "}
            your <br />{" "}
            <span className="text-purple-500 pl-2 capitalize">Career</span> path
          </p>
          <p className="text-lg text-gray-600">
            Unlock the latest in online learning technology and resources to 
            <br />
            support your ongoing knowledge enrichment.
          </p>
          <div className="flex gap-4">
            <button
              onClick={openEnrollmentModal}
              className="btn bg-purple-500 border-none capitalize btn-lg"
            >
              Get Started
            </button>
            <a href={whatsappGroupLink} target="_blank" rel="noreferrer" className="btn bg-purple-100 text-purple-500 border-none capitalize btn-lg">
              Get Free Trial
            </a>
          </div>
          <div className="flex gap-6 items-center pt-6">
            <div className="flex gap-2 items-center">
                <img src="/assets/public.svg" alt="" />
                <p>Public Speaking</p>
            </div>
            <div className="flex gap-2 items-center">
                <img src="/assets/career.svg" alt="" />
                <p>Career Oriented</p>
            </div>
            <div className="flex gap-2 items-center">
                <img src="/assets/think.svg" alt="" />
                <p>Creative Thinking</p>
            </div>
          </div>
        </div>

        <img src="/assets/hero.png" alt="" />
      </div>
      
      {isModalOpen && (
        <EnrollmentModal
          onClose={closeEnrollmentModal}
          onEnroll={handleEnroll}
          onChange={handleInputChange}
          formData={enrollmentData}
        />
      )}
    </div>
  );
};

export default Hero;
