import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import NavBar from './NavBar';
import Copyright from "./Copyright";
import Footer from "./Footer";
import Quote from './Quote';

const blue = {color:'#5c8cac'};
const grey = '#f3f4f5';
const tan = {color:'#ac7c5c'}

const About = () => {
    return ( 
    <div>
        <section className='full-screen-bg' style={{backgroundColor: '#f3f4f5'}}>
        <NavBar />
            <Container className='py-4'>
                <h1 title>About Sober Landing</h1>
                <p className='mt-4 text-muted'>Our mission is to provide a supportive living environment for women who are committed to achieving and maintaining sobriety.
                We understand that the road to recovery can be long and difficult, but we believe that with the right support and resources, anyone can achieve lasting sobriety.   
                </p>

            </Container>
        </section>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path fill="#f3f4f5" fill-opacity="1" d="M0,64L48,85.3C96,107,192,149,288,165.3C384,181,480,171,576,138.7C672,107,768,53,864,42.7C960,32,1056,64,1152,90.7C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>

        <section>
            <Container>
                <h2 className='pt-5' style={blue}>Commited to Recovery</h2>
                <p className='pb-5'>
                At Sober Landing Women's Sober House, we are dedicated to providing a safe and supportive environment for women who are on the journey to recovery from addiction. Our experienced staff is committed to helping each resident achieve and maintain sobriety while addressing the underlying issues that led to addiction in the first place. We understand that addiction is a complex disease that affects each person differently, and we believe in treating the whole person, not just the addiction. 
                </p>
            </Container>
        </section>

        <div >
        < Quote />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path fill="#f3f4f5" fill-opacity="1" d="M0,64L48,85.3C96,107,192,149,288,165.3C384,181,480,171,576,138.7C672,107,768,53,864,42.7C960,32,1056,64,1152,90.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        </div>
        <div style={{backgroundColor:'#f3f4f5'}}>
        <Footer />
        </div>
        <Copyright />
    </div>
    );
}
export default About;