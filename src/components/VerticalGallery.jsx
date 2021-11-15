import React from 'react';
import { Carousel } from 'react-bootstrap';
import ImageArticle from './article-cards/ImageArticle';

const galleryData = [
  {
    id: 'ts-001',
    url: 'https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_960_720.jpg',
    title: 'Title of vertical gallery',
    category: 'Travel',
    date: 'August 21 2021',
  },
  {
    id: 'ts-002',
    url: 'https://cdn.pixabay.com/photo/2018/05/04/07/55/snow-3373432_960_720.jpg',
    title: 'The Sound cloud You loved is doomed',
    category: 'Travel',
    date: 'August 21 2021',
  },
  {
    id: 'ts-003',
    url: 'https://cdn.pixabay.com/photo/2015/12/29/14/51/mountains-1112911_960_720.jpg',
    title: 'The Sound cloud You loved is doomed',
    category: 'Travel',
    date: 'August 21 2021',
  },
];

const VerticalGallery = () => {
  const articles = galleryData.map((data) => (
    <ImageArticle {...data} align="left" />
  ));
  const articlesSm = galleryData.map((data) => (
    <Carousel.Item className="h-100" key={data.id}>
      <ImageArticle {...data} align="left" className="h-100" />
    </Carousel.Item>
  ));
  return (
    <div className="container mt-0 mt-md-5" style={{ height: '500px' }}>
      <div className="row gap-4 d-none d-md-flex" style={{ height: '100%' }}>
        <div className="col-8 p-0">{articles[0]}</div>
        <div className="col p-0">
          <div className="row gap-3" style={{ height: '100%' }}>
            <div className="col-12 p-0">{articles[1]}</div>
            <div className="col-12 p-0">{articles[2]}</div>
          </div>
        </div>
      </div>
      <div className="row d-md-none h-100">
        <Carousel controls={false} className="h-100 p-0">
          {articlesSm}
        </Carousel>
      </div>
    </div>
  );
};

export default VerticalGallery;
