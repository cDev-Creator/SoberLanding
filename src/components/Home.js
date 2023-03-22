import Showcase from './Showcase';
import Quote from './Quote';
import Footer from './Footer';
import Copyright from './Copyright';
import { Container, Col, Row } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';

import house from '../assets/images/9.jpg';

const Home = () => {
    return (  
        <div>
            <div>
            <Showcase />
            <section>
                <Container>
                <div className='m-4 pt-5'>
                    <div className="text-center d-none d-md-block">
                        <h2 style={{color:'#5c8cac'}}>Are you seeking a supportive community to aid you in your new sober lifestyle?</h2>
                        <p>If you're a woman seeking a safe and supportive environment to help you in your journey towards sobriety, look no further than Sober Landing. Our mission is to provide you with the tools and resources necessary to apply the skills and knowledge gained during treatment to your daily life.</p>
                    </div>
                  
                    <div className='d-block d-md-none'>
                        <h2 style={{color:'#5c8cac'}}>Are you seeking a supportive community to aid you in your new sober lifestyle?</h2>     
                        <p >If you're a woman seeking a safe and supportive environment to help you in your journey towards sobriety, look no further than Sober Landing. Our mission is to provide you with the tools and resources necessary to apply the skills and knowledge gained during treatment to your daily life.</p>   
                    </div>  
                    </div>  
                    </Container>
                  </section>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
                        <path fill="#f3f4f5" fill-opacity="1" d="M0,192L60,176C120,160,240,128,360,133.3C480,139,600,181,720,165.3C840,149,960,75,1080,42.7C1200,11,1320,21,1380,26.7L1440,32V200H0V32Z"></path>
                    </svg>
                  <section style={{backgroundColor:'#f3f4f5'}}>
                    <Container >
                        <Row>
                      
                        <Col>
                        <h2>Our Sober Housing</h2>
                        <p style={{maxWidth:'400px'}}>Our sober housing offers a wide range of amenities to ensure that you feel comfortable and at home during your stay with us.</p>
                        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                            <li> <FaCheck style={{ marginRight: '10px'}} /> Fully equipped kitchen with appliances and cooking utensils</li>
                            <li> <FaCheck style={{ marginRight: '10px'}} /> Shared living areas with comfortable furniture and TV</li>
                            <li> <FaCheck style={{ marginRight: '10px'}} /> High-speed internet and Wi-Fi access</li>
                            <li> <FaCheck style={{ marginRight: '10px'}} /> Laundry room with washing machine and dryer</li>
                            <li> <FaCheck style={{ marginRight: '10px'}} /> Access to nearby gym facilities</li>
                            <li> <FaCheck style={{ marginRight: '10px'}} /> Outdoor space including a patio and spacious backyard </li>
                            <li> <FaCheck style={{ marginRight: '10px'}} /> Access to 12-step meetings and other recovery programs</li>
                        </ul>
                        </Col>

                        <Col md="auto" className="d-flex align-items-center justify-content-md-center">
                            <img src={house} alt="image of home" className="img-fluid w-75 w-sm-50 d-none d-sm-block" style={{ maxWidth: '550px', borderRadius: '100px 15px', opacity:'0.9'}} />
                        </Col>
                        </Row>
                   </Container>
                   </section>

                   <section >
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
                        <path fill="#f3f4f5" fill-opacity="1" d="M0,192L60,176C120,160,240,128,360,133.3C480,139,600,181,720,165.3C840,149,960,75,1080,42.7C1200,11,1320,21,1380,26.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                    </svg>

                   <Container className="my-5" >
                        <h2 style={{color:'#5c8cac'}} >Develop Lasting Realtionships</h2>
                        <p>We understand the importance of developing meaningful relationships with other women who are also on the path towards recovery. Our residents are encouraged to attend meetings and form bonds with other women who understand the struggles of maintaining sobriety. By supporting one another, we help each other progress towards a healthier and more fulfilling life.</p>

                        <h4>We Want to Help</h4>  
                        <p>At Sober Landing, you'll have access to nearby meetings, employment opportunities, sponsors, and new sober friends who are all committed to helping you succeed. We understand the importance of routine and work hard to create a safe and supportive environment while prioritizing recovery.</p>   
                        <p>Don't hesitate to contact us! We would love to show you around our facility and figure out whether our sober living accommodations are a good match for you. Together, we can assist you in staying sober and continuing on the path to recovery. We're eager to provide you with support throughout your journey!</p>              
                  
                </Container>
            </section> 


          {/*   < Quote /> */}
        
        {/* <FAQ /> */}
        < Footer />
        < Copyright />

        </div>
        </div>  
    );
  }
export default Home;