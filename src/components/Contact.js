import { Container} from "react-bootstrap";
import emailjs from "emailjs-com";
import NavBar from './NavBar';
import Copyright from "./Copyright";
import Footer from "./Footer";

import '../index.css';
import Quote from './Quote';
import ContactForm from './ContactForm';

const Contact = () => {
    
    function sendEmail(e) {
        e.preventDefault();
        /* document.getElementById("message").style.display = 'none'; */
        emailjs.sendForm("service_8sjeme9","contact_mil3w2b", e.target, "57uokk2RisLqzWlkd")
            .then(() => {
                document.getElementById('message').textContent = "Your message was sent successfully!";
                document.getElementById("message").style.display = 'block';
            }, () => {
                document.getElementById('message').textContent = "There was an issue submiting your message.";
                document.getElementById("message").style.display = 'block';
            });
        e.target.reset()
    }

    return ( 
    <div>


        <section style={{backgroundColor:'#f3f4f5'}} >
        <NavBar />

        <Container className='p-4'>
        <h1>We’d Love to Hear from You.</h1>
        <p className='text-muted'>By utilizing the tools and techniques provided during treatment and meetings, you can establish a strong foundation for a healthy, clean, and sober lifestyle. 
        We invite you to contact us today to schedule a tour of our facility and see how we can support you on your journey towards lasting recovery.</p>
   
        </Container>  
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
  <path fill="#f3f4f5" fill-opacity="1" d="M0,32L48,32C96,32,192,32,288,53.3C384,75,480,117,576,138.7C672,160,768,160,864,138.7C960,117,1056,75,1152,74.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
        <ContactForm contactTitle='Contact Us!' textAreaLabel='Message' />
        <div className='my-5'>
        < Quote />
        </div>
        <Footer /> 
        < Copyright />
    </div>
    );
}
export default Contact;