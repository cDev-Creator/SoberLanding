import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Hamburger from 'hamburger-react'
/* import logo from '../assets/images/logo3.png'; */

export const NavBar = (props) => {
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
        <Container className="px-4">
          <Navbar.Brand>
            <h1 className='logo-text' style={{fontSize:'25px', color:props.linkColor}}>
              SOBER
              <span style={{color: props.linkColor === props.activeColor ?  '#5c8cac60' : '#f3f4f5', fontStyle: 'italic'}}>
                LANDING
              </span>
            </h1>
          </Navbar.Brand>
          <button className='custom-hamburger' onClick={() => setExpanded(!expanded)}>
            <Hamburger color={props.hamburgerColor} duration={0.5}/>
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
                style={{ color: props.linkColor }}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="active"
                onClick={() => setExpanded(false)}
                style={{ color: props.linkColor }}
              >
                About
              </NavLink>
              <NavLink
                to="/locations"
                activeClassName="active"
                onClick={() => setExpanded(false)}
                style={{ color: props.activeColor }}
              >
                Our House
              </NavLink>
              <NavLink
                to="/contact"
                activeClassName="active"
                onClick={() => setExpanded(false)}
                style={{ color: props.linkColor }}
              >
                Contact
              </NavLink>
              <NavLink
                to="/faq"
                activeClassName="active"
                onClick={() => setExpanded(false)}
                style={{ color: props.linkColor }}
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
