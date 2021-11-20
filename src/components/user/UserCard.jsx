import React from 'react';
import userIcon from './user-skeleton.png';

import classes from './UserCard.module.css';

const UserCard = (props) => {
  return (
    <div className={classes.user}>
      <div className="d-flex h-100">
        <img src={userIcon} alt="user-icon" />
        <div className="ms-3 d-flex flex-column justify-content-between h-100 gap-2">
          <section
            className={`${classes.upper} ${!props.badge && classes.hidden}`}
          >
            {props.badge || 'A'}
          </section>
          <section className={classes.name}>
            {props.user.firstName} {props.user.lastName}
          </section>
          <section className={classes.lower}>
            {props.date} - {props.minutes} min read
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
