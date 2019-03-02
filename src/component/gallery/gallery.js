import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./gallery.css";
import "./galleryOverRide.min.css";
import { Carousel } from 'react-responsive-carousel';
import photo1 from '../../images/1.jpg'
import photo2 from '../../images/2.jpeg'
import photo3 from '../../images/3.jpeg'
import photo4 from '../../images/4.jpg'
import photo5 from '../../images/5.jpeg'
import photo6 from '../../images/6.jpg'


class DemoCarousel extends Component {
  render() {
    return (
      <Carousel 
      showThumbs={false}
      useKeyboardArrows={true}>
          <img class="gallery--photo" src= {photo1} />
          <img class="gallery--photo" src= {photo3} />
          <img class="gallery--photo" src= {photo4} />
          <img class="gallery--photo" src= {photo6} />
      </Carousel>
    );
  }
};
 
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default DemoCarousel;