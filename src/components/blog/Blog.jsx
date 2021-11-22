import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import AppContext from '../../store/app-context';
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
import Fallback from '../../pages/Fallback';

import classes from './Blog.module.css';
import MoreContent from './MoreContent';

const Blog = (props) => {
  const ctx = useContext(AppContext);

  const blog = ctx.getBlog(props.id);
  if (!blog) return <Fallback />;

  return (
    <div className={`d-flex flex-column gap-5 mt-5 ${classes.blog}`}>
      <Container>
        <BlogContainer>
          <h2>{blog.title}</h2>
          <div className="d-flex flex-column-reverse align-items-start gap-3 gap-md-0 flex-md-row justify-content-md-between align-items-md-center my-4">
            <UserCard
              user={ctx.getUser(blog.author)}
              minutes={blog.time}
              date={blog.date}
              badge=""
            />
            <div className="d-flex gap-2">
              <FaceBookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <YoutubeIcon />
            </div>
          </div>
          <div className={classes.content}>
            <img src={blog.url} alt={blog.title} />

            {blog.contents.map((content, i) => {
              if (content.type === 'pg')
                return <p key={i}>{content.content}</p>;
              if (content.type === 'hd')
                return <h3 key={i}>{content.content}</h3>;
              if (content.type === 'ig')
                return <img src={content.url} alt={blog.title} key={i}></img>;
              return null;
            })}
          </div>
          <div className={classes.badges}>
            {blog.badges.map((badge, i) => (
              <Badge key={i}>{badge}</Badge>
            ))}
          </div>
          <div className={classes.reactions}>
            <LikeIcon />
            <div>
              <span>{blog.likes}</span> likes
            </div>
          </div>
          <div className={classes.author}>
            <UserCard
              user={ctx.getUser(blog.author)}
              minutes={blog.time}
              date={blog.date}
              badge="WRITTEN BY"
            />
          </div>
        </BlogContainer>
        <div className={classes.actions}>
          <div className={classes.reactions}>
            <LikeIcon />
            <div>
              <span>{blog.likes}</span>
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
      <MoreContent user={ctx.getUser(blog.author)} blogId={props.id} />
    </div>
  );
};

export default Blog;
