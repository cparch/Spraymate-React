import React, { Component } from 'react'; 
import './App.css';
import NavBar from './navBar';
import Gallery from './component/gallery/gallery'
import About from './component/about/about'
import Testimonial from './component/testimonial/testimonial';
import Contact from './component/contact/contact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <h1> Hi, I am a react app </h1> */}
        <Gallery />
        <hr/>
        <About/>
        <Testimonial/>
        <Contact/>
      </div>
    );
  }
}

export default App;
