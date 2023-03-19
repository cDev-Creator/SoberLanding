import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import '../index.css';


import house1 from '../assets/images/1.jpg';
import house2 from '../assets/images/2.jpg';
import house3 from '../assets/images/3.jpg';
import house4 from '../assets/images/4.jpg';
import house5 from '../assets/images/5.jpg';
import house6 from '../assets/images/6.jpg';
import house7 from '../assets/images/7.jpg';
import house8 from '../assets/images/8.jpg';
import house9 from '../assets/images/9.jpg';

const ImgCarousel = () => {
    return ( 
    <section >
        <Carousel interval={3000} fade>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={house2}
            alt="First slide"
            style={{ width: '100%', height: '100%' }} 
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={house1}
            alt="Second slide"
            style={{ width: '100%', height: '100%' }} 
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={house3}
            alt="Third slide"
            style={{ width: '100%', height: '100%' }} 
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src={house4}
            alt="Fourth slide"
            style={{ width: '100%', height: '100%' }} 
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src={house5}
            alt="Fifth slide"
            style={{ width: '100%', height: '100%' }} 
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src={house6}
            alt="Sixth slide"
            style={{ width: '100%', height: '100%' }} 
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src={house7}
            alt="Seventh slide"
            style={{ width: '100%', height: '100%' }} 
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src={house8}
            alt="Eighth slide"
            style={{ width: '100%', height: '100%' }} 
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src={house9}
            alt="Ninth slide"
            style={{ width: '100%', height: '100%' }} 
            />
        </Carousel.Item>
        </Carousel>
    </section>
    );
}
export default ImgCarousel;