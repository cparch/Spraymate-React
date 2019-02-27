import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>

        <div>
          <img src="https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" />
        </div>
        <div>
          <img src="https://envato-shoebox-0.imgix.net/2a41/93b3-6f8b-4f1c-8767-cd9772b4ded7/kave+310.jpg?w=500&h=278&fit=crop&crop=edges&auto=compress%2Cformat&s=fbc0d75299d7cfda0b3c60ea52ba4aaf" />
        </div>
      </Carousel>
    );
  }
};
 
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default DemoCarousel;