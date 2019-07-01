import { DATA_LOADED } from '../constants/actionTypes';
const initialState = {
    films: [],
};

export const films = (state = initialState, { payload, type }) => {
    switch(type) {
        case DATA_LOADED:
            return {...state, films: payload };
        default: {
            return state;
        }
    }
    
}
