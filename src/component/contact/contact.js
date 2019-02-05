import React from 'react';
import classes from './contact.css';
import ContactIndividual from './contactIndividual/contactIndividual';

const Contact = (props) => {
    return (
<<<<<<< HEAD
        <div className={classes.contact}>
            <div> test from contact</div>
            <div> test from contact</div>
            <div> test from contact</div>
            <div> test from contact</div>
            <div> test from contact</div>
            <div> test from contact</div>
            <div> test from contact</div>
=======
        <div className ={classes.mainContainer}>
        {/* <div> */}
            <ContactIndividual
            header = 'Call Us'
            symbol = "phone"
            contactInfo= '510-796-7922' />

            <ContactIndividual
            header = 'Email Us'
            symbol = 'envelope'
            contactInfo= 'spraymate@comcast.net' />
>>>>>>> contact
        </div>
    )
};

export default Contact;