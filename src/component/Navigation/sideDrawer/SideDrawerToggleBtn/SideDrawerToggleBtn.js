import React, {Component} from "react";
// import * as actionTypes from '../../store/actions';
import {connect} from 'react-redux';

class SideDrawerToggleBtn extends Component {

    render() {
        return (

        <div>Menu Updated</div>
        )
    }
}

const mapStateToProps = state => {
    return {
    //    count: state.count,
    };
 };
 
 const mapDispatchToProps = dispatch => {
   return {
    // read_less: (i) => dispatch({type: actionTypes.READ_LESS, idx: i})
   }  
 }; 
 
export default connect(mapStateToProps, mapDispatchToProps)(SideDrawerToggleBtn);
