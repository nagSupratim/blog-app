import React from 'react';
import { Container } from 'react-bootstrap';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <Container className="mt-5 container-md p-0 px-md-3">
        {props.children}
      </Container>
    </React.Fragment>
  );
};

export default Layout;
