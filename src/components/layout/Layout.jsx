import React from 'react';
import { Container } from 'react-bootstrap';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <Container>{props.children}</Container>
    </React.Fragment>
  );
};

export default Layout;
