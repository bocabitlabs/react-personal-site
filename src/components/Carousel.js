import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel as CarouselResponsive } from 'react-responsive-carousel';

function Carousel() {
  return (
    <CarouselResponsive>
      <div>
        <img src="/img/somiedo.jpg" />
        <p className="legend">Somiedo, Asturias</p>
      </div>
      <div>
        <img src="/img/luarca.jpg" />
        <p className="legend">Luarca, Asturias</p>
      </div>
      <div>
        <img src="/img/ginebra.jpg" />
        <p className="legend">Geneva, Switzerland</p>
      </div>
      <div>
        <img src="/img/aviles.jpg" />
        <p className="legend">Avilés, Asturias</p>
      </div>
      <div>
        <img src="/img/londres.jpg" />
        <p className="legend">London, UK</p>
      </div>
    </CarouselResponsive>
  );
}

export default Carousel;
