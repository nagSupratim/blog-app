import React from 'react';
import NavigateTo from '../util/NavigateTo';
import ArticleBadge from './article-components/ArticleBadge';
import ArticleHeading from './article-components/ArticleHeading';

import classes from './SummaryCardHorizontal.module.css';

const SummaryCardHorizontal = (props) => {
  return (
    // prettier-ignore
    <NavigateTo id={props.id}>
      <article className={`${props.className} ${classes.article}`} style={props.heightauto && { height: 'auto' }}>
        <div className={classes['article-image']} style={{backgroundImage: `url(${props.url})`}}></div>
        <div className="row">
          <div className="col-12 col-md-9">
            <section className={`${classes['article-details']} py-3`}>
              <div className={`${classes['article-info-heading']} my-2`}>
                <ArticleHeading>{props.title}</ArticleHeading>
              </div>
              <div className={classes['article-badge']}>
                {props.category && props.date && (<ArticleBadge category={props.category} date={props.date} />)}
              </div>
            </section>
          </div>
          {props.num && (
            <div className={`d-none d-md-flex col-md-3 ${classes['article-num']} d-flex justify-content-center align-items-center`}>
              <span>{props.num}</span>
            </div>
          )}
        </div>
      </article>
    </NavigateTo>
  );
};

export default SummaryCardHorizontal;
