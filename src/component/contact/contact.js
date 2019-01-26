import React from 'react';
import classes from './contact.css';

const Contact = () => {
    return (
        <div >
                <form className={classes.mainContainer}>
                    <label> Name </label>
                    <input type="text" />
                    <label> email address </label>
                    <input type="email" />
                    <label> Message </label>
                    <textarea/>
                    <button> submit "not functional yet" </button>
                </form>
        </div>
    );
};

export default Contact;