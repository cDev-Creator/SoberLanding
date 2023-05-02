import Showcase from './Showcase';
import Quote from './Quote';
import Footer from './Footer';
import Copyright from './Copyright';
import { Container, Col, Row } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';

import house from '../assets/images/backyard.jpg';
const icons = {fill:'#d4cdc4', marginRight: '10px'};
const blue = {color:'#5c8cac'};
const grey = '#f3f4f5';

const Home = () => {
    return (  
        <div>
            <div>
            <Showcase />
            <section>
                <Container >
                <div className='m-4 pt-5'>
                    <div className="text-center d-none d-md-block">
                        <h2 className='font-md font-big mb-3' style={blue}>What are you seeking in your sobriety?</h2>
                        <p>If you're a woman seeking a safe and supportive environment to help you in your journey towards sobriety, look no further than Sober Landing. Our goal is to provide a strong community of recovery for those who are seeking to achieve lasting sobriety.</p>
                    </div>
                  
                    <div className='d-block d-md-none mb-3'>
                        <h2 className='font-big' style={blue}>What are you seeking in your sobriety?</h2>     
                        <p >If you're a woman seeking a safe and supportive environment to help you in your journey towards sobriety, look no further than Sober Landing. Our goal is to provide a strong community for those who are seeking to achieve lasting sobriety.</p>   
                    </div>  
                    </div>  
              
                    </Container>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
                        <path fill={grey} fill-opacity="1" d="M0,192L60,176C120,160,240,128,360,133.3C480,139,600,181,720,165.3C840,149,960,75,1080,42.7C1200,11,1320,21,1380,26.7L1440,32V200H0V32Z"></path>
                    </svg>
                </section>
           
                <section style={{backgroundColor: grey}}>
                    <Container className='p-4'>
                        <Row>
                        <Col>
                        <h2 className='pt-5 font-big'>Our Housing</h2>
                        <p style={{maxWidth:'400px'}}>Our sober housing offers a wide range of amenities to ensure that you feel comfortable and at home during your stay with us.</p>
                        <ul style={{ listStyleType: 'none', paddingLeft: 0, marginTop:'40px' }}>
                            <li> <FaCheck style={icons} className='icons'/> Fully equipped kitchen with appliances and cooking utensils</li>
                            <li> <FaCheck style={icons} className='icons' /> Shared living areas with comfortable furniture and TV</li>
                            <li> <FaCheck style={icons} className='icons' /> High-speed internet and Wi-Fi access</li>
                            <li> <FaCheck style={icons} className='icons'/> Laundry room with washing machine and dryer</li>
                            <li> <FaCheck style={icons} className='icons'/> Outdoor space including a patio and spacious backyard </li>
                            <li> <FaCheck style={icons} className='icons'/> Access to 12-step meetings and other recovery programs</li>
                        </ul>
                        </Col>

                        <Col md="auto" className="d-flex align-items-center justify-content-md-center">
                            <img src={house} alt="image of home" className="img-fluid w-75 w-sm-50 d-none d-sm-block" style={{ maxWidth: '600px',maxHeight:'800px', borderRadius:'49% 51% 52% 48% / 54% 55% 45% 46% ', opacity: '0.28', border: '4px solid #d4cdc4'}} />
                        </Col>
                        </Row>
                   </Container>
                   </section>

                   <section >
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
                        <path fill={grey} fill-opacity="1" d="M0,192L60,176C120,160,240,128,360,133.3C480,139,600,181,720,165.3C840,149,960,75,1080,42.7C1200,11,1320,21,1380,26.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                    </svg>

                   <Container className="my-5 p-4" >
                        <h2 className='font-big' style={blue} >Develop Lasting Realtionships</h2>
                        <p>We understand the importance of developing meaningful relationships with other women who are also on the path towards recovery. Sober Landing offers a way to gradually adapt to building new friendships and being part of a community. During your stay with us, you will attend meetings and events to form bonds with other women who understand the struggles of maintaining sobriety.</p>

                        <h4 className='font-md pt-5'>We Want to Help</h4>       
                        <p>At Sober Landing, you'll have access to nearby meetings, employment opportunities, sponsors, and new friends also in recovery. While understanding the importance of routine, we work hard to create a safe and supportive environment that prioritizes recovery.</p>   
                        <p>Don't hesitate to contact us! We would love to show you around our home and figure out whether our sober living accommodations are a good match for you. Together, we can assist you in staying sober and continuing on the path to recovery. We're eager to provide you with support throughout your journey!</p>   

                </Container>
            </section> 
        < Footer />
        < Copyright />

        </div>
        </div>  
    );
  }
export default Home;