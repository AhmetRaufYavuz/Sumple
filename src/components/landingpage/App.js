import Navbar from './components/Navbar/Navbar';
import React from 'react';
import Hero from './components/body/Hero/Hero';


function LandingPage() {
  return (  
    <body>
      <div className="AppHome">
        <Navbar/>
      </div>
      <div className="MainContainerHome">
        <Hero/>
      </div>
    </body>      
  );
}

export default LandingPage;
