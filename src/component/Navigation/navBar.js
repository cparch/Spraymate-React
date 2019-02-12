import React from "react";
import classes from './navBar.css';
import NavItems from './navItems/navItems.js';
import SideDrawerToggleBtn from './sideDrawer/SideDrawerToggleBtn/SideDrawerToggleBtn';

const NavBar = (props) => {
  return (

    <header className={classes.navBar}> 
      <div className={classes.mobile}>
        <SideDrawerToggleBtn/>
      </div>
      <div className = {classes.desktop}>Spraymate</div>
      <nav className = {classes.desktop}> 
        <NavItems/>
      </nav>
    </header>

  )};

export default NavBar;