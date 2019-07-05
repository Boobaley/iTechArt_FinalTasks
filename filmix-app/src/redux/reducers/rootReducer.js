import { films } from './filmsReducer';  
import { user } from './userReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({ films, user });

export default rootReducer;