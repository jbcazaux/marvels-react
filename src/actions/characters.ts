import Character from '../model/character';
import AxiosProvider from '../http/axios-provider';
import {ThunkActionCreator} from '../index';
import AxiosXHR = Axios.AxiosXHR;

const CHARACTERS_URL = '/v1/public/characters';

export interface CharactersAction { readonly type: string; readonly characters: ReadonlyArray<Character>;
}

export const setMarvels: ((marvels: ReadonlyArray<Character>) => CharactersAction) =
    (marvels: ReadonlyArray<Character>) => {
        return {type: 'SET_CHARACTERS', characters: marvels};
    };

export const fetchMarvels: (() => Promise<ReadonlyArray<Character>>) =
    () => AxiosProvider.axios()
        .get(CHARACTERS_URL)
        .then((resp: AxiosXHR<any>) => resp.data)
        .then((data) => data.data.results)
        .then((characters: any[]) => characters.map(c => {
            const image = c.thumbnail ? c.thumbnail.path + c.thumbnail.extension : '';
            const comics = c.comics ? c.comics.items : [];
            const series = c.series ? c.series.items : [];
            return new Character(c.id, c.name, c.description, image, c.resourceURI, comics, series);
        }));

export const getMarvels: ThunkActionCreator<Promise<void>> =
    () => (dispatch) => fetchMarvels()
        .then(characters => dispatch(setMarvels(characters)))
        .then(() => Promise.resolve());