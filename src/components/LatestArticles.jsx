import React from 'react';

import ArticleCardVertical from './article-cards/ArticleCardVertical';
import ImageArticle from './article-cards/ImageArticle';
import ArrowBtn from './ui/ArrowBtn';
import Heading from './ui/Heading';

import classes from './LatestArticles.module.css';

const LatestArticles = (props) => {
  return (
    <section className="my-5">
      <Heading>Latest Article</Heading>
      <div className="container mt-5 pt-5 px-0">
        <div className="row gap-5 ">
          {props.data.blogs.map((data) => (
            <div
              className={`col-12 p-0 pe-md-5 ${classes.article}`}
              key={data.id}
            >
              <ArticleCardVertical {...data} className="pe-md-5" />
            </div>
          ))}
        </div>
      </div>
      <ArrowBtn
        label="load more"
        type="down"
        arrowStart={true}
        className="my-3 ms-4"
      />
      <div className="d-none d-md-block my-5 py-5" style={{ height: '610px' }}>
        <ImageArticle {...props.data.gallery} align="center" />
      </div>
    </section>
  );
};

export default LatestArticles;
