import React from 'react';
import Advertisement from '../components/Advertisement';
import LatestArticles from '../components/LatestArticles';
import LatestPosts from '../components/LatestPosts';
import LatestStories from '../components/LatestStories';
import TopPosts from '../components/TopPosts';

import VerticalGallery from '../components/VerticalGallery';

const Home = () => {
  return (
    <>
      <VerticalGallery />
      <LatestPosts />
      <div className="row gap-4">
        <div className="col-8 p-0">
          <LatestArticles />
        </div>
        <div className="col p-0 mt-5">
          <Advertisement style={{ height: '800px', marginTop: '118px' }} />
          <TopPosts className="mt-5" />
        </div>
      </div>
      <LatestStories />
    </>
  );
};

export default Home;
