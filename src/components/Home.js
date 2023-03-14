import Showcase from './Showcase';
import FAQ from './FAQ';
import Quote from './Quote';
import Footer from './Footer';
import Copyright from './Copyright';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (  
        <div>
            <Showcase />
            <section>
                <Container>
                    <div className='mt-5'>
                        <h4>Are you seeking a supportive community to aid you in your new sober lifestyle?</h4>
                        <p>If you're a woman seeking a safe and supportive environment to help you in your journey towards sobriety, look no further than Sober Landing. Our mission is to provide you with the tools and resources necessary to apply the skills and knowledge gained during treatment to your daily life.</p>

                        <h2>Our Sobering Housing</h2>
                        <p>Our sober housing offers a wide range of amenities to ensure that you feel comfortable and at home during your stay with us.</p>
                        <ul>
                            <li>Fully equipped kitchen with appliances and cooking utensils</li>
                            <li>Shared living areas with comfortable furniture and TV</li>
                            <li>High-speed internet and Wi-Fi access</li>
                            <li>Laundry room with washing machine and dryer</li>
                            <li>Access to nearby gym facilities</li>
                            <li>Outdoor space including a patio and spacious backyard </li>
                            <li>Access to 12-step meetings and other recovery programs</li>
                        </ul>

                        <h4>Develop Lasting Realtionships</h4>
                        <p>We understand the importance of developing meaningful relationships with other women who are also on the path towards recovery. Our residents are encouraged to attend meetings and form bonds with other women who understand the struggles of maintaining sobriety. By supporting one another, we help each other progress towards a healthier and more fulfilling life.</p>

                        <h2>We Want to Help</h2>  
                        <p>At Sober Landing, you'll have access to nearby meetings, employment opportunities, sponsors, and new sober friends who are all committed to helping you succeed. We understand the importance of routine and work hard to create a safe and supportive environment while prioritizing recovery.</p>   
                        <p>Don't hesitate to contact us! We would love to show you around our facility and figure out whether our sober living accommodations are a good match for you. Together, we can assist you in staying sober and continuing on the path to recovery. We're eager to provide you with support throughout your journey!</p>              
                    </div>
                </Container>
            </section> 
            < Quote />
        
        {/* <FAQ /> */}
        < Footer />
        < Copyright />


        </div>  
    );
  }
export default Home;