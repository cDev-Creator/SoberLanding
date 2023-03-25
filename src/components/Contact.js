import { Container} from "react-bootstrap";
import emailjs from "emailjs-com";
import NavBar from './NavBar';
import Copyright from "./Copyright";
import Footer from "./Footer";
import Quote from './Quote';
import ContactForm from './ContactForm';
const grey = '#f3f4f5';

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
        <NavBar hamburgerColor ='#5c8cac'/>

        <Container className='p-4'>
        <h1 className='font-bigger title'>We’d Love to Hear from You.</h1>
        <p className='text-muted'>By utilizing the tools and techniques provided during treatment and meetings, you can establish a strong foundation for a healthy, clean, and sober lifestyle. 
        We invite you to contact us today to schedule a tour of our facility and see how we can support you on your journey towards lasting recovery.</p>
   
        </Container>  
        </section>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path fill="#f3f4f5" fill-opacity="1" d="M0,32L48,32C96,32,192,32,288,53.3C384,75,480,117,576,138.7C672,160,768,160,864,138.7C960,117,1056,75,1152,74.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>

        <section className="contact-call">
        <Container className="p-4 my-3">
            <h1 className="font-big">Give Us a Call</h1>
            <a className="font-md" href="tel:2707025355" style={{color: '#5c8cac'}}>(555) 555-5555 </a>
        </Container>
        </section>

        <ContactForm contactTitle='Send Us a Message' textAreaLabel='Message' />
        
        <div className='mt-5'>
        < Quote />
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260">
            <path fill="#f3f4f5" fill-opacity="1" d="M0,224L60,202.7C120,181,240,139,360,154.7C480,171,600,245,720,256C840,267,960,213,1080,181.3C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        
        <div style={{backgroundColor:'#f3f4f5'}}>
        <Footer bgcolor={grey}/>
        </div>
        < Copyright />
    </div>
    );
}
export default Contact;