import Footer from './Footer';
import Copyright from './Copyright';
import { Container, Row, Col, Card} from 'react-bootstrap';
import {BsArrowDown} from "react-icons/bs";
import ImgCarousel from './ImgCarousel';
import { Link } from 'react-router-dom';
import DisplayBeds from './DisplayBeds';

const Locations = () => {
    const bedsAvailable = 4;
    return ( 
    <div>
        <section className='p-4 text-center' style={{backgroundColor:'#80909f'}}>
            <Container>
                <h1 className='text-light'>The Riverwood Home</h1>
                <p  className='text-light'>6716 Riverwood, Live Oak, TX 78233</p>
            </Container>
        </section> 

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
                        <Card className='mb-4 mx-5'>
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
                    <Card className='mb-4 mx-5'>
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
                    <Card className='mb-5 mx-5'>
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
                        <h1>Our House</h1>
                        <p className='text-muted'>Our home is 2600 square feet and fully furnished. In addition, it has cable TV, internet, and laundry facilities. The kitchen is also stocked with pots, pans, plates and other necessities.
                            We offer a wide range of amenities to ensure that you feel comfortable and at home during your stay with us.</p>
                            <ul>
                                <li>Fully equipped kitchen with appliances and cooking utensils</li>
                                <li>Shared living areas with comfortable furniture and TV</li>
                                <li>High-speed internet and Wi-Fi access</li>
                                <li>Laundry room with washing machine and dryer</li>
                                <li>Access to nearby gym facilities</li>
                                <li>Outdoor space including a patio and spacious backyard </li>
                                <li>Access to 12-step meetings and other recovery programs</li>
                            </ul>
                        </Col>
                        
                        <Col>
                        {/* <h1 className="d-none d-sm-flex">Gallery</h1> */}
                            < ImgCarousel />
                        </Col>
                    </Row>
                    <div className='pt-5'><DisplayBeds /></div>
            </Container>
        </section>

        <section className='p-5 my-5'style={{backgroundColor:'#d4cdc4'}} >
            <Container className='text-center' >
                <h2>Want to Learn More About Your Move to Riverwood?</h2>
                <Link to='./Contact' style={{textDecoration:'none'}}><h4 className='text-muted p-2'> Message Us Today!</h4></Link>
            </Container>
        </section>

        <section className='p-4 my-5'>
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
    < Footer />
    <Copyright />
    </div>
    );
}
 
export default Locations;