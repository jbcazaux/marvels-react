import Marvel from '../model/marvel';

export interface State {
    readonly marvels: ReadonlyArray<Marvel>;
    readonly marvel: Marvel;
}