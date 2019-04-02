import React, { Component } from "react";

class Carousel extends Component {
  render() {
    return (
      <div id="header-big-imgs" data-num-img="5"
           data-img-src-1="https://static.renefernandez.com/static/img/somiedo.jpg"
           data-img-desc-1="Somiedo, Asturias"
           data-img-src-2="https://static.renefernandez.com/static/img/luarca.jpg"
           data-img-desc-2="Luarca, Asturias"
           data-img-src-3="https://static.renefernandez.com/static/img/ginebra.jpg"
           data-img-desc-3="Geneva, Switzerland"
           data-img-src-4="https://static.renefernandez.com/static/img/aviles.jpg"
           data-img-desc-4="Avilés, Asturias"
           data-img-src-5="https://static.renefernandez.com/static/img/londres.jpg"
           data-img-desc-5="London, UK"
      />
    );
  }
}

export default Carousel;