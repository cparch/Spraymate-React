import React, {Component} from "react";
import classes from './testimonial.css';
import * as actionTypes from '../../store/actions';
import {connect} from 'react-redux';



class Testimonial extends Component {
    render() {
        return (

        <div className={classes.mainContainer}>
            <div> {this.props.readMe} </div> 

            <div className={classes.individualContainer}>'SprayMate's results were so far superior and all done with minimum fuss and bother'.</div>
            <div className={classes.readMore}
                 onClick={(e) => this.props.read_more("SprayMate's results were so far")}> - Read More </div>
            
            <div className={classes.individualContainer}>'No matter how carefully I look, the piece seems as good as when I brought it home'.</div>
            <div className={classes.readMore}> - Read More</div>
            <div className={classes.individualContainer}>'I have been using Spraymate for ten years. As a professional painting contractor I appreciate great quality and timely service'.</div>
            <div className={classes.readMore}> - Read More</div>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       count: state.count,
       readMe: state.readMe,
    };
 };
 
 const mapDispatchToProps = dispatch => {
   return {
    read_more: (e) => dispatch({type: actionTypes.READ_ME, shortText: e}),
    leftBtnClick: () => dispatch({type: actionTypes.REMOVE_FROM_COUNT}),
   }  
 }; 
 
export default connect(mapStateToProps, mapDispatchToProps)(Testimonial);
