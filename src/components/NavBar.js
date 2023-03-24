import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import Hamburger from 'hamburger-react'

export const NavBar = () => {
  const [expanded, setExpanded] = useState(false);


  const handleSelect = () => {
    setExpanded(false);
  };

  return (
    <Navbar
    collapseOnSelect
    expand="md"
    expanded={expanded}
  >
    <Container>
      <Navbar.Brand>
        <h1 className='title' style={{fontSize:'28px'}}>Sober Landing</h1>
      </Navbar.Brand>
      <button className='custom-hamburger' onClick={() => setExpanded(!expanded)}>
        <Hamburger color='#5c8cac' duration={0.5}/>
      </button>
      <Navbar.Collapse
        id="responsive-navbar-nav"
        onSelect={handleSelect}
      >
        <Nav className="ms-auto">
          <NavLink
            exact
            to="/"
            activeClassName="active"
            onClick={() => setExpanded(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="active"
            onClick={() => setExpanded(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/locations"
            activeClassName="active"
            onClick={() => setExpanded(false)}
          >
            Our House
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="active"
            onClick={() => setExpanded(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/faq"
            activeClassName="active"
            onClick={() => setExpanded(false)}
          >
            FAQ
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
};

export default NavBar;