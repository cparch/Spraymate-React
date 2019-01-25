import React, {Component} from "react";
import * as actionTypes from '../../store/actions';
import {connect} from 'react-redux';
import classes from './gallery.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowCircleLeft, faArrowCircleRight)

class LeftScrollBtn extends Component {

  ClickHandler = (f1) => {
    f1;
  };
 
    render() {
      
      return (
        <div className={classes.body}>

              <div className = {classes.leftArrow} 
                  onClick={() => {this.ClickHandler(this.props.leftBtnClick());}}> 
                  <FontAwesomeIcon icon="arrow-circle-left" /> 
              </div>

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
       count: state.count,
       images: state.images,
    };
 };
 
 const mapDispatchToProps = dispatch => {
   return {
     rightBtnClick: () => dispatch({type: actionTypes.ADD_TO_COUNT}),
     leftBtnClick: () => dispatch({type: actionTypes.REMOVE_FROM_COUNT}),   
   }  
 }; 
 
  export default connect(mapStateToProps, mapDispatchToProps)(LeftScrollBtn);