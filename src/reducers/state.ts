import Character from '../model/character';

export interface State {
    readonly marvels: ReadonlyArray<Character>;
    readonly marvel: Character;
    readonly routing: any;
}