import {CharactersAction} from '../actions/characters';
import Character from '../model/character';

export const characters = (state: ReadonlyArray<Character> = [], action: CharactersAction) => {
    switch (action.type) {
        case 'SET_CHARACTERS':
            return action.characters;
        default:
            return state;
    }
};