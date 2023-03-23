import NavBar from './NavBar';
import Footer from './Footer';
import Copyright from './Copyright';
import { Container, Row, Col, Card} from 'react-bootstrap';
import {BsArrowDown} from "react-icons/bs";
import ImgCarousel from './ImgCarousel';
import { Link } from 'react-router-dom';
import DisplayBeds from './DisplayBeds';
import { FaCheck } from 'react-icons/fa';

const icons = {fill:'#d4cdc4', marginRight: '10px'};
const grey = '#f3f4f5';

const Locations = () => {
    const bedsAvailable = 4;
    return ( 
    <div style={{backgroundColor:'#5c8cac07'}}>
        <section className='text-center' style={{backgroundColor:'#80909f'}}>
        <NavBar/>
            <Container className='p-4'>
                <h1 className='title' style={{color:grey}}>The Riverwood Home</h1>
                <p classsName='' style={{color:grey}} >6716 Riverwood, Live Oak, TX 78233</p>
            </Container>

        </section> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path fill="#80909f" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,90.7C672,107,768,117,864,101.3C960,85,1056,43,1152,53.3C1248,64,1344,128,1392,160L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>

        <section className='p-4'>
            <Container>
                <h1>What We Offer at Riverwood</h1>
                <p>At Sober Landing, our top priority is ensuring our residents feel at home. That's why we provide a living environment that promotes sobriety and overall wellness. We believe that personal freedom and comfort are essential components of successful rehabilitation, which is why we offer our residents the space and resources they need to rebuild their lives.</p>
                <h3>Our Sober Rooms</h3>
                <p>We offer a range of room options to fit your needs and preferences. Our home includes three three-person rooms, two double rooms, and two single rooms, all furnished with a single bed, dresser, and hanging area for your clothing. We also provide linens for your convenience.</p>
            </Container>
        </section>

        <section className='py-5'>
            <Container>
                <Row className='text-center'>
                    <Col md >
                        <Card className='mb-4 mx-5 p-3' style={{borderRadius: '30% 70% 70% 30% / 30% 50% 50% 70% '}}>
                        <Card.Body style={{flexGrow: 1}}>
                            <Card.Title className='mb-3' style={{ color: "#3f4f62" }}>Deposit</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                This is the house deposit sub
                            </Card.Subtitle>
                            <Card.Text>
                            At Sober Landing, we require a refundable deposit of $500 to ensure the upkeep of the house and property during your stay.
                            </Card.Text>
                            <h3><span className='d-block d-md-none arrow-down'><BsArrowDown/></span></h3>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md >
                    <Card className='mb-4 mx-5 p-3' style={{borderRadius: '28% 72% 49% 51% / 36% 36% 64% 64%'}}>
                        <Card.Body >
                            <Card.Title className='mb-3' style={{ color: "#3f4f62" }}>Your Room</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                This is the house sub
                            </Card.Subtitle>
                            <Card.Text>
                            Our shared rooms come with single beds, dressers, and hanging areas for your clothing.
                            </Card.Text>
                            <h3><span className='d-block d-md-none arrow-down'><BsArrowDown/></span></h3>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg >
                    <Card className='mb-5 mx-5 p-3' style={{borderRadius: '64% 36% 56% 44% / 40% 44% 56% 53%'}} >
                        <Card.Body>
                            <Card.Title className='mb-3' style={{ color: "#3f4f62" }}>House Fund</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                This is the house fund sub
                            </Card.Subtitle>
                            <Card.Text>
                            We have a house fund of $20 per month to support shared food and other household expenses.
                            </Card.Text>
                            <h3><span className='d-block d-md-none arrow-down'><BsArrowDown/></span></h3>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='p-4'>
            <Container>
                <Row>
                    <Col lg>
                        <h1>Riverwood Amenities</h1>
                        <div ><DisplayBeds/></div>
                        <p className='text-muted'>Our home is 2600 square feet and fully furnished. In addition, it has cable TV, internet, and laundry facilities. The kitchen is also stocked with pots, pans, plates and other necessities.
                            We offer a wide range of amenities to ensure that you feel comfortable and at home during your stay with us.</p>
                            <ul>
                                <li> <FaCheck style={icons}/>Fully equipped kitchen with appliances and cooking utensils</li>
                                <li> <FaCheck style={icons}/>Shared living areas with comfortable furniture and TV</li>
                                <li> <FaCheck style={icons}/> High-speed internet and Wi-Fi access</li>
                                <li> <FaCheck style={icons}/>Laundry room with washing machine and dryer</li>
                                <li> <FaCheck style={icons}/>Access to nearby gym facilities</li>
                                <li> <FaCheck style={icons}/>Outdoor space including a patio and spacious backyard </li>
                                <li> <FaCheck style={icons}/>Access to 12-step meetings and other recovery programs</li>
                            </ul>
                        </Col>
                        
                        <Col>
                        {/* <h1 className="d-none d-sm-flex">Gallery</h1> */}
                            < ImgCarousel />
                        </Col>
                    </Row>
                   
            </Container>
        </section>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path fill="#d4cdc4" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,90.7C672,107,768,117,864,101.3C960,85,1056,43,1152,53.3C1248,64,1344,128,1392,160L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <section style={{backgroundColor:'#d4cdc4'}} >
            <Container className='text-center p-1'>
                <h2 className='title' style={{color: grey}}>Want to Learn More About Your Move to Riverwood?</h2>
                <Link to='./Contact' /* className='msg-today' */ style={{textDecoration:'none'}}><h4 className='p-2' style={{color: grey}}> Message Us Today!</h4></Link>
            </Container>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path fill="#d4cdc4" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,90.7C672,107,768,117,864,101.3C960,85,1056,43,1152,53.3C1248,64,1344,128,1392,160L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>

        <section className='pl-4 pr-4 pt-4 mt-5'>
            <Container>
                <h3>Your Experience at Sober Landing</h3>
                <p>
                Staying at Sober Landing will be an incredibly transformative experience as it will provide you with the necessary tools, resources, and support to help you learn how to live drug and alcohol-free. You will be surrounded by a community of individuals who are also on the same journey towards recovery.
                Our living environment will provide you with the necessary structure and routine needed to maintain a healthy and balanced lifestyle. 
                At Sober Landing, you will be given the skills and confidence needed to successfully transition into a drug and alcohol-free life.
                </p>
                <h3>The Power of Community and Support in Recovery</h3>
                <p>
                Our sober house is designed to be a powerful tool in your recovery journey.
                At our sober house, you will be surrounded by a community of individuals who understand the challenges of addiction and who are committed to supporting each other through the recovery process. 
                Our sober house is not just a place to stay; it is a powerful asset that can help you transform your life and achieve lasting sobriety.
                </p>
            </Container>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  viewBox="0 0 700 200"><path d="M2.351564645767212,125.77005004882812C40.38242373347283,119.33971248626709,106.29451078534126,92.74903343200684,187.86795043945312,94.40254974365234C269.441390093565,96.05606605529785,316.6763832092285,132.54991607666017,400.2707824707031,133.8359832763672C483.86518173217775,135.1220504760742,518.4814445495606,97.36901878356933,595.6455078125,100.6760482788086C672.8095710754394,103.98307777404786,739.5686026000976,139.86301830291748,776.6808471679688,149.96783447265625" fill="none" stroke-width="1" stroke="#ac7c5c" stroke-linecap="round" stroke-opacity="0.31"></path><defs><linearGradient id="SvgjsLinearGradient1002"><stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop><stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg>
            < Footer />
    <Copyright />
    </div>
    );
}
 
export default Locations;