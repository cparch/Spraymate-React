import React from 'react';
import classes from './contact.module.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faPhone, faEnvelope)

const Contact = (props) => {
    return (
            <div>
                <form 
                    className = {classes.contactFormMainContainer} 
                    method="POST" action="https://formspree.io/chadparchila@gmail.com">
                    <p className={classes.contactFormHeader}> Contact Us </p>
                    <p> Email Address </p>
                    <input 
                        className={classes.contactFormEmail} 
                        type="email" name="email" 
                        placeholder="Your email"/>
                    <p> Message </p>
                    <textarea 
                        className={classes.contactFormTextArea}
                        name="message" 
                        placeholder="Type your message for Spraymate here!"/>
                   
                    <button 
                        className = {classes.contactFormSubmitBtn}
                        type="submit"> Submit Message
                    </button>
                </form>
                
                <div className={classes.mainContainer}>
                    <div className = {classes.container}>
                        <header>Call Us</header>
                        <div className={classes.symbol}> 
                            <FontAwesomeIcon icon="phone"/> 
                        </div>
                        <div className={classes.contactInfo}> 510-796-7922 </div>
                    </div>
                    <div className = {classes.container}>
                        <header>Email Us</header>
                        <div className={classes.symbol}>  
                            <FontAwesomeIcon icon="envelope"/> 
                        </div>
                        <div className={classes.contactInfo}> 
                            <a href="mailto:spraymate@comcast.net">spraymate@comcast.net</a>
                        </div>
                    </div>
                </div>
            </div>
           
    )
};

export default Contact