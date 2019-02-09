import React from "react";
import classes from './navItem.css'
import { NavLink } from 'react-router-dom';

const navItem = (props) => (
        <li className = {classes.navItem}> 
            <NavLink 
                to={props.link}
                activeClassName = {classes.active}
                >{props.children} 
            </NavLink> 
        </li>
    );
 
export default navItem;
