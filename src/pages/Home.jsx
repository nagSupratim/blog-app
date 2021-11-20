import React, { useEffect } from 'react';
import HomeComponent from '../components/layout/HomeComponent';

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: -200,
      left: -100,
      behavior: 'smooth',
    });
  }, []);

  return <HomeComponent />;
};

export default Home;
