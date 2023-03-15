import {Container, Nav, Navbar} from 'react-bootstrap';
import {BrowserRouter as NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>
            <h1 style={{fontSize:'30px'}}>Sober Landing</h1>
          </Navbar.Brand>
            
          <Navbar.Toggle aria-controls="responsive-navbar-nav bg-dark" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink exact to="/home" activeClassName="active">
                Home
              </NavLink>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
              <NavLink to="/locations" activeClassName="active">
                Our House
              </NavLink>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
              <NavLink to="/faq" activeClassName="active">
                FAQ
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default NavBar;