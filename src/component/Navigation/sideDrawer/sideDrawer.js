import React from 'react';
import NavigationItems from '../navItems/navItems';
import classes from './sideDrawer.css';

const sideDrawer = () => {

    let showSideDrawer = false;
    let style = {
        transform: "translateX(-100%)"
    }

    if(showSideDrawer === true) {
        style.transform = "translateX(0)"
    }

    return (
        <div className = {classes.SideDrawer} style = {style}>
            <nav>
                <NavigationItems/>
            </nav>   
        </div>
    );
}

export default sideDrawer;