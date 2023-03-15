import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleSelect = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand>
          <h1 style={{fontSize:'30px'}}>Sober Landing</h1>
        </Navbar.Brand>
          
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav bg-dark"
          onClick={() => setExpanded(!expanded)}
        />
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