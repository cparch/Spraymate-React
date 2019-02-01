import React from 'react';
import classes from './navItem.css'
import { Link } from 'react-router-dom';

// const navItem = (props) => (
//     <li className = {classes.navItem}> 
//         <a className={props.active ? classes.active : null}> 
//             <Link  to={props.link}/>
//             {props.children} 
//         </a> 
//     </li>
// );

const navItem = (props) => (
    <li className = {classes.navItem}> 
        <Link className={props.active ? classes.active : null} to={props.link}>
            {props.children} 
        </Link> 
    </li>
);

export default navItem;