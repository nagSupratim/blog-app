import React from 'react';
import NavigateTo from '../util/NavigateTo';
import ArticleBadge from './article-components/ArticleBadge';
import ArticleHeading from './article-components/ArticleHeading';

import classes from './ImageArticle.module.css';

const ImageArticle = (props) => {
  return (
    <NavigateTo id={props.id} className="h-100">
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
    </NavigateTo>
  );
};

export default ImageArticle;
