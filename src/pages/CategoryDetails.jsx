import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Advertisement from '../components/Advertisement';
import CategoryPosts from '../components/CategoryPosts';
import TopPosts from '../components/TopPosts';

const validCategories = [
  'bollywood',
  'technology',
  'hollywood',
  'food',
  'fitness',
];

const postsData = [
  {
    id: 'ts-011',
    url: 'https://cdn.pixabay.com/photo/2016/08/12/23/47/mountains-1590012_960_720.jpg',
    title: 'Catch waves with an adventure guide',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero ipsa impedit rerum at ut adipisci dicta voluptatem. Laboriosam, fuga?',
    category: 'Travel',
    date: 'August 21 2021',
  },
  {
    id: 'ts-012',
    url: 'https://cdn.pixabay.com/photo/2021/07/20/13/45/lake-6480788_960_720.jpg',
    title: 'Catch waves with an adventure guide',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero ipsa impedit rerum at ut adipisci dicta voluptatem. Laboriosam, fuga?',
    category: 'Travel',
    date: 'August 21 2021',
  },
  {
    id: 'ts-013',
    url: 'https://cdn.pixabay.com/photo/2017/01/14/13/59/castelmezzano-1979546_960_720.jpg',
    title: 'Catch waves with an adventure guide',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero ipsa impedit rerum at ut adipisci dicta voluptatem. Laboriosam, fuga?',
    category: 'Travel',
    date: 'August 21 2021',
  },
  {
    id: 'ts-014',
    url: 'https://cdn.pixabay.com/photo/2016/02/07/19/50/mountaineer-1185474_960_720.jpg',
    title: 'Catch waves with an adventure guide',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero ipsa impedit rerum at ut adipisci dicta voluptatem. Laboriosam, fuga?',
    category: 'Travel',
    date: 'August 21 2021',
  },
  {
    id: 'ts-015',
    url: 'https://cdn.pixabay.com/photo/2016/10/18/08/13/travel-1749508_960_720.jpg',
    title: 'Catch waves with an adventure guide',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero ipsa impedit rerum at ut adipisci dicta voluptatem. Laboriosam, fuga?',
    category: 'Travel',
    date: 'August 21 2021',
  },
  {
    id: 'ts-016',
    url: 'https://cdn.pixabay.com/photo/2018/08/19/10/16/nature-3616194_960_720.jpg',
    title: 'Catch waves with an adventure guide',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero ipsa impedit rerum at ut adipisci dicta voluptatem. Laboriosam, fuga?',
    category: 'Travel',
    date: 'August 21 2021',
  },
  {
    id: 'ts-017',
    url: 'https://cdn.pixabay.com/photo/2017/12/01/03/17/landscape-2990060_960_720.jpg',
    title: 'Catch waves with an adventure guide',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero ipsa impedit rerum at ut adipisci dicta voluptatem. Laboriosam, fuga?',
    category: 'Travel',
    date: 'August 21 2021',
  },
];

const CategoryDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const category = params.category;

  useEffect(() => {
    window.scrollTo({
      top: -200,
      left: -100,
      behavior: 'smooth',
    });
  }, [category]);

  useEffect(() => {
    if (!validCategories.includes(category)) {
      navigate('/error');
    }
  }, [category, navigate]);

  return (
    <div className="container row px-4 m-0 p-md-0">
      <div className="col-12 p-0 col-md-8">
        <CategoryPosts heading={category} data={postsData} />
      </div>
      <div className="col-12 p-0 col-md">
        <TopPosts className="mt-5" />
        <Advertisement
          style={{ height: '800px', marginTop: '118px' }}
          className="d-none d-md-flex"
        />
      </div>
    </div>
  );
};

export default CategoryDetails;
