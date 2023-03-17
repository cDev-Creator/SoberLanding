import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import Copyright from "./Copyright";
import Footer from "./Footer";

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
        document.getElementById("message").style.display = 'block';
        emailjs.sendForm("service_8sjeme9","contact_mil3w2b", e.target, "57uokk2RisLqzWlkd")
            .then((result) => {
                document.getElementById('message').textContent = "Your message was sent successfully!";
                console.log(result.text);
            }, (error) => {
                document.getElementById('message').textContent = "There was an issue submiting your message.";
                console.log(error.text);
            });
        e.target.reset()
    }
    return ( 
    <div>
        <section className='p-4' >
        <Container className= 'mt-5 shadow'>
        <Row>
{/*             <Col className='md-4 bg-primary p-5 text-white order-sm-first order-last'>
                <h2>Let's get in touch</h2>
                <p>We're open for any suggestion or just to have a chat</p>
                <div class="d-flex mt-2">
                    <i class="bi bi-geo-alt"></i>
                    <p class="mt-3 ms-3">Address : 6716 Riverwood, Live Oak, TX 78233</p>
                </div>
                <div class="d-flex mt-2">
                    <i class="bi bi-telephone-forward"></i>
                    <p class="mt-5 ms-3">Phone : 8888888888</p>
                </div>
                <div class="d-flex mt-2">
                    <i class="bi bi-envelope"></i>
                    <p class="mt-5 ms-3">Email : test@gmail.com</p>
                </div>
            </Col> */}
            <Col className="md-8 p-5 ">
                <h2>Contact Us</h2>
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
                        <label className="form-label">Message</label>
                        <textarea name='message'className="form-control"/>
                    </Col>
                    <Col ></Col>

                    <Col className='text-center'size={12} sm={12} >
                      <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </Col>
                    <p id="message"></p>
                  </form>
            </Col>
        </Row>
    </Container>
    </section>
    <Footer /> 
    < Copyright />
    </div>
    );
}
export default Contact;