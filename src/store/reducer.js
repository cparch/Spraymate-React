import * as actionTypes from './actions';

const sampleTestimony = [{showSample: true}, {showSample: true},{showSample: true}]

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
   
    showTestimonial: [...sampleTestimony],
    
    showSideDrawer: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case actionTypes.ADD_TO_COUNT:
        //     return {
        //         ...state,
        //         count: (state.count + 1) % state.images.length
        //     } 

        // case actionTypes.REMOVE_FROM_COUNT:
        //     let subtractCount = state.count - 1

        //         if(state.count <= 0){
        //             subtractCount = state.images.length-1
        //          }
            
        //         return {
        //             ...state,
        //             count:subtractCount
        //         }
        
        case actionTypes.READ_ME:

            const updatedTestimonialSample = [...sampleTestimony]
            updatedTestimonialSample[action.idx].showSample = false;


            return {
                ...state,
                showTestimonial: updatedTestimonialSample
            }

        case actionTypes.READ_LESS:

            const updatedTestimonialSampleReadLess = [...sampleTestimony]
            updatedTestimonialSampleReadLess[action.idx].showSample = true;


            return {
                ...state,
                showTestimonial: updatedTestimonialSampleReadLess
            }

        case actionTypes.TOOGLE_SIDEDRAWER:{ 

                const SideDrawer = state.showSideDrawer
                const updatedSideDrawer = !SideDrawer

                return {
                    ...state,
                    showSideDrawer: updatedSideDrawer
                }
            }   
        default: return state;
    }
  
};

export default reducer

