import { FILMS_REQUESTED, FILMS_LOADED, FILM_LOADED, FILM_REQUESTED, SET_LOADING } from '../constants/actionTypes';

export const loadingMiddleware = ({ dispatch }) => {
    return (next) => {
        return (action) => {
            switch(action.type) {
                case FILMS_REQUESTED:
                case FILM_REQUESTED:
                    dispatch({
                        type: SET_LOADING,
                        payload: true,
                    });
                    break;

                case FILMS_LOADED:
                case FILM_LOADED:
                    dispatch({
                        type: SET_LOADING,
                        payload: false,
                    });   
                    break; 
                
            }
            return next(action);
        }
    }
}