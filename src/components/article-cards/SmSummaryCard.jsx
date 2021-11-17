import React from 'react';
import NavigateTo from '../util/NavigateTo';

const SmSummaryCard = (props) => {
  return (
    <NavigateTo id={props.id}>
      <div className="w-100 row py-3 my-2">
        <div className="col-8 h-100">
          <div className="h-75">
            <h4 style={{ fontSize: '18px' }}>{props.title}</h4>
          </div>
          <div className="h-25">
            <span>
              {props.user.firstName} {props.user.lastName}
            </span>
          </div>
        </div>
        <div className="col p-0 h-100">
          <img
            src={props.url}
            style={{ objectFit: 'cover' }}
            alt={props.title}
            className="w-100"
          />
        </div>
      </div>
    </NavigateTo>
  );
};

export default SmSummaryCard;
