import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigateTo = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className={props.className}
      onClick={() => navigate(`/blogs/${props.id}`)}
    >
      {props.children}
    </div>
  );
};

export default NavigateTo;
