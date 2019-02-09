import React from "react";
import * as actionTypes from '../../../store/actions';
import { connect } from 'react-redux';
import NavigationItems from '../navItems/navItems';
import classes from './sideDrawer.css';

const SideDrawer = ({ sidedrawerShowing, toggle }) => {
    let style = {
        transform: "translateX(-100%)"
    }
    if (sidedrawerShowing) {
        style.transform = "translateX(0)"
    }

    return (
        <div className = {classes.SideDrawer} style = {style}>
            <nav>
                <NavigationItems 
                className={classes.navItem}
                onClick={() => {this.props.Toggle()}}/>
                />
            </nav>   
        </div>
    );   
}

const mapStateToProps = state => ({
    sidedrawerShowing: state.showSideDrawer
});
 
 const mapDispatchToProps = dispatch => ({
    toggle: () => dispatch({type: actionTypes.TOOGLE_SIDEDRAWER})
 }); 
 
export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);

