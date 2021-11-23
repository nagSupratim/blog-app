import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import classes from './SecondaryNavigation.module.css';

const SecondaryNavigation = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="white" className={`px-2 py-0 px-md-5 ${classes.navBar}`}>
      <Container>
        <Navbar.Brand
          as={Link}
          to="/home"
          className="d-flex align-items-center"
        >
          <span className={classes.rotateBrandText}>The</span>
          <span className={classes.normalBrandText}>Siren</span>
        </Navbar.Brand>
        <Nav className="w-100 justify-content-end align-items-center mx-md-5 px-md-5">
          <Nav.Link>
            <Button
              variant="outline-success"
              size="sm"
              onClick={() => {
                navigate('/home');
              }}
            >
              Get Started
            </Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default SecondaryNavigation;
