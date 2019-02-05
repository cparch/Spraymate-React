import React from 'react';
import classes from '../contactIndividual/contactIndividual.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faPhone, faEnvelope)

const ContactIndividual = (props) => {
    return (
        <div className = {classes.container}>
            <header> {props.header} </header>
            <div className={classes.symbol}>  <FontAwesomeIcon  icon={props.symbol} /> </div>
            <div className={classes.contactInfo}> {props.contactInfo} </div>
        </div>
    )
};

export default ContactIndividual;