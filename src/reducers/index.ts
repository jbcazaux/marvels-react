import {combineReducers} from 'redux';
import {State} from './state';
import {routerReducer} from 'react-router-redux';

export const reducer = combineReducers<State>({
    routing: routerReducer
});