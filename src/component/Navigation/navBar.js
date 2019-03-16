import React from "react";
import classes from './navBar.modules.css';
import NavItems from './navItems/navItems.js';
import SideDrawerToggleBtn from './sideDrawer/SideDrawerToggleBtn/SideDrawerToggleBtn';

const NavBar = (props) => {
  console.log(classes);
  return (

    <header className={classes['navBar--navBar']}> 
      <div className={classes['navBar--mobile']}>
        <SideDrawerToggleBtn/>
      </div>
      <div className = {classes['navBar--desktop']}>Spraymate</div>
      <nav className = {classes['navBar--desktop']}> 
        <NavItems/>
      </nav>
    </header>

  )};

export default NavBar;