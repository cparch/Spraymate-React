import React, {Component} from "react";
import classes from './testimonialList.css';
import * as actionTypes from '../../store/actions';
import {connect} from 'react-redux';

class TestimonialList extends Component {

    render() {

        const testimonialLists = this.props.testimonialSamples.map((e) => {
            return (
                <div>
                    <div className = {classes.individualContainer}> {e.testimonialSampless} </div> 
                    <div className = {classes.readMore}>- Read More</div>
                </div>)
            
            
                });

        return (

        <div className={classes.mainContainer}>
            {testimonialLists}

        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       count: state.count,
       readMe: state.readMe,
       testimonialSamples: state.testimonialSample,
       fullTestimonial: state.fullParagraph
    };
 };
 
 const mapDispatchToProps = dispatch => {
   return {
    read_more: (e) => dispatch({type: actionTypes.READ_ME, shortText: e}),
    leftBtnClick: () => dispatch({type: actionTypes.REMOVE_FROM_COUNT}),
   }  
 }; 
 
export default connect(mapStateToProps, mapDispatchToProps)(TestimonialList);
