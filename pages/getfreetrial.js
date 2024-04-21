import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/NavBar'; // Corrected import statement

const GetFreeTrialPage = () => {
  return (
    <div>
      <Navbar /> {/* Include Navbar component */}
      <Hero />
    </div>
  );
};

export default GetFreeTrialPage;
