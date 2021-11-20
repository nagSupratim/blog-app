import React from 'react';

import Heading from './ui/Heading';
import ArticleCardHorizontal from './article-cards/ArticleCardHorizontal';

const postsData = [
  {
    id: 'ts-004',
    url: 'https://cdn.pixabay.com/photo/2018/05/14/23/43/street-3401918_960_720.jpg',
    title: 'Joshua Tree Overnight Adventure',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero ipsa impedit rerum at ut adipisci dicta voluptatem. Laboriosam, fuga?',
    category: 'Travel',
    date: 'August 21 2021',
  },
  {
    id: 'ts-005',
    url: 'https://cdn.pixabay.com/photo/2020/10/01/17/11/temple-5619197_960_720.jpg',
    title: 'Joshua Tree Overnight Adventure',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero ipsa impedit rerum at ut adipisci dicta voluptatem. Laboriosam, fuga?',
    category: 'Travel',
    date: 'August 21 2021',
  },
  {
    id: 'ts-006',
    url: 'https://cdn.pixabay.com/photo/2013/08/10/22/55/temple-171377_960_720.jpg',
    title: 'Joshua Tree Overnight Adventure',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero ipsa impedit rerum at ut adipisci dicta voluptatem. Laboriosam, fuga?',
    category: 'Travel',
    date: 'August 21 2021',
  },
];

const LatestPosts = (props) => {
  return (
    <section className="my-5">
      <Heading>The Latest</Heading>
      <div className="container mt-5">
        <div className="row text-center gap-5">
          {props.data.map((data) => (
            <div className="col p-0" key={data.id}>
              <ArticleCardHorizontal {...data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
