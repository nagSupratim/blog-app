import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Advertisement from '../components/Advertisement';
import CategoryPosts from '../components/CategoryPosts';
import TopPosts from '../components/TopPosts';
import AppContext from '../store/app-context';
import Fallback from './Fallback';

const validCategories = ['bollywood', 'technology', 'travel', 'food'];

const CategoryDetails = () => {
  const ctx = useContext(AppContext);
  const [count, setCount] = useState(4);
  const params = useParams();
  const category = params.category;

  const blogs = ctx.getBlogs(category, count);
  const blogsCount = ctx.getBlogsCount(category);
  const topBlogs = ctx.getTopBlogs(category);

  const loadMore = () => {
    setCount((prev) => prev + 4);
  };

  const showLoadMore = count < blogsCount;

  // For smooth scrolling - Scroll to top of page on navigating
  useEffect(() => {
    window.scrollTo({
      top: -200,
      left: -100,
      behavior: 'smooth',
    });
    setCount(4);
  }, [category]);

  if (!validCategories.includes(category)) {
    return <Fallback />;
  }

  return (
    <div className="container row px-4 m-0 p-md-0">
      <div className="col-12 p-0 col-md-8">
        <CategoryPosts
          heading={category}
          data={blogs}
          loadMore={loadMore}
          showLoadMore={showLoadMore}
        />
      </div>
      <div className="col-12 p-0 col-md">
        <TopPosts className="mt-5" data={topBlogs} />
        <Advertisement
          style={{ height: '800px', marginTop: '118px', marginBottom: '100px' }}
          className="d-none d-md-flex"
        />
      </div>
    </div>
  );
};

export default CategoryDetails;
