import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Locations from "./components/Locations";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";

import {Container, Button,Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
function App() {
  return (
    <Router>
     
      <div className="App">
          <NavBar />
          <div className="content">
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/locations">
              <Locations />
            </Route> 

            <Route exact path="/contact">
              <Contact />
            </Route>

            <Route exact path="/faq">
              <FAQ />
              </Route> 
          </Switch>
          </div>
      </div>
    </Router>
  );
}
export default App;