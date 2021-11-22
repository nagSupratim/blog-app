import React from 'react';
import SummaryCardHorizontal from './article-cards/SummaryCardHorizontal';
import SummaryCardVertical from './article-cards/SummaryCardVertical';
import Heading from './ui/Heading';

const TopPosts = (props) => {
  return (
    <div className={`${props.className}`}>
      <Heading>Top Posts</Heading>
      <div className="mt-5"></div>
      <SummaryCardHorizontal {...props.data[0]} num="1" />
      {props.data.slice(1).map((data, i) => (
        <SummaryCardVertical key={i} {...data} num={i + 2} />
      ))}
    </div>
  );
};

export default TopPosts;
