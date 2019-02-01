import React from 'react';
import classes from './navItem.css'
import { Link } from 'react-router-dom';

const navItem = (props) => (
    <li className = {classes.navItem}> 
        <a 
            Link ={props.link}
            className={props.active ? classes.active : null}> {props.children} 
        </a> 
    </li>
);

export default navItem;