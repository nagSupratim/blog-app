import React from 'react';
import { Container } from 'react-bootstrap';
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

const blogData = {
  title: '5 Ways to animate a React app.',
  author: {
    id: 'user001',
    firstName: 'Supratim',
    lastName: 'Nag',
  },
  date: 'Jan 28, 2019',
  minutes: '10',
  badges: ['react', 'javascript', 'animation'],
  likes: '9.3K',
};

const Blog = (props) => {
  return (
    <div className={`d-flex flex-column gap-5 mt-5 ${classes.blog}`}>
      <Container>
        <BlogContainer>
          <h2>{blogData.title}</h2>
          <div className="d-flex flex-column-reverse align-items-start gap-3 gap-md-0 flex-md-row justify-content-md-between align-items-md-center my-4">
            <UserCard
              user={blogData.author}
              minutes={blogData.minutes}
              date={blogData.date}
            />
            <div className="d-flex gap-2">
              <FaceBookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <YoutubeIcon />
            </div>
          </div>
          <div className={classes.content}>
            <img
              src="https://miro.medium.com/max/1400/1*1Z177dpTeAp7uEFc5Zx2xg.png"
              alt="animation react"
            />
            <p>
              Animation in ReactJs app is a popular topic and there are many
              ways to create different types of animations.Many developers
              create animation exclusively using css and adding classes to HTML
              tags. This is a great way and you should use it. If you want to
              create complex animations you can pay attention to GreenSock.
              GreenSock is the most powerful animation platform. There are also
              a lot of libraries, components for creating animation in React.
            </p>
            <p>Let’s talk about them</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/personal-db-8a6c3.appspot.com/o/animation%20react%20code%20snip.png?alt=media&token=ac8ba064-4fda-485c-a493-da4f2626d960"
              alt="animation react code snip"
            />
          </div>
          <div className={classes.badges}>
            {blogData.badges.map((badge, i) => (
              <Badge key={i}>{badge}</Badge>
            ))}
          </div>
          <div className={classes.reactions}>
            <LikeIcon />
            <div>
              <span>{blogData.likes}</span> likes
            </div>
          </div>
          <div className={classes.author}>
            <UserCard
              user={blogData.author}
              minutes={blogData.minutes}
              date={blogData.date}
              badge="WRITTEN BY"
            />
          </div>
        </BlogContainer>

        <div className={classes.actions}>
          <div className={classes.reactions}>
            <LikeIcon />
            <div>
              <span>{blogData.likes}</span>
            </div>
          </div>
          <div className={classes.reactions}>
            <ShareIcon />
            <div>
              <span>Share this article</span>
            </div>
          </div>
        </div>
      </Container>
      <MoreContent user={blogData.author} />
    </div>
  );
};

export default Blog;
