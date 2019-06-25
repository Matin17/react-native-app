import {ADD_PLACES, DELETE_PLACES, DESELECT_PLACES, SELECT_PLACES} from "./actionTypes";


export const addPlace = (placeName) => {
    return {
        type: ADD_PLACES,
        placeName: placeName
    };
}

export const deletePlace = () => {
    return {
        type: DELETE_PLACES
    }
}

export const  deselectPlace = () => {
    return {
        type: DESELECT_PLACES
    }
}

export const selectPlace = (key) => {
    return {
        type: SELECT_PLACES,
        placeKey: key
    }
}