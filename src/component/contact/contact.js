import React from 'react';
// import classes from './contact.css';
import ContactIndividual from './contactIndividual/contactIndividual';

const Contact = (props) => {
    return (
        // <div className ={classes.mainContainer}>
        <div>
            <ContactIndividual
            header = 'Call Us'
            contactInfo= '510-796-7922' />

            <ContactIndividual
            header = 'Email Us'
            contactInfo= 'spraymate@comcast.net' />
        </div>
    )
};

export default Contact;