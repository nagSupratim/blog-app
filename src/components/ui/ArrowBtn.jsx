import React from 'react';

import classes from './ArrowBtn.module.css';

const ArrowBtn = (props) => {
  return (
    <button
      className={`${props.className} ${classes.btn}`}
      onClick={props.onClick}
    >
      {props.arrowStart && (
        <span className={`${classes.arrow} ${classes[props.type]}`}>
          &#8592;
        </span>
      )}{' '}
      <span className={classes.label}>{props.label}</span>{' '}
      {!props.arrowStart && (
        <span className={`${classes.arrow} ${classes[props.type]}`}>
          &#8592;
        </span>
      )}
    </button>
  );
};

export default ArrowBtn;
