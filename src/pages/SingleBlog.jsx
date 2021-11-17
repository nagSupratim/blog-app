import React from 'react';
import { useParams } from 'react-router-dom';
import Blog from '../components/blog/Blog';

const SingleBlog = () => {
  const params = useParams();
  const blogID = params.blogID;
  return <Blog id={blogID} />;
};

export default SingleBlog;
