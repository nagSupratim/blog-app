import React from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './NavigateTo.module.css';

const NavigateTo = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${props.className} ${classes.navTo}`}
      onClick={() => navigate(`/blogs/${props.id}`)}
    >
      {props.children}
    </div>
  );
};

export default NavigateTo;
