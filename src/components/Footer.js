import { Container, Row, Col } from 'react-bootstrap';
import { BsFillPhoneFill, BsFillPersonFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md'
import { AiFillMail } from 'react-icons/ai'
import { Link } from "react-router-dom";


const icons = { fill: "#5c8cac", fontSize: "2rem" }

const Footer = ({bgcolor}) => {
    return ( 
        <section className="p-4"> 
          <Container>
          <Row className="justify-content-center">
          <Col sm={2}className="d-flex align-items-center justify-content-center">
            <Col className="d-none d-md-block">
              <h2 className="mb-4">Sober Landing</h2>
              <p>To support women in recovery from alcohol and other drugs.</p>
            </Col>
          </Col>

          <Col sm={4} className="d-flex align-items-center justify-content-center">
            <ul className="list-group list-group-flush lead text-center" >
              <li style={{backgroundColor: bgcolor}} className="list-group-item d-flex align-items-center footer-li rat" >
                <span className="fw-bold me-2"><BsFillPersonFill style={icons}/></span> Landyn Jennings
              </li>
              <li style={{backgroundColor: bgcolor}} className="list-group-item d-flex justify-content-between align-items-center footer-li ">
                <div className="d-flex align-items-center">
                  <span className="fw-bold me-2"><Row><MdLocationOn style={icons}/></Row></span>
                  <div className="text-start">
                    6716 Riverwood<br />
                    Live Oak, TX 78233
                  </div>
                </div>
              </li>
              <li  style={{backgroundColor: bgcolor}} className="list-group-item d-flex align-items-center footer-li rat">
                <span className="fw-bold me-2">
                  <BsFillPhoneFill style={icons}/>
                </span>  
                <a href="tel:2707025355">(555) 555-5555 </a>
              </li>
              <li  style={{backgroundColor: bgcolor}} className="list-group-item d-flex align-items-center footer-li">
                <span className="fw-bold me-2">
                  <AiFillMail style={icons}/>
                </span> 
                <a href="mailto:mccoyng170@gmail.com">test@rand.test</a>
              </li>
            </ul>
          </Col>

          <Col sm={6} style={{height:'350px'}}>
            <iframe style={{width:'100%', height:'100%'}} src="https://maps.google.com/maps?q=6716%20riverwood%20live%20oak%20texas&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
          </Col>
          </Row>
            
          </Container>
      </section> 
    );
}
 
export default Footer;