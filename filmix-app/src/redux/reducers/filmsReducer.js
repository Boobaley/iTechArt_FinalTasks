import { FILMS_LOADED, FILM_LOADED, SET_LOADING } from '../constants/actionTypes';
const initialState = {
    films: [],
    film: {},
    loading: true
};

export const films = (state = initialState, { payload, type }) => {
    switch(type) {
        case FILMS_LOADED:
            return { ...state, films: payload };
        case FILM_LOADED:
            return { ...state, film: payload };
        case SET_LOADING:
            return { ...state, loading: payload };
        default: {
            return state;
        }
    }  
}
