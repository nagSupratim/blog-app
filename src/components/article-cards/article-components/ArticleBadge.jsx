import React from 'react';

import classes from './ArticleBadge.module.css';

const ArticleBadge = (props) => {
  return (
    <div className={`${classes.badge} ${props.className}`} style={props.style}>
      <span className={classes.category}>{props.category}</span> / {props.date}
    </div>
  );
};

export default ArticleBadge;
