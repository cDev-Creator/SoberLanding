import { Container, Row, Col } from 'react-bootstrap';
import { BsFillPhoneFill, BsFillPersonFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md'
import { AiFillMail } from 'react-icons/ai'

const icons = { fill: "#5c8cac", fontSize: "2rem" }

const Footer = () => {
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
            <ul className="list-group list-group-flush lead text-center">
              <li className="list-group-item d-flex align-items-center footer-li">
                <span className="fw-bold me-2"><BsFillPersonFill style={icons}/></span> Landyn Jennings
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center footer-li">
                <div className="d-flex align-items-center">
                  <span className="fw-bold me-2"><Row><MdLocationOn style={icons}/></Row></span>
                  <div className="text-start">
                    6716 Riverwood<br />
                    Live Oak, TX 78233
                  </div>
                </div>
              </li>
              <li className="list-group-item d-flex align-items-center footer-li">
                <span className="fw-bold me-2"><BsFillPhoneFill style={icons}/></span> (555) 555-5555
              </li>
              <li className="list-group-item d-flex align-items-center footer-li">
                <span className="fw-bold me-2"><AiFillMail style={icons}/></span> test@rand.test
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