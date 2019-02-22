import React from 'react';
import classes from './about.css';

const About = () => (
    <div className={classes.about}>
        <div className={classes.paragraph}> 
            Since 1986 Spraymate has been family owned and operated. We specialize in refinishing kitchen cabinets and shutters. We utilize a variety of spray-painting methods to achieve our high-end results. We have a reputation in the Greater Bay Area for high quality workmanship. To attest to this we have had general contractors and repeat customers that have been coming back for over 30 years.
        </div>
        <div className={classes.paragraph}>
            With his decades of experience, business owner/ operator Rick personally does every job. He is careful to protect your home by tenting your kitchen which helps contain the dust and spray. His hands on approach ensures that all steps of the refinishing process are completed to his standards. He is very meticulous down to leaving the job site neat and tidy daily.
        </div>
        <div className={classes.paragraph}>
            We only spray-paint California compliant, water based products. We are also able to spray-paint 0 VOC paints and materials. We can apply any color and sheen you pick. Rick’s vast knowledge of past and current paint products allows him to foresee compatibility issues with your existing finish and the current paints available. This knowledge which can only be obtained through years of experience helps him create a process that will ensure complete adhesion between the newly applied paint and your current finish.
        </div>
    </div>
)

export default About;