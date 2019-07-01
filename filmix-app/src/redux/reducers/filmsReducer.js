import { DATA_LOADED, FILM_LOADED } from '../constants/actionTypes';
const initialState = {
    films: [],
    film: {}
};

export const films = (state = initialState, { payload, type }) => {
    switch(type) {
        case DATA_LOADED:
            return {...state, films: payload };
            case FILM_LOADED:
            return {...state, film: payload };
        default: {
            return state;
        }
    }
    
}
