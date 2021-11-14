import React from 'react';
import ArticleBadge from './article-components/ArticleBadge';
import ArticleHeading from './article-components/ArticleHeading';

import classes from './SummaryCardHorizontal.module.css';

const SummaryCardHorizontal = (props) => {
  return (
    <article className={`${props.className} ${classes.article}`}>
      <div
        className={classes['article-image']}
        style={{
          backgroundImage: `url(${props.url})`,
        }}
      ></div>
      <div className="row">
        <div className="col-9">
          <section className={`${classes['article-details']} py-3`}>
            <div className={`${classes['article-info-heading']} my-2`}>
              <ArticleHeading>{props.title}</ArticleHeading>
            </div>
            <div className={classes['article-badge']}>
              <ArticleBadge category={props.category} date={props.date} />
            </div>
          </section>
        </div>
        <div
          className={`col ${classes['article-num']} d-flex justify-content-center align-items-center`}
        >
          {props.num}
        </div>
      </div>
    </article>
  );
};

export default SummaryCardHorizontal;