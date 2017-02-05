import {CharactersAction} from '../actions/characters';
import {Character} from '../model/character';
import {CharacterAction} from '../actions/character';

export const characters = (state: ReadonlyArray<Character> = [], action: CharactersAction) => {
    switch (action.type) {
        case 'SET_CHARACTERS':
            return action.characters;
        default:
            return state;
    }
};

export const character = (state: Character = Character.NULL, action: CharacterAction) => {
    switch (action.type) {
        case 'SET_CHARACTER':
            return action.character;
        default:
            return state;
    }
};