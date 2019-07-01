import { films, film } from './filmsReducer';  

import { combineReducers } from 'redux';

const rootReducer = combineReducers({ films });

export default rootReducer;