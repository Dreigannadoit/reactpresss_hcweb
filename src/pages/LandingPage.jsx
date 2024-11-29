import React, { useState } from 'react';
import {
    Hero,
    Services,
    Skills,
    Trusted,
    Process,
    CtaBlock,
    MVCV,
    About,
    Diff,
    Lead,
    Contact,
    Footer
} from '../components/index.js';
import Nav from '../parts/Nav.jsx';
import NavOpen from '../parts/NavOpen.jsx';
import LeadOpen from '../parts/LeadOpen.jsx';

const LandingPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLeadOpen, setIsLeadOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleLead = () => {
    setIsLeadOpen(!isLeadOpen);
  };

  return (
    <>
      <Nav onHamClick={ toggleNav } />
      <NavOpen isNavOpen={ isNavOpen } navExit={toggleNav}/>
      <Hero />
      <Services />
      <Skills />
      <Trusted />
      <Process />
      <About />
      <MVCV />
      <Diff />
      <Lead onLeadClick={ toggleLead } />
      <LeadOpen isLeadOpen={ isLeadOpen } onExitLeadClick={toggleLead}/>
      <CtaBlock />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
