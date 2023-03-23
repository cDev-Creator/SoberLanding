import {useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import '../index.css';

import Button from 'react-bootstrap/Button';
const ContactForm = ({contactTitle, textAreaLabel, bgcolor}) => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    function sendEmail(e) {
        e.preventDefault();
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
    <div style={{backgroundColor: bgcolor}}>
        <section className='p-2' >
        <Container className= 'mt-5'>
        <Row>
            <Col className="md-8 p-5 ">
                <h2>{contactTitle}</h2>
                <form onSubmit={sendEmail} className="row g-3 contact-form mt-4">
                    <Col className='ml-3'size={12} sm={6} >
                      <label className="form-label">First Name</label>
                      <input name="firstName" type="text" className="form-control" required/>
                    </Col>
                    <Col size={12} sm={6} >
                      <label className="form-label">Last Name</label>
                      <input name="lastName" type="text" className="form-control" required/>
                    </Col>
 
                    <Col size={12} sm={6} >
                        <label className="form-label">Email Address</label>
                        <input name='email' type="email" className="form-control" required/>
                
                        <label className="form-label">Phone Number</label>
                        <input name='phone' type="tel" className="form-control"/>
                    </Col>

                    <Col size={12} sm={12} >
                        <label className="form-label">{textAreaLabel}</label>
                        <textarea name='message'className="form-control"/>
                    </Col>
                    <Col ></Col>

                    <Col className='text-center'size={12} sm={12} >
                    <Button variant="dark" type="submit">Submit</Button>                     
                    </Col>
                    
                  </form>
            </Col>
        </Row>
    </Container>

    <Col>
        <p className='text-center p-3 rounded mt-4' id="message"></p>
    </Col>

    </section>
    </div>
    );
}
export default ContactForm;