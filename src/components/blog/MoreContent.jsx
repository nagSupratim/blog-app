import React from 'react';
import SmSummaryCard from '../article-cards/SmSummaryCard';
import SummaryCardHorizontal from '../article-cards/SummaryCardHorizontal';
import UserCard from '../user/UserCard';

import classes from './MoreContent.module.css';

const contentData = [
  {
    id: 'ts-018',
    url: 'https://cdn.pixabay.com/photo/2020/04/22/12/05/adventure-5077752_960_720.jpg',
    title: 'Joshua Tree Overnight Adventure',
    tag: 'Also tagged Reactjs',
    date: 'Aug 10',
    minutes: '4',
  },
  {
    id: 'ts-019',
    url: 'https://cdn.pixabay.com/photo/2021/07/17/20/02/road-6473967_960_720.jpg',
    title: 'Joshua Tree Overnight Adventure',
    tag: 'Related reads',
    date: 'Aug 10',
    minutes: '4',
  },
  {
    id: 'ts-020',
    url: 'https://cdn.pixabay.com/photo/2016/10/20/17/41/hot-air-balloon-1756150_960_720.jpg',
    title: 'Joshua Tree Overnight Adventure',
    tag: 'Related reads',
    date: 'Aug 10',
    minutes: '4',
  },
];

const MoreContent = (props) => {
  return (
    <div className={`${classes.contents}`}>
      <h4>More from The Siren </h4>
      <div
        className={`${classes.items} mt-0 mt-md-4 row flex-column flex-md-row gap-md-4`}
      >
        {contentData.map((data) => (
          <React.Fragment key={data.id}>
            <div className="d-none d-md-block col-md">
              <span className="mt-2 mb-3 d-inline-block">{data.tag}</span>
              <SummaryCardHorizontal
                title={data.title}
                url={data.url}
                heightauto={true}
              />
              <div className="d-flex">
                <div className={classes.user}>
                  <UserCard
                    user={props.user}
                    minutes={data.minutes}
                    date={data.date}
                  />
                </div>
              </div>
            </div>
            <div className="d-block d-md-none">
              <SmSummaryCard
                user={props.user}
                title={data.title}
                url={data.url}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MoreContent;
