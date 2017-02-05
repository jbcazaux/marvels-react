import {Character} from '../model/character';

export interface State {
    readonly characters: ReadonlyArray<Character>;
    readonly character: Character;
    readonly routing: any;
}