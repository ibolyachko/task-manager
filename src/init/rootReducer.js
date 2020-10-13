// Core
import { combineReducers } from 'redux';

//Reducers
import {todoReducer as todo} from '../bus/todo/reducer';

export const rootReducer = combineReducers({
    todo,
});