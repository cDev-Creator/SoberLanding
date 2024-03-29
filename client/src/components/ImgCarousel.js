import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';


import '../index.css';

import house2 from '../assets/images/2.jpg';
import house3 from '../assets/images/3.jpg';
import house4 from '../assets/images/4.jpg';
import house5 from '../assets/images/5.jpg';
import house6 from '../assets/images/6.jpg';
import house7 from '../assets/images/7.jpg';
import house8 from '../assets/images/8.jpg';
import house9 from '../assets/images/9.jpg';
import house10 from '../assets/images/10.jpg';
import house11 from '../assets/images/11.jpg';

import house13 from '../assets/images/13.jpg';
import house15 from '../assets/images/15.jpg';



const ImgCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleItemClick = (selectedIndex, e) => {
      setActiveIndex(selectedIndex);
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 1200;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);
  
    return (
      <section>
        <Carousel
          interval={3000}
          className={`${isMobile ? "carousel-fade" : "carousel-fade w-75"}`}
          activeIndex={activeIndex}
          onSelect={handleItemClick}
        >

          <Carousel.Item >
            <img
              className="d-block w-100"
              src={house13}
              alt="house slide"
              style={{ width: "50%", height: "50%" }}
            />
          </Carousel.Item>

          <Carousel.Item >
            <img
              className="d-block w-100"
              src={house15}
              alt="house slide"
              style={{ width: "50%", height: "50%" }}
            />
          </Carousel.Item>

          <Carousel.Item >
            <img
              className="d-block w-100"
              src={house2}
              alt="house slide"
              style={{ width: "50%", height: "50%" }}
            />
          </Carousel.Item>
      
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={house3}
              alt="house slide"
              style={{ width: "100%", height: "100%" }}
            />
          </Carousel.Item>
  
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={house4}
              alt="house slide"
              style={{ width: "100%", height: "100%" }}
            />
          </Carousel.Item>
  
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={house5}
              alt="house slide"
              style={{ width: "100%", height: "100%" }}
            />
          </Carousel.Item>
  
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={house6}
              alt="house slide"
              style={{ width: "100%", height: "100%" }}
            />
          </Carousel.Item>
  
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={house7}
              alt="house slide"
              style={{ width: "100%", height: "100%" }}
            />
          </Carousel.Item>
  
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={house8}
              alt="house slide"
              style={{ width: "100%", height: "100%" }}
            />
          </Carousel.Item>
  
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={house9}
              alt="house slide"
              style={{ width: "100%", height: "100%" }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={house10}
              alt="house slide"
              style={{ width: "100%", height: "100%" }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={house11}
              alt="house slide"
              style={{ width: "100%", height: "100%" }}
            />
          </Carousel.Item>
        </Carousel>
      </section>
    );
  };
  
  export default ImgCarousel;