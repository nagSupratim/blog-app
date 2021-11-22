import React from 'react';

import Heading from './ui/Heading';
import ArticleCardHorizontal from './article-cards/ArticleCardHorizontal';

const LatestPosts = (props) => {
  return (
    <section className="my-5">
      <Heading>The Latest</Heading>
      <div className="container mt-5">
        <div className="row text-center gap-5">
          {props.data.map((data, i) => (
            <div className="col p-0" key={i}>
              <ArticleCardHorizontal {...data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
