import React, {Component} from "react";
import * as actionTypes from '../../store/actions';
import {connect} from 'react-redux';
import classes from './gallery.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowCircleLeft, faArrowCircleRight)

class LeftScrollBtn extends Component {

    updateImg = () => {
      document.body.style.background = `url(${this.props.images[this.props.count]})`; 
      document.body.style.backgroundRepeat = "no repeat";
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundAttachment = 'fixed'
    };

    // f1 runs then, 1 ml sec goes by and the background image will update
   ClickHandler = (f1) => {
      f1;
      setTimeout(this.updateImg, 1)
    };
 
    
    render() {

      // console.log('count ' + this.props.count + "  from render");
      // console.log("img length " + this.props.images.length)
      
      return (
        <div className={classes.body}>

            {/* v works, but calls the last count, not the current count. I want it to change the count, then update the image. */}

            {/* <div className = {classes.leftArrow} 
              onClick={() => { this.props.leftBtnClick(); this.updateImg();}}> 
              <FontAwesomeIcon icon="arrow-circle-left" /> 
            </div> */}


              {/* v call back function v */}
              <div className = {classes.leftArrow} 
                  onClick={() => {this.ClickHandler(this.props.leftBtnClick());}}> 
                  <FontAwesomeIcon icon="arrow-circle-left" /> 
              </div>


              {/* v works, but calls the last count, not the current count. I want it to change the count, then update the image. */}
              
              {/* <div className={classes.rightArrow} 
                onClick={() => { this.props.rightBtnClick(); this.updateImg();}}> 
                <FontAwesomeIcon icon="arrow-circle-right" /> 
              </div> */}

              {/* v call back function v */}
              <div className = {classes.rightArrow} 
                  onClick={() => {this.ClickHandler(this.props.rightBtnClick());}}> 
                  <FontAwesomeIcon icon="arrow-circle-right" /> 
              </div>

       </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
       count: state.count, //< persons needs to match the state in reducer//
       images: state.images
    };
 };
 
 const mapDispatchToProps = dispatch => {
   return {
     rightBtnClick: () => dispatch({type: actionTypes.ADD_TO_COUNT}),
     leftBtnClick: () => dispatch({type: actionTypes.REMOVE_FROM_COUNT}),
    //  onRemovedPerson: (id) => dispatch({type: actionTypes.REMOVE_PERSON, personId: id})
   }  
 }; 
 
 

  export default connect(mapStateToProps, mapDispatchToProps)(LeftScrollBtn);