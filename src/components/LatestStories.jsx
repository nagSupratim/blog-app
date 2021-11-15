import React from 'react';
import StoryArticle from './article-cards/StoryArticle';

import Heading from './ui/Heading';

import classes from './LatestStories.module.css';
import ArrowBtn from './ui/ArrowBtn';

const storiesData = [
  {
    id: 'ts-004',
    title: 'Catch waves with an adventure guide',
    content:
      'Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces',
    category: 'TECH',
    date: 'August 21 2021',
  },
  {
    id: 'ts-005',
    title: 'Catch waves with an adventure guide',
    content:
      'Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces',
    category: 'STYLE',
    date: 'August 21 2021',
  },
  {
    id: 'ts-006',
    title: 'Catch waves with an adventure guide',
    content:
      'Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces',
    category: 'TECH',
    date: 'August 21 2021',
  },
];

const LatestStories = () => {
  return (
    <div className="my-5">
      <Heading>Latest Stories</Heading>
      <div className={`container px-0 my-5 ${classes.stories}`}>
        <div className="row text-center gap-md-5 m-3">
          {storiesData.map((data, i) => (
            <div className="col-12 col-md p-0" key={data.id}>
              <StoryArticle
                {...data}
                className={`my-md-5 ${i !== 0 && classes['single-article']}`}
              />
            </div>
          ))}
        </div>
      </div>
      <ArrowBtn
        label="view more"
        type="right"
        arrowStart={false}
        className="ms-3 ms-md-5"
      />
    </div>
  );
};

export default LatestStories;
