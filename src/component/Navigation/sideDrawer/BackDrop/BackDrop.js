import React, {Component} from "react";
import classes from './BackDrop.modules.css'
import * as action from '../../../../store/action';
import {connect} from 'react-redux';

class BackDrop extends Component {

    render() {

                // if showside drawer === true then I need this component to display

        let style = {
            display: "none"
        }

        if(this.props.sidedrawerShowing === true) {
            style.display = "block"
        }

        return (
        <div className = {classes.BackDrop} 
            style = {style}
            onClick = {() => {this.props.Toggle()}}></div>
        )
    }
}

const mapStateToProps = state => {
    return {
    //    count: state.count,
       sidedrawerShowing: state.showSideDrawer,
    };
 };
 
 const mapDispatchToProps = dispatch => {
   return {
    // read_less: (i) => dispatch({type: actionTypes.READ_LESS, idx: i})
    Toggle: () => dispatch(action.toggleSideDrawer())
   }  
 }; 
 
export default connect(mapStateToProps, mapDispatchToProps)(BackDrop);