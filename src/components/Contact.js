import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
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
        <section className='p-4'>
        <Container>
        <h1>We’d Love to Hear from You.</h1>
        <p>By utilizing the tools and techniques provided during treatment and meetings, you can establish a strong foundation for a healthy, clean, and sober lifestyle. 
        We invite you to contact us today to schedule a tour of our facility and see how we can support you on your journey towards lasting recovery.</p>
        </Container>
    <Container>
    <ContactForm contactTitle='Contact Us!' textAreaLabel='Message'/>
        </Container>  
        </section>
        <div className='my-5'>
        < Quote />
        </div>
        <Footer /> 
        < Copyright />
    </div>
    );
}
export default Contact;