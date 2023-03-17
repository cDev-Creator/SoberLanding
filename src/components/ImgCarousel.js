import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import '../index.css';


import house from '../assets/images/examplehouse.jpg';
import swan from '../assets/images/swan.png';

const ImgCarousel = () => {
    return ( 
    <section >
        <Carousel interval={3000} fade>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={house}
            alt="First slide"
            style={{ width: '100%', height: '100%' }} // add this line
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={swan}
            alt="Second slide"
            style={{ width: '100%', height: '100%' }} // add this line
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={house}
            alt="Third slide"
            style={{ width: '100%', height: '100%' }} // add this line
            />
        </Carousel.Item>
        </Carousel>
    </section>
    );
}
export default ImgCarousel;