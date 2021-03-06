import React from 'react';

import PageMeta from 'components/PageMeta';

import HomeHero from 'components/HomeHero';

const Homepage = () => {
  return (
    <div className="animated fadeIn" id="Homepage">
      <PageMeta />
      <HomeHero />
    </div>
  );
};

export default Homepage;
