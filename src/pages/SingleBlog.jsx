import React from 'react';
import { useParams } from 'react-router-dom';
import Blog from '../components/blog/Blog';

const blogData = {
  title: '5 Ways to animate a React app.',
  author: {
    id: 'user001',
    firstName: 'Supratim',
    lastName: 'Nag',
  },
  date: 'Jan 28, 2019',
  minutes: '10',
  badges: ['react', 'javascript', 'animation'],
  likes: '9.3K',
};

const SingleBlog = () => {
  return <Blog data={blogData} />;
};

export default SingleBlog;
