import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const navigationData = [
  { id: 1, text: 'bollywood', to: 'bollywood' },
  { id: 2, text: 'technology', to: 'technology' },
  { id: 3, text: 'travel', to: 'travel' },
  { id: 4, text: 'food', to: 'food' },
];

const MainNavigation = () => {
  const categoryLinks = navigationData.map((navdata) => (
    <Nav.Link
      key={navdata.id}
      as={Link}
      to={`/category/${navdata.to}`}
      href={`/category/${navdata.to}`}
      className="text-capitalize"
    >
      {navdata.text}
    </Nav.Link>
  ));

  return (
    <Navbar
      bg="white"
      expand="md"
      className={`fixed-top px-2 py-0 px-md-5 ${classes.navBar}`}
      collapseOnSelect
    >
      <Container className="flex-md-column">
        <Navbar.Brand
          as={Link}
          to="/home"
          className="d-flex align-items-center"
        >
          <span className={classes.rotateBrandText}>The</span>
          <span className={classes.normalBrandText}>Siren</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`w-100 justify-content-center mt-2 ${classes.navBarCol}`}
        >
          <Nav className="w-100 justify-content-around align-items-center mx-md-5 px-md-5">
            <Nav.Link as={Link} to="/home" href="/home">
              Home
            </Nav.Link>
            {categoryLinks}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
