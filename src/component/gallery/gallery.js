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

  componentDidMount(){
    document.body.style.background = `url(https://static-cdn.jtvnw.net/jtv_user_pictures/e91a3dcf-c15a-441a-b369-996922364cdc-profile_image-300x300.png)`; 
}

componentWillUnmount(){
  document.body.style.background = `url(https://holdennewhomes.files.wordpress.com/2015/02/6838-ranger-rd-frisco-tx-mls-7.jpg)`; 
  document.body.style.backgroundRepeat = "no repeat";
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundAttachment = 'fixed'
}





  render() {
    return (
      <div class="gallery">
        <Carousel 
          showThumbs={false}
          useKeyboardArrows={true}>
              <img class="gallery--photo" src= {photo1} />
              <img class="gallery--photo" src= {photo3} />
              <img class="gallery--photo" src= {photo4} />
              {/* <img class="gallery--photo" src= {photo6} /> */}
        </Carousel>
      </div>
    );
  }
};
 
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default DemoCarousel;