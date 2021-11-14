import React from 'react';

import classes from './Advertisement.module.css';

const Advertisement = (props) => {
  return (
    <div
      className={`${classes.advertisement} ${props.className}`}
      style={props.style}
    >
      <h2>Advertisement</h2>
    </div>
  );
};

export default Advertisement;
