import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// Import the image correctly
import Banner1 from '../assets/Banner1.jpg';
import Banner2 from "../assets/Banner2.png"
import Banner3 from "../assets/Banner3.jpg"

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 md:h-[70vh]"
          src={Banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>OG</h3>
          <p>Indian Telugu-language gangster action thriller film.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md:h-[70vh]"
          src={Banner2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Avengers the end game</h3>
          <p>The film is a conclusion to the story of the MCU up to that point, ending the story arcs of several main characters. Its plot revisits several moments from earlier films, bringing back actors and settings throughout the franchise.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md:h-[70vh]"
          src={Banner3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Krish 3</h3>
          <p >The story follows Krishna Mehra, alias Krrish, and his scientist father, Rohit Mehra, who face an elaborate conspiracy orchestrated by the evil genetist Kaal and his gang of mutants, led by the ruthless Kaya..</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
