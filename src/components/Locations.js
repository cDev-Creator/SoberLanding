import NavBar from './NavBar';
import Footer from './Footer';
import Copyright from './Copyright';
import { Container, Row, Col, Card} from 'react-bootstrap';
import {BsArrowDown} from "react-icons/bs";
import ImgCarousel from './ImgCarousel';
import { Link } from 'react-router-dom';
import DisplayBeds from './DisplayBeds';
import { FaCheck } from 'react-icons/fa';

const icons = { fill: '#d4cdc4', marginRight: '10px', width: '1.5rem', height: '1.5rem' };

const grey = '#f3f4f5';
const lightgrey = '#f3f4f590'
const blue = '#5c8cac'
/* const blue = '#80909f' */

const Locations = () => {
    const bedsAvailable = 4;
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
                <p>At Sober Landing, our top priority is ensuring our residents feel at home. That's why we provide a living environment that promotes sobriety and overall wellness. We believe that personal freedom and comfort are essential components of successful rehabilitation, which is why we offer our residents the space and resources they need to rebuild their lives.</p>
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
                            <ul style={{fontSize: '1.2rem'}}>
                                <li> <FaCheck style={icons}/> Fully equipped kitchen with appliances and cooking utensils</li>
                                <li> <FaCheck style={icons}/> Shared living areas with comfortable furniture and TV</li>
                                <li> <FaCheck style={icons}/> High-speed internet and Wi-Fi access</li>
                                <li> <FaCheck style={icons}/> Laundry room with washing machine and dryer</li>
                                <li> <FaCheck style={icons}/> Outdoor space including a patio and spacious backyard </li>
                                <li> <FaCheck style={icons}/> Access to 12-step meetings and other recovery programs</li>
                            </ul>
                        </Col>
                        
                        <Col className= 'col-end'>
                        {/* <h1 className="d-none d-sm-flex">Gallery</h1> */}
                            < ImgCarousel />
                        </Col>
                    </Row>
                   
            </Container>
        </section>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path fill="#dbd7d2" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,90.7C672,107,768,117,864,101.3C960,85,1056,43,1152,53.3C1248,64,1344,128,1392,160L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <section className='p-4' style={{backgroundColor:'#dbd7d2'}} >
            <Container className='p-1'>
                <h2 className='title text-md-center text-sm-left' style={{color: blue, fontSize:'2.5rem'}}>Want to Learn More About Your Move to Riverwood?</h2>
                <Link to='./Contact' /* className='msg-today' */ style={{textDecoration:'none'}}><h4 className='p-2 title text-md-center text-sm-left' style={{color: blue}}> Message Us Today!</h4></Link>
            </Container>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path fill="#dbd7d2" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,90.7C672,107,768,117,864,101.3C960,85,1056,43,1152,53.3C1248,64,1344,128,1392,160L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>

        <section className='p-4'>
            <Container>
                <h2 className='font-big'>Your Experience at Sober Landing</h2>
                <p>
                Staying at Sober Landing will be an incredibly transformative experience as it will provide you with the necessary tools, resources, and support to help you learn how to live drug and alcohol-free. You will be surrounded by a community of individuals who are also on the same journey towards recovery.
                Our living environment will provide you with the necessary structure and routine needed to maintain a healthy and balanced lifestyle. 
                At Sober Landing, you will be given the skills and confidence needed to successfully transition into a drug and alcohol-free life.
                </p>
                <h2 className='pt-5 font-md' style={{color:blue}}>The Power of Community and Support in Recovery</h2>
                <p>
                Our sober house is designed to be a powerful tool in your recovery journey.
                At our sober house, you will be surrounded by a community of individuals who understand the challenges of addiction and who are committed to supporting each other through the recovery process. 
                Our sober house is not just a place to stay; it is a powerful asset that can help you transform your life and achieve lasting sobriety.
                </p>
            </Container>
        </section>
{/*       single line  <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  viewBox="0 0 700 200"><path d="M2.351564645767212,125.77005004882812C40.38242373347283,119.33971248626709,106.29451078534126,92.74903343200684,187.86795043945312,94.40254974365234C269.441390093565,96.05606605529785,316.6763832092285,132.54991607666017,400.2707824707031,133.8359832763672C483.86518173217775,135.1220504760742,518.4814445495606,97.36901878356933,595.6455078125,100.6760482788086C672.8095710754394,103.98307777404786,739.5686026000976,139.86301830291748,776.6808471679688,149.96783447265625" fill="none" stroke-width="1" stroke="#ac7c5c" stroke-linecap="round" stroke-opacity="0.31"></path><defs><linearGradient id="SvgjsLinearGradient1002"><stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop><stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg>
 */}      

 {/* TRY OUT  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
        <path fill="#80909f" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,224C384,245,480,267,576,256C672,245,768,203,864,208C960,213,1056,267,1152,266.7C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>  */}

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