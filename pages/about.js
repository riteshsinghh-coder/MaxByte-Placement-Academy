// pages/about.js

import React from 'react';
import NavBar from '../components/NavBar';

const AboutPage = () => {
  // WhatsApp group link
  const whatsappGroupLink = 'https://chat.whatsapp.com/JeKWQKQFZc5GbbPOE4oS9k';

  return (
    <div>
      <NavBar/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-purple-500">Welcome to MaxByte Placement Academy</h1>
      <p className="text-lg mb-4">MaxByte Placement Academy is a leading institution dedicated to providing comprehensive IT education and career placement services. Our academy was founded with the vision of bridging the gap between education and industry, empowering individuals with the skills and knowledge needed to thrive in the fast-paced world of technology.</p>
      
      <h2 className="text-2xl font-bold mb-2 text-purple-500">Our Mission</h2>
      <p className="text-lg mb-4">At MaxByte, our mission is to empower students and professionals with industry-relevant skills and experiences that enable them to excel in their careers. We strive to create a dynamic learning environment where innovation, collaboration, and excellence are fostered.</p>
      
      <h2 className="text-2xl font-bold mb-2 text-purple-500">Why Join Us?</h2>
      <p className="text-lg mb-4">Join MaxByte Placement Academy and embark on a journey of growth and opportunity. With our expert faculty, comprehensive courses, and dedicated placement assistance, we provide the resources and support you need to achieve your career goals in the rapidly evolving field of technology.</p>
      
      <h2 className="text-2xl font-bold mb-2 text-purple-500">Our Vision</h2>
      <p className="text-lg mb-4">Our vision is to be the premier destination for IT education and career placement, recognized for our commitment to excellence, innovation, and student success. We aspire to empower individuals with the skills and confidence to thrive in the digital age and make meaningful contributions to society.</p>
      
      <h2 className="text-2xl font-bold mb-2 text-purple-500">Serving Our Country</h2>
      <p className="text-lg mb-4">At MaxByte, we are proud to serve our country by equipping our students with the knowledge and skills needed to contribute to the growth and development of our nation's technology sector. Through education and opportunity, we aim to empower the next generation of tech leaders and innovators.</p>
      
      {/* Join Us Button */}
      <a href={whatsappGroupLink} target="_blank" className="bg-purple-500 text-white font-bold py-2 px-4 rounded inline-block mt-4">Join Us on WhatsApp</a>
    </div>
    </div>
  );
}

export default AboutPage;
