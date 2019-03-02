import React from 'react';
import classes from './contact.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faPhone, faEnvelope)

const Contact = (props) => {
    return (
            <div className={classes['contacts--mainContainer']}>
                <div className = {classes['contacts--container']}>
                    <header>Call Us</header>
                    <div className={classes['contacts--symbol']}> 
                        <FontAwesomeIcon icon="phone"/> 
                    </div>
                     <div className={classes['contacts--contactInfo']}> 510-796-7922 </div>
                </div>
                <div className = {classes['contacts--container']}>
                    <header>Email Us</header>
                    <div className={classes['contacts--symbol']}>  
                        <FontAwesomeIcon icon="envelope"/> 
                    </div>
                    <div className={classes['contacts--contactInfo']}> 
                        <a href="mailto:spraymate@comcast.net">spraymate@comcast.net</a>
                    </div>
                </div>
            </div>
    )
};

export default Contact