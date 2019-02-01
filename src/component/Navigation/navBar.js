import React from "react";
import classes from './navBar.css';
// import { Link } from 'react-router-dom';
import NavItems from './navItems/navItems.js';

const NavBar = () => {
  return (

    <header className={classes.navBar}> 
      <div>MENU</div>
      <nav> 
        <NavItems/>
      </nav>
    </header>

  )};

export default NavBar;