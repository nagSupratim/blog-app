import React from 'react';

import classes from './CardWrap.module.css';

const CardWrap = (props) => {
  return (
    <article
      className={`${classes.card} ${props.className}`}
      style={props.style}
    >
      {props.children}
    </article>
  );
};

export default CardWrap;
