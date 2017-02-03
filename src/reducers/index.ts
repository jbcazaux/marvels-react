import {combineReducers} from 'redux';
import {State} from './state';
import {routerReducer} from 'react-router-redux';
import {characters} from './characters';

export const reducer = combineReducers<State>({
    characters,
    routing: routerReducer
});