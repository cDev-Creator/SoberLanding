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
const lightgrey = '#f3f4f590'
const blue = '#5c8cac'
/* const blue = '#80909f' */

const Locations = () => {
    return ( 
    <div>
        <div>
        <section style={{backgroundColor:blue}}>
        <NavBar linkColor={lightgrey} activeColor='#f3f4f5' hamburgerColor={lightgrey}/>
            <Container className='text-center p-4'>
                <h1 className='title font-bigger' style={{color:grey}}>The Riverwood Home</h1>
                <p classsName='' style={{color:lightgrey}} >6716 Riverwood, Live Oak, TX 78233</p>
            </Container>
           
        </section> 
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path fill="#5c8cac" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,90.7C672,107,768,117,864,101.3C960,85,1056,43,1152,53.3C1248,64,1344,128,1392,160L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
        </div>

        <section className='px-4'>
            <Container>
                <h1 className='font-big'>What We Offer at Riverwood</h1>
                <p>At Sober Landing, our top priority is ensuring our residents feel at home. That's why we provide a living environment that promotes sobriety and overall wellness. We believe that personal freedom and comfort are essential components of successful rehabilitation, which is why we offer our residents the space they need to rebuild their lives.</p>
                <h3 className='pt-3 font-md' style={{color:blue}}>Our Sober Rooms</h3>
                <p>We offer a range of different room options to fit your needs. Our home includes a four person room with a spacious master bathroom, one two person room, two single person rooms, and we have a three person room coming soon! </p>
            </Container>
        </section>

        <section className='px-4 amenities'>
            <Container className='mt-5'>
            <Row className='space-between'>
                    <Col lg>
                        <h1 className='font-big'>Our Amenities</h1>
                        <div ><DisplayBeds/></div>
                        <p className='text-muted'>Our home is 2600 square feet and fully furnished. In addition, it has cable TV, internet, and laundry facilities. The kitchen is also stocked with pots, pans, plates and other necessities. We offer a wide range of amenities to ensure that you feel comfortable and at home during your stay with us.</p>
                            <ul style={{ listStyleType: 'none', paddingLeft: 0,marginTop:'40px'  }}>
                                <li> <FaCheck style={icons} className='icons'/> Fully equipped kitchen with appliances and cooking utensils</li>
                                <li> <FaCheck style={icons} className='icons'/> Shared living areas with comfortable furniture and TV</li>
                                <li> <FaCheck style={icons} className='icons'/> High-speed internet and Wi-Fi access</li>
                                <li> <FaCheck style={icons} className='icons'/> Laundry room with washing machine and dryer</li>
                                <li> <FaCheck style={icons} className='icons'/> Outdoor space including a patio and spacious backyard </li>
                                <li> <FaCheck style={icons} className='icons'/> Access to 12-step meetings and other recovery programs</li>
                            </ul>
                        </Col>
                        
                        <Col className= 'col-end'>
                            < ImgCarousel />
                        </Col>
                    </Row>
                   
            </Container>
        </section>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" style={{marginTop:'50px'}}>
            <path fill="#dbd7d2" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,90.7C672,107,768,117,864,101.3C960,85,1056,43,1152,53.3C1248,64,1344,128,1392,160L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <section className='p-4' style={{backgroundColor:'#dbd7d2'}} >
            <Container className='p-1'>
                <h2 className='title text-md-center text-sm-left' style={{color: blue, fontSize:'2.5rem'}}>Want to Learn More About Your Move to Riverwood?</h2>
                <Link to='./Contact' /* className='msg-today' */ style={{textDecoration:'none'}}><h4 className='p-2 title text-md-center text-sm-left' style={{color: blue}}> Message Us Today!</h4></Link>
            </Container>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" style={{marginBottom:'50px'}}>
            <path fill="#dbd7d2" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,90.7C672,107,768,117,864,101.3C960,85,1056,43,1152,53.3C1248,64,1344,128,1392,160L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>

        <section className='p-4'>
            <Container>
                <h2 className='font-big'>Your Experience at Sober Landing</h2>
                <p>
                Sober Landing was created for those ready to start a new life outside of drugs and alcohol. 
                Choosing to live in a sober living house is possibly the next step you need to take on your road to 
                recovery. At our home, you will be surrounded by a community of individuals who are also on the same journey towards recovery. Our living environment will provide you with the necessary structure to maintain a healthy and balanced lifestyle. 
                At Sober Landing, you will be given the skills and confidence needed to successfully transition into a drug and alcohol-free life.
                </p>
                <h2 className='pt-5 font-md' style={{color:blue}}>The Power of Community and Support in Recovery</h2>
                <p>
                Our home will act as a very powerful tool in your recovery journey. 
                You will be surrounded by an amazing community that understands the challenges of addiction 
                and who are committed to supporting each other through the recovery process. 
                Sober Landing offers far more than just housing solutions, we are committed to connecting each resident 
                to a supportive community that will help you to achieve lasting sobriety.
               
                </p>
            </Container>
        </section>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
  <path fill="#5c8cac" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,192C384,203,480,245,576,245.3C672,245,768,203,864,165.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>

    <div style={{backgroundColor:blue}}>
        <Footer bgcolor={blue} iconcolor={'white'} textcolor={'white'}/>
    </div>

    <Copyright />
    </div>
    );
}
 
export default Locations;