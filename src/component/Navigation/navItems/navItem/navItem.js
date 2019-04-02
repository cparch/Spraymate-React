import React from "react";
import classes from './navItem.modules.css'
import { NavLink } from 'react-router-dom';

const NavItem = (props) => (
        <li className={classes.navItem}
        onClick={props.clickFunc}> 
            <NavLink 
                to={props.link}
                activeClassName={classes.active}>
                {props.children} 
            </NavLink> 
        </li>
    );
 
export default NavItem;
