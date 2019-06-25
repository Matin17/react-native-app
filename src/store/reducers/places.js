import {ADD_PLACES, DELETE_PLACES, DESELECT_PLACES, SELECT_PLACES} from "../actions/actionTypes";

const initialState = {
    places: [],
    selectedPlace: null
};

const reducer = (state = initialState, action) => {
    switch (action.type ) {
        case ADD_PLACES:
            return {
                ...state,
                places: state.places.concat({
                    value:state.placeName,
                    key: Math.random(),
                    image: {
                        uri: "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500"
                    }
                })
            };

        case DELETE_PLACES:
            return {
                ...state,
                places: state.places.filter((place) => {
                    return place.key !== state.selectedPlace.key;
                }),
                selectedPlace: null
            }

        case SELECT_PLACES:
            return {
                ...state,
                selectedPlace: state.places.find(place => {
                    return place.key === action.placeKey;
                })
            }
        case DESELECT_PLACES:
            return {
                ...state,
                selectedPlace: null
            }
        default: return state;
    }
};

export default reducer;