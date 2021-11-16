import React from 'react';
import classes from './BlogContainer.module.css';

const BlogContainer = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default BlogContainer;
