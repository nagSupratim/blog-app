import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import AppContext from '../../store/app-context';
import SmSummaryCard from '../article-cards/SmSummaryCard';
import SummaryCardHorizontal from '../article-cards/SummaryCardHorizontal';
import UserCard from '../user/UserCard';

import classes from './MoreContent.module.css';

const MoreContent = (props) => {
  const ctx = useContext(AppContext);
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    setBlogs(ctx.getRelatedBlogs(props.user.id, props.blogId));
  }, [props.user.id, props.blogId]);

  if (!blogs) return <p>fallback</p>;
  return (
    <div className={`${classes.contents}`}>
      <Container>
        <h4>More from The Siren </h4>
        <div
          className={`${classes.items} mt-0 mt-md-4 row flex-column flex-md-row gap-md-4`}
        >
          {blogs.map((data) => (
            <React.Fragment key={data.id}>
              <div className="d-none d-md-block col-md">
                <span className="mt-2 mb-3 d-inline-block">Related reads</span>
                <SummaryCardHorizontal
                  title={data.title}
                  url={data.url}
                  heightauto={true}
                  id={data.id}
                />
                <div className="d-flex">
                  <div className={classes.user}>
                    <UserCard
                      user={props.user}
                      minutes={data.minutes}
                      date={data.date}
                    />
                  </div>
                </div>
              </div>
              <div className="d-block d-md-none">
                <SmSummaryCard
                  user={props.user}
                  title={data.title}
                  url={data.url}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default React.memo(MoreContent);
