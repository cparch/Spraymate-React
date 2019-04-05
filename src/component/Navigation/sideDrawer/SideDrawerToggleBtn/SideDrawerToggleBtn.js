import React, {Component} from "react";
import classes from './SideDrawerToggleBtn.modules.css';
import * as action from '../../../../store/action';
import {connect} from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)



class SideDrawerToggleBtn extends Component {

    render() {
        return (
            <div 
                className={classes['sideDrawerToggleBtn--header']}
                onClick = {() => {this.props.Toggle()}}>
                    <FontAwesomeIcon 
                        icon="bars"
                        className={classes['sideDrawerToggleBtn--icon']}/>
                    <div className={classes['sideDrawerToggleBtn--spraymate']}>Spraymate</div>
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
    Toggle: () => dispatch(action.toggleSideDrawer())
   }  
 }; 
 
export default connect(mapStateToProps, mapDispatchToProps)(SideDrawerToggleBtn);
