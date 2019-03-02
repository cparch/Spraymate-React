import React, {Component} from "react";
import classes from './testimonialList.css';
import * as actionTypes from '../../store/actions';
import {connect} from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faIgloo, faUserCircle  } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowAltCircleLeft, faIgloo, faUserCircle)

class TestimonialList extends Component {
    render() {
        console.log(classes)
        const testimonialLists = this.props.showTestimonial.map((e, i) => {
            const fullParagraph = ["I did a major upgrade on my condo. Rather than replace my old, solid wood kitchen cabinets, I contracted with SprayMate to paint the old cabinet boxes and install freshly painted, MDF constructed top to bottom and side to side drawers and doors using a semigloss paint with interior hinges replacing exterior hinges. The finished project turned out exactly the way I'd hoped. What had been funky, 1960's era cabinets now looked like they'd been replaced with the brand new, contemporary, clean white European cabinets. While a bit more expensive than most of the painters I talked with, SprayMate's results were so far superior and all done with minimum fuss and bother, efficiently and great responsiveness to my questions and preferences. I can't recommend SprayMate more highly.",
            "When a plumber accidentally splashed wastewater with drain cleaner on a painted TV console, I was convinced it was destroyed. And then came Rick and Stacey to the rescue! They looked at the pictures, said 'no problem', gave me a fast and fair quote and answered all of my questions with grace and speed. The only pain was slogging through traffic to get the console from my Daly City home to their shop in Newark. No matter how carefully I look, the piece seems as good as when I brought it home. So glad to have found them and happy to give them my highest recommendation!",
            "I have been using Spraymate for ten years. As a professional painting contractor I appreciate great quality and timely service. Rick and Stacy have come through for me time and time again."]

            const sampleTestimony = ["SprayMate's results were so far superior and all done with minimum fuss and bother",
            "No matter how carefully I look, the piece seems as good as when I brought it home",
            "I have been using Spraymate for ten years. As a professional painting contractor I appreciate great quality and timely service"]

            const PersonInfo = [{name: "Herb K.", location: "Oakland"}, 
            {name:"Gayle C.", location: "Daily City"}, 
            {name:"John H.", location: "Redwood City"}]

            if (!this.props.showTestimonial[i].showSample){
                return (
                   <div className = {classes['individualContainer']}>
                        <div> 
                            <FontAwesomeIcon
                             className={classes['icon']}
                             icon='user-circle' />
                            {PersonInfo[i].name}  - {PersonInfo[i].location}
                        </div>
                       
                        <div className = {classes['individualContainer']}> {fullParagraph[i]} </div> 

                        <div className = {classes['readMore']}
                        onClick = {() => {this.props.read_less(i)}}> -read less </div>
                   </div>
                )
            } else {
                return(
                    <div className = {classes['individualContainer']}>
                        <div> 
                            <FontAwesomeIcon
                             className={classes['icon']}
                             icon='user-circle' />
                            {PersonInfo[i].name}  - {PersonInfo[i].location}
                        </div>

                        <div className={classes['quote']}>  "{sampleTestimony[i]}..." </div> 

                        <div className = {classes['readMore']}
                            onClick = {() => {this.props.read_more(i)}}> -read more 
                        </div>

                    </div>
                )
            }
            
                });
        return (

        <div className={classes['mainContainer']}>
           
            {testimonialLists}
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       showTestimonial: state.showTestimonial,
    };
 };
 
 const mapDispatchToProps = dispatch => {
   return {
    read_more: (i) => dispatch({type: actionTypes.READ_ME, idx: i}),
    read_less: (i) => dispatch({type: actionTypes.READ_LESS, idx: i})
   }  
 }; 
 
export default connect(mapStateToProps, mapDispatchToProps)(TestimonialList);
