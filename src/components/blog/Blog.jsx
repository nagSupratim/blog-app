import React from 'react';
import Badge from '../ui/Badge';
import BlogContainer from '../ui/BlogContainer';
import {
  FaceBookIcon,
  InstagramIcon,
  LikeIcon,
  ShareIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../ui/icons/icons';
import UserCard from '../user/UserCard';

import classes from './Blog.module.css';
import MoreContent from './MoreContent';

const Blog = (props) => {
  return (
    <div className={`d-flex flex-column gap-5 my-5 ${classes.blog}`}>
      <BlogContainer>
        <h1>{props.data.title}</h1>
        <div className="d-flex justify-content-between align-items-center my-4">
          <UserCard
            user={props.data.author}
            minutes={props.data.minutes}
            date={props.data.date}
          />
          <div className="d-flex gap-2">
            <FaceBookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YoutubeIcon />
          </div>
        </div>
        <div className={classes.content}>abcd</div>
        <div className={classes.badges}>
          {props.data.badges.map((badge) => (
            <Badge>{badge}</Badge>
          ))}
        </div>
        <div className={classes.reactions}>
          <LikeIcon />
          <div>
            <span>{props.data.likes}</span> likes
          </div>
        </div>
        <div className={classes.author}>
          <UserCard
            user={props.data.author}
            minutes={props.data.minutes}
            date={props.data.date}
            badge="WRITTEN BY"
          />
        </div>
      </BlogContainer>

      <div className={classes.actions}>
        <div className={classes.reactions}>
          <LikeIcon />
          <div>
            <span>{props.data.likes}</span>
          </div>
        </div>
        <div className={classes.reactions}>
          <ShareIcon />
          <div>
            <span>Share this article</span>
          </div>
        </div>
      </div>

      <MoreContent user={props.data.author} />
    </div>
  );
};

export default Blog;
