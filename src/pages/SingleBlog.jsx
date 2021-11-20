import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Blog from '../components/blog/Blog';

const SingleBlog = () => {
  const params = useParams();
  const blogID = params.blogID;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return <Blog id={blogID} />;
};

export default SingleBlog;
