import React, {Component} from "react";
import {connect} from 'react-redux';

class Background extends Component {

      updateImg = () => {
      document.body.style.background = `url(${this.props.imageUrl[this.props.count]})`; 
      document.body.style.backgroundRepeat = "no repeat";
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundAttachment = 'fixed'
    };

    render() {
        return (
           <div> {this.updateImg()} </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       count: state.count,
       imageUrl: state.images
    };
 };
 
export default connect(mapStateToProps, null)(Background);
