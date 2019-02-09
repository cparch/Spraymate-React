import React from "react";
import classes from './navItem.css'
import { NavLink } from 'react-router-dom';

<<<<<<< HEAD
class navItem extends Component {
    render(props) {
        return (
        <li className = {classes.navItem}> 
            <Link 
                to={this.props.link}
                onClick = {() => {this.props.Toggle()}}
                >{this.props.children} 
            </Link> 
        </li>
        );
    }    
};

const mapStateToProps = state => {
    return {
    };
 };
 
 const mapDispatchToProps = dispatch => {
   return {
    Toggle: () => dispatch({type: actionTypes.TOOGLE_SIDEDRAWER})
   }  
 }; 
=======
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
>>>>>>> nav-bar-update-v-2
 
export default NavItem;
