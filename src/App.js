import React, { Component } from 'react'; 
import './App.css';
import NavBar from './component/Navigation/navBar';
import Gallery from './component/gallery/gallery'
import About from './component/about/about'
import TestimonialList from './component/testimonialList/testimonialList';
import Contact from './component/contact/contact';
import {Route} from 'react-router-dom';
import Background from './component/background/background';
import SideDrawer from './component/Navigation/sideDrawer/sideDrawer';
import BackDrop from './component/Navigation/sideDrawer/BackDrop/BackDrop'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BackDrop/>
        <NavBar />
        <SideDrawer/>
        {/* <Background/> */}
        {/* <Gallery /> */}
        <Route path="/Gallery" component={Gallery} />
        {/* <About/> */}
        <Route path="/About" component={About} />

        {/* <Testimonial/> */}
        <Route path="/Testimonial" component={TestimonialList} />

        {/* <Contact/> */}
        <Route path="/Contact" component={Contact} />

      </div>
    );
  }
}

export default App;
