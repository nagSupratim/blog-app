import React from 'react';
import ArticleBadge from './article-components/ArticleBadge';
import ArticleHeading from './article-components/ArticleHeading';

import classes from './ImageArticle.module.css';

const ImageArticle = (props) => {
  return (
    <article
      className={`${classes.imageArticle} ${props.className}`}
      style={{
        backgroundImage: `url("${props.url}")`,
      }}
    >
      <div className={`${classes.content} ${classes[props.align]}`}>
        <ArticleHeading className="text-white">{props.title}</ArticleHeading>
        <ArticleBadge
          className="mt-2"
          category={props.category}
          date={props.date}
        />
      </div>
    </article>
  );
};

export default ImageArticle;
