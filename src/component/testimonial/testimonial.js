import React from 'react';
import classes from './testimonial.css';

const Testimonial = () => {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.individualContainer}>'SprayMate's results were so far superior and all done with minimum fuss and bother'.</div>
            <div className={classes.readMore}> - Read More</div>
            <div className={classes.individualContainer}>'No matter how carefully I look, the piece seems as good as when I brought it home'.</div>
            <div className={classes.readMore}> - Read More</div>
            <div className={classes.individualContainer}>'I have been using Spraymate for ten years. As a professional painting contractor I appreciate great quality and timely service'.</div>
            <div className={classes.readMore}> - Read More</div>
        </div>
    );
};

export default Testimonial;
