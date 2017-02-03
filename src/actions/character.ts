import Character from '../model/character';
import AxiosProvider from '../http/axios-provider';
import {ThunkActionCreator} from '../index';
import AxiosXHR = Axios.AxiosXHR;

const CHARACTER_URL = '/v1/public/characters/{id}';

export interface CharacterAction { readonly type: string; readonly character: Character;
}

export const setMarvel: ((marvel: Character) => CharacterAction) =
    (marvel: Character) => {
        return {type: 'SET_CHARACTER', character: marvel};
    };

export const fetchMarvel: ((id: number) => Promise<Character>) =
    (id: number) => AxiosProvider.axios()
        .get(CHARACTER_URL.replace('{id}', id.toString()))
        .then((resp: AxiosXHR<any>) => resp.data)
        .then(data => data.data.results)
        .then(results => results.length === 1 ? results[0] : Promise.reject('Not a single result'))
        .then((c: any) => {
            const image = c.thumbnail ? c.thumbnail.path.concat('.').concat(c.thumbnail.extension) : '';
            const comics = c.comics ? c.comics.items : [];
            const series = c.series ? c.series.items : [];
            const urls = c.urls.map((url: any) => {
                return {type: url.type, url: url.url};
            });
            return new Character(c.id, c.name, c.description, image, comics, series, urls);
        });

export const getMarvel: ThunkActionCreator<Promise<void>> =
    (id: number) => (dispatch) => fetchMarvel(id)
        .then(character => dispatch(setMarvel(character)))
        .catch(() => dispatch(setMarvel(Character.NULL)))
        .then(() => Promise.resolve());