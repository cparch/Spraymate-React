import React, {Component} from "react";
import * as actionTypes from '../../store/actions';
import {connect} from 'react-redux';
import classes from './gallery.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

class LeftScrollBtn extends Component {

 
    // const updateBackgroundImg = () => {
    //   document.body.style.background= `url(${images[this.state.count]})
    // }

    //When the right button is clicked, this.state.count += 1
    // rightBtnClick = () => {
      // this.setState.count = (this.state.count + 1) % this.state.count;
      // const count = (this.state.count + 1 ) % this.state.count;
      // this.setState({ count });

      // this.setState(state => {
      //   this.state.count =  (this.state.count + 1) % images.length;
      //   document.body.style.background= `url(${images[this.state.count]})`;
      // });
       
    // };

  

    // //when the left button is clicked, count -=1

    // leftBtnClick = () => {
    //   this.setState.count= this.state.count -= 1;
    //   console.log(this.state.count);
    //   document.body.style.background= "url(" + images[this.state.count] + ")"; 
    // };

        updateImg = () => {
          document.body.style.background= `url(${this.props.images[this.props.count]})`; 
    };
  
    
    render() {

      console.log('count ' + this.props.count);
      // console.log("img length " + this.props.images.length)
      
      return (
        <div>
            <div className = {classes.leftArrow} onClick={() => {this.props.leftBtnClick(); this.updateImg();}}> <FontAwesomeIcon icon="igloo" /> </div>
            <div className={classes.rightArrow} onClick={() => {this.props.rightBtnClick(); this.updateImg();}}> <FontAwesomeIcon icon="igloo" /> </div>    
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