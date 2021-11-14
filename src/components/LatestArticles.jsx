import React from 'react';

import ArticleCardVertical from './article-cards/ArticleCardVertical';
import ImageArticle from './article-cards/ImageArticle';
import ArrowBtn from './ui/ArrowBtn';
import Heading from './ui/Heading';

const articlesData = [
  {
    id: 'ts-007',
    url: 'https://cdn.pixabay.com/photo/2018/05/14/23/43/street-3401918_960_720.jpg',
    title: 'Catch waves with an adventure guide',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero ipsa impedit rerum at ut adipisci dicta voluptatem. Laboriosam, fuga?',
    category: 'Travel',
    date: 'August 21 2021',
  },
  {
    id: 'ts-008',
    url: 'https://cdn.pixabay.com/photo/2020/10/01/17/11/temple-5619197_960_720.jpg',
    title: 'Catch waves with an adventure guide',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero ipsa impedit rerum at ut adipisci dicta voluptatem. Laboriosam, fuga?',
    category: 'Travel',
    date: 'August 21 2021',
  },
  {
    id: 'ts-009',
    url: 'https://cdn.pixabay.com/photo/2013/08/10/22/55/temple-171377_960_720.jpg',
    title: 'Catch waves with an adventure guide',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero ipsa impedit rerum at ut adipisci dicta voluptatem. Laboriosam, fuga?',
    category: 'Travel',
    date: 'August 21 2021',
  },
  {
    id: 'ts-010',
    url: 'https://cdn.pixabay.com/photo/2019/08/14/04/39/temple-4404706_960_720.jpg',
    title: 'Catch waves with an adventure guide',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero ipsa impedit rerum at ut adipisci dicta voluptatem. Laboriosam, fuga?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero ipsa impedit rerum at ut adipisci dicta voluptatem. Laboriosam, fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero ipsa impedit rerum at ut adipisci dicta voluptatem. Laboriosam, fuga?',
    category: 'Travel',
    date: 'August 21 2021',
  },
];

const galleryData = {
  url: 'https://cdn.pixabay.com/photo/2019/11/12/13/38/wanderer-4621118_960_720.jpg',
  title: 'Title of vertical gallery',
  category: 'Travel',
  date: 'August 21 2021',
};

const LatestArticles = () => {
  return (
    <section className="my-5">
      <Heading>Latest Article</Heading>
      <div className="container mt-5 pt-5">
        <div className="row gap-5 ">
          {articlesData.map((data) => (
            <div className="col-12 p-0 pe-5" key={data.id}>
              <ArticleCardVertical {...data} className="pe-5" />
            </div>
          ))}
        </div>
      </div>
      <ArrowBtn
        label="load more"
        type="down"
        arrowStart={true}
        className="my-3 ms-4"
      />
      <div className="my-5 py-5" style={{ height: '590px' }}>
        <ImageArticle {...galleryData} align="center" />
      </div>
    </section>
  );
};

export default LatestArticles;
