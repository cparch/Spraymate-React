import React, {Component} from "react";
import * as actionTypes from '../../../store/actions';
import {connect} from 'react-redux';
import NavigationItems from '../navItems/navItems';
import classes from './sideDrawer.css';

class sideDrawer extends Component {

    render() {

        // let showSideDrawer = false;
        let style = {
            transform: "translateX(-100%)"
        }

        if(this.props.sidedrawerShowing === true) {
            style.transform = "translateX(0)"
        }

   
        return (
            <div className = {classes.SideDrawer} style = {style}>
                <nav>
                    <NavigationItems className={classes.navItem}/>
                </nav>   
            </div>
        );
    }    
}

const mapStateToProps = state => {
    return {
       sidedrawerShowing: state.showSideDrawer,
    };
 };
 
 const mapDispatchToProps = dispatch => {
   return {
    // read_less: (i) => dispatch({type: actionTypes.READ_LESS, idx: i})
    Toggle: () => dispatch({type: actionTypes.TOOGLE_SIDEDRAWER})
   }  
 }; 
 
export default connect(mapStateToProps, mapDispatchToProps)(sideDrawer);

