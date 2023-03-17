import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import Copyright from "./Copyright";
import Footer from "./Footer";
import Quote from './Quote';

const About = () => {
    return ( 
    <div>
        <section className='p-4'>
            <Container className='py-4'>
                <h1>About Riverwood Home</h1>
                <p>Our mission is to provide a supportive living environment for women who are committed to achieving and maintaining sobriety.
                We understand that the road to recovery can be long and difficult, but we believe that with the right support and resources, anyone can achieve lasting sobriety.   
                </p>

                <h2 className='pt-4'>Commited to Recovery</h2>
                <p>
                At Sober Landing Women's Sober House, we are dedicated to providing a safe and supportive environment for women who are on the journey to recovery from addiction. Our experienced staff is committed to helping each resident achieve and maintain sobriety while addressing the underlying issues that led to addiction in the first place. We understand that addiction is a complex disease that affects each person differently, and we believe in treating the whole person, not just the addiction. 
                </p>
            </Container>
        </section>
        
        <div className='mb-5'>
        < Quote />
        </div>
        <Footer />
        <Copyright />
    </div>
    );
}
export default About;