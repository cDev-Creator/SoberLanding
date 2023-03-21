import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Locations from "./components/Locations";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import UpdateBeds from "./components/UpdateBeds";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
         
          <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/about">
              <NavBar />
              <About />
            </Route>

            <Route exact path="/locations">
              <NavBar />
              <Locations />
            </Route> 

            <Route exact path="/contact">
              <NavBar />
              <Contact />
            </Route>

            <Route exact path="/faq">
              <NavBar />
              <FAQ />
            </Route> 

            <Route exact path="/updatebeds">
              <NavBar />
              <UpdateBeds />
            </Route>

          </Switch>
          </div>
      </div>
    </Router>
  );
}
export default App;