import React from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowBtn from '../components/ui/ArrowBtn';

const Fallback = () => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate('/home');
  };

  return (
    <div className="mt-5 pt-5 px-5 px-md-0 d-flex flex-column gap-5 justify-content-center align-items-center">
      <h1 className="text-center">Something went wrong ☹️</h1>
      <ArrowBtn
        label="to home"
        type="left"
        arrowStart={true}
        onClick={onBack}
      />
    </div>
  );
};

export default Fallback;
