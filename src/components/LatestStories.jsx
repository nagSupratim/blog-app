import React from 'react';
import { useNavigate } from 'react-router-dom';
import StoryArticle from './article-cards/StoryArticle';

import Heading from './ui/Heading';

import classes from './LatestStories.module.css';
import ArrowBtn from './ui/ArrowBtn';

const LatestStories = (props) => {
  const navigate = useNavigate();
  return (
    <div className="my-5">
      <Heading>Latest Stories</Heading>
      <div className={`container px-0 my-5 ${classes.stories}`}>
        <div className="row text-center gap-md-5 m-3">
          {props.data.map((data, i) => (
            <div className="col-12 col-md p-0" key={i}>
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
        onClick={() => {
          navigate('/category/bollywood');
        }}
      />
    </div>
  );
};

export default LatestStories;
