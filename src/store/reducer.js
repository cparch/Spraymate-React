import * as actionTypes from './actions';

const sampleTestimony = [{text:"SprayMate's results were so far superior and all done with minimum fuss and bother", showSample: true},
{text: "No matter how carefully I look, the piece seems as good as when I brought it home", showSample: true},
 {text: "I have been using Spraymate for ten years. As a professional painting contractor I appreciate great quality and timely service", showSample:true}]

 const fullParagraph = ["I did a major upgrade on my condo. Rather than replace my old, solid wood kitchen cabinets, I contracted with SprayMate to paint the old cabinet boxes and install freshly painted, MDF constructed top to bottom and side to side drawers and doors using a semigloss paint with interior hinges replacing exterior hinges. The finished project turned out exactly the way I'd hoped. What had been funky, 1960's era cabinets now looked like they'd been replaced with the brand new, contemporary, clean white European cabinets. While a bit more expensive than most of the painters I talked with, SprayMate's results were so far superior and all done with minimum fuss and bother, efficiently and great responsiveness to my questions and preferences. I can't recommend SprayMate more highly.",
 "When a plumber accidentally splashed wastewater with drain cleaner on a painted TV console, I was convinced it was destroyed. And then came Rick and Stacey to the rescue! They looked at the pictures, said 'no problem', gave me a fast and fair quote and answered all of my questions with grace and speed. The only pain was slogging through traffic to get the console from my Daly City home to their shop in Newark. No matter how carefully I look, the piece seems as good as when I brought it home. So glad to have found them and happy to give them my highest recommendation!",
 "I have been using Spraymate for ten years. As a professional painting contractor I appreciate great quality and timely service. Rick and Stacy have come through for me time and time again."]


const initialState = {
    count: 0,
    images: [
        "https://holdennewhomes.files.wordpress.com/2015/02/6838-ranger-rd-frisco-tx-mls-7.jpg", 
        "https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c8c144e8e71f0226b0f87f157ba468a&auto=format&fit=crop&w=1502&q=80", 
        "https://imperialcustomcabinets.com/wp-content/uploads/gallery/kitchens/Kitchen-Cabinets-Contemporary-Maple-Quartersawn.jpg", 
        "https://images.unsplash.com/photo-1523359228466-a955d81a77f4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=95da52751f0900d753b3c22834462f43&auto=format&fit=crop&w=1534&q=80", 
        "https://norfolkkitchenandbath.scdn8.secure.raxcdn.com/wp-content/uploads/2015/01/Slider-Best-SP-e1438179521426.jpg"
       ],

    // images:['one', 'two', 'three', 'four', 'five', 'six'],
   
    showTestimonial: [...sampleTestimony],
    
    readMe: "null",
    showSideDrawer: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_COUNT:
            return {
                ...state,
                count: (state.count + 1) % state.images.length
            } 

        case actionTypes.REMOVE_FROM_COUNT:
            let subtractCount = state.count - 1

                if(state.count <= 0){
                    subtractCount = state.images.length-1
                 }
            
                return {
                    ...state,
                    count:subtractCount
                }
        
        case actionTypes.READ_ME:

            const updatedTestimonialSample = [...sampleTestimony]
            updatedTestimonialSample[action.idx].text = fullParagraph[action.idx];
            updatedTestimonialSample[action.idx].showSample = false;


            return {
                ...state,
                showTestimonial: updatedTestimonialSample
            }

            case actionTypes.TOOGLE_SIDEDRAWER:

            const SideDrawer = state.showSideDrawer
            const updatedSideDrawer = !SideDrawer

            return {
                ...state,
                showSideDrawer: updatedSideDrawer
            }
        default: return state;
    }
  
};

export default reducer

