import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const PageCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


    const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity here
    pointerEvents: 'none', // Allows click-through to the image beneath
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/iron.jpg"
          alt="First slide"
          style={{ maxHeight: '400px', objectFit: 'cover' }}

        />
        <div style={overlayStyle}></div>

        <Carousel.Caption>
          <h3>Explore the Cinematic Universe</h3>
          <p>Immerse yourself in a cinematic journey with our extensive movie database.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/trans.jpg"
          alt="First slide"
          style={{ maxHeight: '400px', objectFit: 'cover' }}

        />   
        <div style={overlayStyle}></div>
     
        <Carousel.Caption>
          <h3>Create Your Movie Haven</h3>
          <p>Organize your watchlist for upcoming movie nights.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/xmen.jpg"
          alt="First slide"
          style={{ maxHeight: '400px', objectFit: 'cover' }}

        />    
         <div style={overlayStyle}></div>
        <Carousel.Caption>
          <h3>Personalized Movie Experience</h3>
          <p>
          Easily manage your favorites, watchlists, and reviews with our user-friendly platform.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default PageCarousel;
