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
        <section style={{backgroundColor: '#f3f4f5'}}>
        <NavBar hamburgerColor ='#5c8cac'/>
            <Container className='p-4'>
                <h1 className='title font-bigger'>About Sober Landing</h1>
             {/*    <p className='mt-4 text-muted'>Our mission is to provide a supportive living environment for women who are committed to achieving and maintaining sobriety.
                We understand that the road to recovery can be long and difficult, but we believe that with the right support and resources, anyone can achieve lasting sobriety.   
                </p> */}

            <p className='mt-4 text-muted'>
            I created Sober Landing after living with an active user for the majority of my life. I watched how drugs consumed this person I loved and turned my family into something I wasn’t familiar with. Our mission is to provide a supportive community so that families can begin to heal and rebuild their relationships.  
            </p>
            </Container>
        </section>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path fill="#f3f4f5" fill-opacity="1" d="M0,64L48,85.3C96,107,192,149,288,165.3C384,181,480,171,576,138.7C672,107,768,53,864,42.7C960,32,1056,64,1152,90.7C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>

        <section className='p-4'>
            <Container> 
            <h2 className='pt-3 font-big' style={blue}>Our Mission</h2>
                <p>
                At Sober Landing, we are dedicated to providing a safe and supportive environment for women who are on the journey to recovery from addiction. Our household is committed to helping each resident achieve and maintain sobriety while addressing the underlying issues that led to addiction in the first place. 
                We understand that addiction is a complex issue that affects every person uniquely, but we are ready to assist each individual in the ways that work best for them!                </p>

                <p>
                    Our mission is to provide a nurturing environment that can help our residents conquer the challenges of addiction and pave the way for a brighter future, not only for themselves but also for their families. We strive to provide a space where residents can find a sense of community, belonging, and purpose as they work towards reclaiming their lives.
                </p>
               
            </Container>
        </section>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290">
        <path fill="#5c8cac" fill-opacity="1" d="M0,288L60,250.7C120,213,240,139,360,106.7C480,75,600,85,720,122.7C840,160,960,224,1080,218.7C1200,213,1320,139,1380,101.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
    </svg>

        <section className='px-4' style={{backgroundColor:'#5c8cac'}} >
            <Container className='p-1'>
            <h3 style={{color:'#f3f4f5'}} className='title'>
                Sober Landing offers far more than just a housing solution. We are committed to connecting each resident 
                to a supportive community that will help them to achieve lasting sobriety.
            </h3>
            </Container>
        </section>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#5c8cac" fill-opacity="1" d="M0,288L60,250.7C120,213,240,139,360,106.7C480,75,600,85,720,122.7C840,160,960,224,1080,218.7C1200,213,1320,139,1380,101.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>

    <div>
    <section className='px-4'>
        <Container>
            <h2 className='font-big mt-4' >Your Experience at Sober Landing</h2>
                <p>
                Sober Landing was created for those ready to start a new life outside of drugs and alcohol. 
                Choosing to live in a sober living home is possibly the next step you need to take on your road to 
                recovery. You will be surrounded by a community of individuals who are also on the same journey towards recovery and who are committed to supporting each other through the entire process.
                </p>

                <p>
                The living environment we offer will provide you with the necessary structure to maintain a healthy and balanced lifestyle. 
                At Sober Landing, you will be given the skills and confidence needed to successfully transition into a drug and alcohol-free life.
                </p>

        </Container>
    </section>

    <section className='px-4'>
        <Container>
                <h3 className='pt-5 font-md' style={blue}>Commited to Recovery</h3>
                <p>
                While living at Sober landing, you will be required to go to meetings and actively work with a sponsor to ensure that you are staying on track with your recovery. There are weekly meetings to check on everyone’s progress and see where improvements can be made for each individual. You are also expected to take care of household duties to simulate living on your own, but you will have endless support around you.                </p>
        </Container>
    </section>

    <div className='mt-5 pt-2'>
    < Quote quote='Though nobody can go back and make a new beginning, anyone can start over and make a new ending.' 
        author='Chico Xavier'/>
    </div>


  
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path fill="#f3f4f5" fill-opacity="1" d="M0,64L48,85.3C96,107,192,149,288,165.3C384,181,480,171,576,138.7C672,107,768,53,864,42.7C960,32,1056,64,1152,90.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        </div>
        <div style={{backgroundColor:'#f3f4f5'}}>
        <Footer bgcolor={grey}/>
        </div>
        <Copyright />
    </div>
    );
}
export default About;