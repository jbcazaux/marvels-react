import * as React from 'react';
import {shallow} from 'enzyme';
import {MarvelDetailInternal} from '../src/components/marvel-detail';
import {Character} from '../src/model/character';

describe('<MarvelDetail>', () => {
    const props = {
        character: new Character(1, 'name', 'description', 'image.png', [], [], []),
        characterId: 1,
        getMarvel: jest.fn()
    };
    it('should render a thumbnail', () => {
        const wrapper = shallow(React.createElement(MarvelDetailInternal, props));
        expect(wrapper.find('img')).toHaveLength(1);
    });
    it('should render a title with name and description', () => {
        const wrapper = shallow(React.createElement(MarvelDetailInternal, props));
        expect(wrapper.find('section.title').text()).toContain('name');
        expect(wrapper.find('section.title').text()).toContain('description');
    });
    it('should render comics appearances', () => {
        const wrapper = shallow(React.createElement(MarvelDetailInternal, props));
        expect(wrapper.find('Appearances[title="Comics"]')).toHaveLength(1);
    });
    it('should render series appearances', () => {
        const wrapper = shallow(React.createElement(MarvelDetailInternal, props));
        expect(wrapper.find('Appearances[title="Series"]')).toHaveLength(1);
    });
    it('should render with NULL character', () => {
        const propsWithNullCharacter = Object.assign({}, props, {character: Character.NULL});
        const wrapper = shallow(React.createElement(MarvelDetailInternal, propsWithNullCharacter));
        expect(wrapper.text()).toContain('Character not foud');
    });
});
