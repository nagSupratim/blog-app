import React, { useContext } from 'react';
import { Carousel } from 'react-bootstrap';
import AppContext from '../store/app-context';
import ImageArticle from './article-cards/ImageArticle';

const VerticalGallery = () => {
  const ctx = useContext(AppContext);
  const galleryData = ctx.getPrimaryGalleryBlogs();

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
