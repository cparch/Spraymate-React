import React from 'react';
import classes from './contact.css';
import ContactIndividual from './contactIndividual/contactIndividual';

const Contact = (props) => {
    return (
        <div className={classes.mainContainer}>
            <ContactIndividual
            header = 'Call Us'
            symbol = "phone"
            contactInfo= '510-796-7922' />

            <ContactIndividual
            header = 'Email Us'
            symbol = 'envelope'
            contactInfo= 'spraymate@comcast.net' />
        </div>
    )
};

export default Contact;