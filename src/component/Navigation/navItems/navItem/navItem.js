import React from "react";
import classes from './navItem.css'
import { NavLink } from 'react-router-dom';

const NavItem = (props) => (
        <li className={classes.navItem}
        onClick={props.onClick}> 
            <NavLink 
                to={props.link}
                activeClassName={classes.active}
            >
                {props.children} 
            </NavLink> 
        </li>
    );
 
export default NavItem;
