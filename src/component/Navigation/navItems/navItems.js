import React from 'react';
import classes from './navItems.css';
import NavItem from './navItem/navItem';

const navItems = (props) => (
    <ul className = {classes.navItems}>
        <NavItem
            link="/Gallery"
            active> Gallery </NavItem>
        <NavItem
            link="/Testimonial"
            active> Testimony </NavItem>
        <NavItem
            link="/About"
            active> About </NavItem>
         <NavItem
            link="/Contact"
            active> Contact </NavItem>
    </ul>
);

export default navItems;