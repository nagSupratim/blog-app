import React from 'react';
import NavigateTo from '../util/NavigateTo';
import ArticleBadge from './article-components/ArticleBadge';
import ArticleContent from './article-components/ArticleContent';
import ArticleHeading from './article-components/ArticleHeading';

import classes from './ArticleCardVertical.module.css';

const ArticleCardVertical = (props) => {
  return (
    <NavigateTo id={props.id}>
      <div
        className={`my-2 ${classes.article} ${props.className}`}
        style={props.style}
      >
        <div
          className={classes['article-image']}
          style={{
            backgroundImage: `url(${props.url})`,
          }}
        ></div>
        <section className={`${classes['article-details']} px-3 `}>
          <div className={`${classes['article-info']} px-2`}>
            <div className={classes['article-info-heading']}>
              <ArticleHeading>{props.title}</ArticleHeading>
            </div>
            <div className={classes['article-info-content']}>
              <ArticleContent>{props.content}</ArticleContent>
            </div>
          </div>
          <div className={classes['article-badge']}>
            <ArticleBadge category={props.category} date={props.date} />
          </div>
        </section>
      </div>
    </NavigateTo>
  );
};

export default ArticleCardVertical;
