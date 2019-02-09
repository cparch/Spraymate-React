import React, {Component} from "react";
import classes from './navItem.css'
import { Link } from 'react-router-dom';
import * as actionTypes from '../../../../store/actions';
import {connect} from 'react-redux';

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
 
export default connect(mapStateToProps, mapDispatchToProps)(navItem);
