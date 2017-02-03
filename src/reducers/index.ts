import {combineReducers} from 'redux';
import {State} from './state';
import {routerReducer} from 'react-router-redux';
import {character, characters} from './characters';

export const reducer = combineReducers<State>({
    character,
    characters,
    routing: routerReducer
});