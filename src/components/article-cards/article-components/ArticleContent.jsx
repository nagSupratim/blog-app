import React from 'react';

import classes from './ArticleContent.module.css';

const ArticleContent = (props) => {
  return (
    <p className={`${classes.content} ${props.className}`} style={props.style}>
      {props.children}
    </p>
  );
};

export default ArticleContent;
