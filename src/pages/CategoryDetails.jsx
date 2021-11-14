import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryDetails = () => {
  const params = useParams();
  return <h1>Page : {params.category}</h1>;
};

export default CategoryDetails;
