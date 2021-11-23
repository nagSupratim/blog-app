import React from 'react';

import ArticleCardVertical from './article-cards/ArticleCardVertical';
import Heading from './ui/Heading';

import classes from './CategoryPosts.module.css';
import ArrowBtn from './ui/ArrowBtn';

const CategoryPosts = (props) => {
  return (
    <div className="mt-3 mt-md-5">
      <Heading className={`text-uppercase ${props.className}`}>
        {props.heading}
      </Heading>
      <div className="container pt-4 px-2 px-md-0">
        <div className="row gap-3">
          {props.data.map((data, i) => (
            <div
              className={`col-12 p-0 pe-md-5 ${i !== 0 && classes['article']}`}
              key={data.id}
            >
              <ArticleCardVertical {...data} className="pe-0 pe-md-5" />
            </div>
          ))}
        </div>
      </div>
      {props.showLoadMore && (
        <ArrowBtn
          label="load more"
          type="down"
          arrowStart={true}
          className="my-3"
          onClick={props.loadMore}
        />
      )}
    </div>
  );
};

export default CategoryPosts;
