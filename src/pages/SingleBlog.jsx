import React from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
  const params = useParams();
  return <h1>Blog | id : {params.blogID}</h1>;
};

export default SingleBlog;
