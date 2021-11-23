import React from 'react';
import NavigateTo from '../util/NavigateTo';
import ArticleBadge from './article-components/ArticleBadge';
import ArticleHeading from './article-components/ArticleHeading';

import classes from './SummaryCardVertical.module.css';

const SummaryCardVertical = (props) => {
  return (
    <NavigateTo id={props.id}>
      <article className={`${props.className} ${classes.article}`}>
        <div
          className={classes['article-image']}
          style={{
            backgroundImage: `url(${props.url})`,
          }}
        ></div>
        <div className="row">
          <div className="col-12 col-md-9">
            <section className={`${classes['article-details']}`}>
              <div className={`${classes['article-info-heading']}`}>
                <ArticleHeading>{props.title}</ArticleHeading>
              </div>
              <div className={classes['article-badge']}>
                <ArticleBadge category={props.category} date={props.date} />
              </div>
            </section>
          </div>
          <div
            className={`d-none d-md-flex col-md-3 ${classes['article-num']} justify-content-center align-items-center`}
          >
            <span>{props.num}</span>
          </div>
        </div>
      </article>
    </NavigateTo>
  );
};

export default SummaryCardVertical;
