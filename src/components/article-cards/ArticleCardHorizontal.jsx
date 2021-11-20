import React from 'react';

import CardWrap from '../ui/CardWrap';
import NavigateTo from '../util/NavigateTo';
import ArticleBadge from './article-components/ArticleBadge';
import ArticleContent from './article-components/ArticleContent';
import ArticleHeading from './article-components/ArticleHeading';

import classes from './ArticleCardHorizontal.module.css';

const ArticleCardHorizontal = (props) => {
  return (
    <NavigateTo id={props.id}>
      <CardWrap className={classes.article}>
        <div
          className={classes['article-image']}
          style={{
            backgroundImage: `url(${props.url})`,
          }}
        ></div>
        <section className={`${classes['article-details']} px-5 py-4`}>
          <div className={`${classes['article-info']} px-2`}>
            <div className={classes['article-info-heading']}>
              <ArticleHeading>{props.title}</ArticleHeading>
            </div>
            <div className={classes['article-info-content']}>
              <ArticleContent>{props.summary}</ArticleContent>
            </div>
          </div>
          <div className={classes['article-badge']}>
            <ArticleBadge category={props.category} date={props.date} />
          </div>
        </section>
      </CardWrap>
    </NavigateTo>
  );
};

export default ArticleCardHorizontal;
