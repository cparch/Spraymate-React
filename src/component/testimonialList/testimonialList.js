import React, {Component} from "react";
import classes from './testimonialList.css';
import * as actionTypes from '../../store/actions';
import {connect} from 'react-redux';

class TestimonialList extends Component {

    render() {

        const testimonialLists = this.props.testimonialSamples.map((e, i) => {

            return (
                <div>
                    <div className = {classes.individualContainer}> {e} </div> 

                    <div className = {classes.readMore}
                        // onClick = {(i) => {this.props.read_more(i)}}>- Read More</div>
                        onClick = {() => {this.props.read_more(i)}}>- Read More</div>

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
    read_more: (i) => dispatch({type: actionTypes.READ_ME, indexSport: i}),
   }  
 }; 
 
export default connect(mapStateToProps, mapDispatchToProps)(TestimonialList);
