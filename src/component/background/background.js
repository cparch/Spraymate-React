import React, {Component} from "react";
import * as actionTypes from '../../store/actions';
import {connect} from 'react-redux';
import classes from './background.css';



class Background extends Component {

      updateImg = () => {
      document.body.style.background = `url(${this.props.imageUrl[this.props.count]})`; 
      // document.body.style.background = `url(${this.props.imageUrl[3]})`; 
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
 
 const mapDispatchToProps = dispatch => {
   return {
    // read_more: (e) => dispatch({type: actionTypes.READ_ME, shortText: e}),
    // leftBtnClick: () => dispatch({type: actionTypes.REMOVE_FROM_COUNT}),
   }  
 }; 
 
export default connect(mapStateToProps, mapDispatchToProps)(Background);
