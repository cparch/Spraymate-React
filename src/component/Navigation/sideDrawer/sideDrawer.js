import React from "react";
import * as action from '../../../store/action';
import { connect } from 'react-redux';
import NavigationItems from '../navItems/navItems';
import classes from './sideDrawer.modules.css';

const SideDrawer = ({ sidedrawerShowing, toggle }) => {
    let style = {
        transform: "translateX(-100%)"
    }

    if (sidedrawerShowing) {
        style.transform = "translateX(0)"
    }

    return (
        <div className={classes['sideDrawer--SideDrawer']} style={style}>
            <nav>
                <NavigationItems 
                    className={classes['sideDrawer--navItem']}
                    clickFunc={toggle}
                />
            </nav>   
        </div>
    );
};

const mapStateToProps = state => ({
    sidedrawerShowing: state.showSideDrawer
});
 
 const mapDispatchToProps = dispatch => ({
    toggle: () => dispatch(action.toggleSideDrawer())
 }); 
 
export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);