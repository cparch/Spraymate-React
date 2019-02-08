import React from 'react';
import classes from './navItems.css';
import NavItem from './navItem/navItem';

const navItems = (props) => (
    <ul className = {classes.navItems}>
        <NavItem
            link="/Gallery"
            > Gallery </NavItem>
        <NavItem
            link="/Testimonial"
            > Testimony </NavItem>
        <NavItem
            link="/About"
            > About </NavItem>
         <NavItem
            link="/Contact"
            > Contact </NavItem>
    </ul>
);

export default navItems;