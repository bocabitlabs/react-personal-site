import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel as CarouselResponsive } from 'react-responsive-carousel';

function Carousel() {
  return (
    <CarouselResponsive autoPlay={true} showStatus={false}>
      <div>
        <img src="/img/somiedo.jpg" alt="Somiedo landscape" />
        <p className="legend">Somiedo, Asturias</p>
      </div>
      <div>
        <img src="/img/luarca.jpg" alt="Luarca landscape" />
        <p className="legend">Luarca, Asturias</p>
      </div>
      <div>
        <img src="/img/ginebra.jpg" alt="Geneva landscape" />
        <p className="legend">Geneva, Switzerland</p>
      </div>
      <div>
        <img src="/img/aviles.jpg" alt="Aviles landscape" />
        <p className="legend">Avilés, Asturias</p>
      </div>
      <div>
        <img src="/img/londres.jpg" alt="London landscape" />
        <p className="legend">London, UK</p>
      </div>
    </CarouselResponsive>
  );
}

export default Carousel;
