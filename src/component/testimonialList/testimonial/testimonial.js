import React from 'react';
import classes from './testimonial.css'


const Testimonial = (props) => {

    //when you click "read more" it should change from the short testimonial 
    //to the full testimonial
    //if full_testimonial.indexOf(short testimonial) is a match
    //then print the full text

    let printOut = props.testimon;
    // let printOut = props.full_Testimonial;


    // const readMeHandler = () => {
    //     props.full_Testimonial.map((e, i) => {

    //         if(e.indexOf(props.testimon) >= 0){
    //             printOut = e
    //         }
    //     })

    //     printOut = "testing on Click"
    //     console.log("test")

    //     alert("test")

            //////// try having this function change the class
            //////// try the fiter
            //////// try assiging the state rather than just "testing on click"
    // };



    const readMeHandler = (fullReadMore) => {
        // printOut = fullReadMore;
            // printOut = "test"
            // printOut = props.i
            alert(fullReadMore)
    };

    return (
        <div>
            {/* <div className = {classes.individualContainer}> {props.testimon} </div> */}
            <div className = {classes.individualContainer}> {printOut} </div>

            <div className = {classes.readMore}
            onClick = {() => {readMeHandler( props.full_Testimonial[props.index] )}}>- Read More </div> */}
           
            {/* onClick = {props.readMore}>- Read More </div> */}
            {/* <div> {printOut}</div> */}
            {/* <div> {props.full_Testimonial[props.index]} </div> */}
            
        </div>
    )
}

export default Testimonial;