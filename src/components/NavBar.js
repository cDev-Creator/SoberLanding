import {Container, Button,Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {BrowserRouter as Router,Link} from "react-router-dom";

export const NavBar = () => {
    return (

    <Navbar collapseOnSelect expand="lg">
    <Container>
        <Navbar.Brand >
        <Link to="/home" style={{fontSize:'30px', backgroundColor:'#ffffff'}}>Sober Landing</Link>
        </Navbar.Brand>
          
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav className="me-auto"></Nav>
        <Nav className="me-auto"></Nav>
            <Nav className="me-auto">
                
                <Link to="/home" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/locations"  >Our House</Link> 
                <Link to="/contact" >Contact</Link>
                <Link to="/faq" >FAQ</Link>
               
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
)};

export default NavBar;