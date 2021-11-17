import React, { useEffect } from 'react';
import Advertisement from '../components/Advertisement';
import LatestArticles from '../components/LatestArticles';
import LatestPosts from '../components/LatestPosts';
import LatestStories from '../components/LatestStories';
import TopPosts from '../components/TopPosts';

import VerticalGallery from '../components/VerticalGallery';

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: -200,
      left: -100,
      behavior: 'smooth',
    });
  }, []);
  return (
    <>
      <VerticalGallery />
      <div className="p-3 p-md-0">
        <LatestPosts />
        <div className="row gap-4 px-3">
          <div className="col-12 col-md-8 p-0">
            <LatestArticles />
          </div>
          <div className="col p-0 mt-5">
            <Advertisement
              style={{ height: '800px', marginTop: '118px' }}
              className="d-none d-md-flex"
            />
            <TopPosts className="mt-5" />
          </div>
        </div>
        <LatestStories />
      </div>
    </>
  );
};

export default Home;
