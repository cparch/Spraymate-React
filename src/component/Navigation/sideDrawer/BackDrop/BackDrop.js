import React, {Component} from "react";
import classes from './BackDrop.css'
import * as actionTypes from '../../../../store/actions';
import {connect} from 'react-redux';

class BackDrop extends Component {

    render() {

                // if showside drawer === true then I need this component to display

        let style = {
            display: "none"
        }

        if(this.props.sidedrawerShowing === true) {
            style.display = "block"
        }

        return (
        <div className = {classes.BackDrop} 
            style = {style}
            onClick = {() => {this.props.Toggle()}}></div>
        )
    }
}

const mapStateToProps = state => {
    return {
    //    count: state.count,
       sidedrawerShowing: state.showSideDrawer,
    };
 };
 
 const mapDispatchToProps = dispatch => {
   return {
    // read_more: (i) => dispatch({type: actionTypes.READ_ME, indexSport: i}),
    // read_less: (i) => dispatch({type: actionTypes.READ_LESS, idx: i})
    Toggle: () => dispatch({type: actionTypes.TOOGLE_SIDEDRAWER})
   }  
 }; 
 
export default connect(mapStateToProps, mapDispatchToProps)(BackDrop);







// import React, {Component} from "react";
// import classes from './testimonialList.css';
// import * as actionTypes from '../../store/actions';
// import {connect} from 'react-redux';

// class TestimonialList extends Component {

//     render() {

//         const testimonialLists = this.props.showTestimonial.map((e, i) => {

//             let moreLessButton = "- read more"

//             if (this.props.showTestimonial[i].showSample === false){
//                 moreLessButton = null
//             }
            
//             return (
//                 <div>
//                     <div className = {classes.individualContainer}> {e.text} </div> 

//                     <div className = {classes.readMore}
//                         onClick = {() => {this.props.read_more(i)}}>{moreLessButton}  
//                     </div>

//                 </div>)
//                 });
//         return (

//         <div className={classes.mainContainer}>
//             {testimonialLists}
//         </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//        count: state.count,
//        readMe: state.readMe,
//        showTestimonial: state.showTestimonial,
//        fullTestimonial: state.fullParagraph
//     };
//  };
 
//  const mapDispatchToProps = dispatch => {
//    return {
//     read_more: (i) => dispatch({type: actionTypes.READ_ME, indexSport: i}),
//     read_less: (i) => dispatch({type: actionTypes.READ_LESS, idx: i})
//    }  
//  }; 
 
// export default connect(mapStateToProps, mapDispatchToProps)(TestimonialList);
