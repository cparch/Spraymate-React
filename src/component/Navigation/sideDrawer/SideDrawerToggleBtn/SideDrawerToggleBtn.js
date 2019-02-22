import React, {Component} from "react";
import classes from './SideDrawerToggleBtn.css';
import * as actionTypes from '../../../../store/actions';
import {connect} from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)



class SideDrawerToggleBtn extends Component {

    render() {
        return (
            <div 
                className={classes.header}
                onClick = {() => {this.props.Toggle()}}>
                    <FontAwesomeIcon 
                        icon="bars"
                        className={classes.icon}/>
                    <div className={classes.spraymate}>Spraymate</div>
            </div>
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
