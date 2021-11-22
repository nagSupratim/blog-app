import React, { useContext } from 'react';
import AppContext from '../../store/app-context';
import Advertisement from '../Advertisement';
import LatestArticles from '../LatestArticles';
import LatestPosts from '../LatestPosts';
import LatestStories from '../LatestStories';
import TopPosts from '../TopPosts';
import VerticalGallery from '../VerticalGallery';

const HomeComponent = () => {
  const ctx = useContext(AppContext);

  const blogs = ctx.blogs;
  const topBlogs = ctx.getTopBlogs();
  const latestBlogs = ctx.getLatestBlogs();
  const secondaryLatestBlogs = {
    blogs: ctx.getSecondaryLatestBlogs(),
    gallery: ctx.getSecondaryGalleryBlog(),
  };

  if (!blogs) return <p>fallback</p>;

  return (
    <>
      <VerticalGallery />
      <div className="p-3 p-md-0">
        <LatestPosts data={latestBlogs} />
        <div className="row gap-4 px-3">
          <div className="col-12 col-md-8 p-0">
            <LatestArticles data={secondaryLatestBlogs} />
          </div>
          <div className="col p-0 mt-5">
            <Advertisement
              style={{ height: '800px', marginTop: '118px' }}
              className="d-none d-md-flex"
            />
            <TopPosts className="mt-5" data={topBlogs} />
          </div>
        </div>
        <LatestStories data={latestBlogs} />
      </div>
    </>
  );
};

export default HomeComponent;
