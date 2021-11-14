import React from 'react';

import classes from './ArticleHeading.module.css';

const ArticleHeading = (props) => {
  return (
    <h2 className={`${classes.heading} ${props.className}`} style={props.style}>
      {props.children}
    </h2>
  );
};

export default ArticleHeading;
