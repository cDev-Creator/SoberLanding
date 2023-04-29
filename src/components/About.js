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

        <section>
            <Container className='p-4'> 
            <h2 className='pt-3 font-big' style={blue}>Our Mission</h2>
                <p>
                At Sober Landing, we are dedicated to providing a safe and supportive environment for women who are on the journey to recovery from addiction. Our household is committed to helping each resident achieve and maintain sobriety while addressing the underlying issues that led to addiction in the first place. We understand that addiction is a complex disease that affects each person differently, and we believe in treating the whole person, not just the addiction.                 
                </p>

                <p>
                    Our mission is to provide a nurturing environment that can help our residents conquer the challenges of addiction and pave the way for a brighter future, not only for themselves but also for their families. We strive to provide a space where residents can find a sense of community, belonging, and purpose as they work towards reclaiming their lives.
                </p>
               
                
                <h4 className='pt-5 font-md'>Commited to Recovery</h4>
                <p className=''>
                While living at Sober landing, you will be required to go to meetings and actively work with a sponsor to ensure that you are staying on track with your recovery. There are weekly meetings to check on everyone’s progress and see where improvements can be made for each individual. You are also expected to take care of household duties to simulate living on your own, but you will have endless support around you.                </p>
            </Container>
        </section>

        <div >
{/*  SINGLE LINE SVG       <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 700 300"><path d="M2.671084403991699,186.71263122558594C33.390327693621316,205.33447497049968,130.59225059668222,306.2317966715495,205.21554565429688,309.4940185546875C279.83884071191153,312.7562404378255,405.253600209554,210.39660263061523,494.69281005859375,208.22178649902344C584.1320199076334,206.04697036743164,749.3894635009766,281.9697658030192,794.9246215820312,295.1545715332031" fill="none" stroke-width="1" stroke="#5b8bab" stroke-linecap="round" stroke-dasharray="0 0" stroke-opacity="0.2" transform="matrix(1.0000000000000004,0,0,1.0000000000000004,1.2021455764766529,-48.14150238037149)"></path><defs><linearGradient id="SvgjsLinearGradient1001"><stop stop-color="hsl(230, 55%, 50%)" offset="0"></stop><stop stop-color="hsl(230, 55%, 70%)" offset="1"></stop></linearGradient></defs></svg>
 */}
    <div className='mt-4 pt-2'>
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