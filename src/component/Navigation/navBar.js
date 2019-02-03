import React from "react";
import classes from './navBar.css';
import NavItems from './navItems/navItems.js';

const NavBar = () => {
  return (

    <header className={classes.navBar}> 
      <div className={classes.mobile}>Menu</div>
      <div className = {classes.desktop}>Spraymate</div>
      <nav className = {classes.desktop}> 
        <NavItems/>
      </nav>
    </header>

  )};

export default NavBar;