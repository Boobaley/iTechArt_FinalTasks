import { USERNAME_RECEIVED, SET_LOADING } from '../constants/actionTypes';
const initialState = {
    user: null
};

export const user = (state = initialState, { payload, type }) => {
    switch(type) {
        case USERNAME_RECEIVED:
            return { ...state, user: payload };
        case SET_LOADING:
            return { ...state, loading: payload };
        default: {
            return state;
        }
    };  
};