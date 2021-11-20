import React from 'react';
import SummaryCardHorizontal from './article-cards/SummaryCardHorizontal';
import SummaryCardVertical from './article-cards/SummaryCardVertical';
import Heading from './ui/Heading';

const postsData = [
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

const TopPosts = (props) => {
  return (
    <div className={`${props.className}`}>
      <Heading>Top Posts</Heading>
      <div className="mt-5"></div>
      <SummaryCardHorizontal {...props.data[0]} num="1" />
      {props.data.slice(1).map((data, i) => (
        <SummaryCardVertical key={data.id} {...data} num={i + 2} />
      ))}
    </div>
  );
};

export default TopPosts;
