import * as React from 'react';
import {shallow} from 'enzyme';
import {Character} from '../src/model/character';
import {MarvelsInternal} from '../src/components/marvels';

describe('<Marvels>', () => {
    const marvel = new Character(
        1,
        'name',
        'description',
        'image.png',
        [],
        [],
        [{type: 'link', url: 'url'}]);
    const getMarvels = jest.fn();

    it('should render title', () => {
        const characters: ReadonlyArray<Character> = [];
        const wrapper = shallow(React.createElement(MarvelsInternal, {title: 'titre', characters, getMarvels}));

        expect(wrapper.find('h2').text()).toContain('titre');
    });

    it('should render list of marvels', () => {
        const marvel2 = new Character(2, 'name', '', 'image.png', [], [], []);
        const characters: ReadonlyArray<Character> = [marvel, marvel2];
        const wrapper = shallow(React.createElement(MarvelsInternal, {title: 'titre', characters, getMarvels}));

        expect(wrapper.find('Marvel')).toHaveLength(2);
    });
});
