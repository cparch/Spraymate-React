import React, {Component} from "react";
import * as actionTypes from '../../store/actions';
import {connect} from 'react-redux';
import classes from './gallery.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowCircleLeft, faArrowCircleRight)

class LeftScrollBtn extends Component {
 
    render() {
      
      return (
        <div className={classes.body}>

              <div> 
                  <FontAwesomeIcon 
                    className = {classes.leftArrow}
                    icon="arrow-circle-left"
                    onClick={() => {this.props.leftBtnClick()}} 
                  /> 
              </div>

              <div> 
                  <FontAwesomeIcon 
                    className = {classes.rightArrow}
                    icon="arrow-circle-right" 
                    onClick={() => {this.props.rightBtnClick()}}
                  /> 
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