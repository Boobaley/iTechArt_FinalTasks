import { films } from './filmsReducer';  

import { combineReducers } from 'redux';

const rootReducer = combineReducers({ films });

export default rootReducer;