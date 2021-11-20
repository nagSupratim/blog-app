import React from 'react';
import NavigateTo from '../util/NavigateTo';
import ArticleBadge from './article-components/ArticleBadge';
import ArticleContent from './article-components/ArticleContent';
import ArticleHeading from './article-components/ArticleHeading';

import classes from './StoryArticle.module.css';

const StoryArticle = (props) => {
  return (
    <NavigateTo id={props.id}>
      <article
        className={`${classes['article']} px-0 px-md-5 py-4 ${props.className}`}
      >
        <div className={`${classes['article-info']}`}>
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
      </article>
    </NavigateTo>
  );
};

export default StoryArticle;
