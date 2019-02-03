import React, {Component} from "react";
import * as actionTypes from '../../../../store/actions';
import {connect} from 'react-redux';

class SideDrawerToggleBtn extends Component {

    render() {
        return (
            <div onClick = {() => {this.props.Toggle()}}>Menu</div>
        )
    }
}

const mapStateToProps = state => {
    return {
    //    sidedrawerShowing: state.showSideDrawer,
    };
 };
 
 const mapDispatchToProps = dispatch => {
   return {
    Toggle: () => dispatch({type: actionTypes.TOOGLE_SIDEDRAWER})
   }  
 }; 
 
export default connect(mapStateToProps, mapDispatchToProps)(SideDrawerToggleBtn);
