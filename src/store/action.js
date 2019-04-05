import * as actionTypes from './actionType';

export const addToCount = () => {
    return {
        type: actionTypes.ADD_TO_COUNT 
    }
}

export const removeFromCount = () => {
    return {
        type: actionTypes.REMOVE_FROM_COUNT
    }
}

export const readMe = (i) => {
    return {
        type: actionTypes.READ_ME,
        idx: i,
    }
}

export const readLess = (i) => {
    return {
        type: actionTypes.READ_LESS,
        idx: i,
    }
}

export const toggleSideDrawer = () => {
    return {
        type: actionTypes.TOOGLE_SIDEDRAWER
    }
}