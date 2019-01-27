import React from 'react';
import classes from '../contactIndividual/contactIndividual.css'

const ContactIndividual = (props) => {
    return (
        <div className = {classes.container}>
            <header> {props.header} </header>
            <div className={classes.contactInfo}> {props.contactInfo} </div>
        </div>
    )
};

export default ContactIndividual;