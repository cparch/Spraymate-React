import React from 'react';
import classes from './navItems.modules.css';
import NavItem from './navItem/navItem';

const pages = [
    {
        link: "/Gallery",
        name: "Gallery"
    },
    {
        link: "/Testimonial",
        name: "Testimonial"
    },    
    {
        link: "/About",
        name: "About"
    },
    {
        link: "/Contact",
        name: "Contact"
    }
];


const NavItems = (props) => (
    <ul className = {classes.navItems}>
        {pages.map(page => (
            <NavItem
                link={page.link}
                // onClick={props.onClick}
                clickFunc={props.clickFunc}
                key = {page.link}
            > 
                {page.name} 
            </NavItem> 
        ))}
    </ul>
);

export default NavItems;