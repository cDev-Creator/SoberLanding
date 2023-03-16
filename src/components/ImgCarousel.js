import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import '../index.css';


import house from '../assets/images/examplehouse.jpg';
import swan from '../assets/images/swan.png';

const ImgCarousel = () => {
    return ( 
        <section className='p-4'>
            <Container className='p-2 img-carousel-container' style={{backgroundColor:'#3f4f62'}}>
                <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={house}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src={swan}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={house}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
}
export default ImgCarousel;