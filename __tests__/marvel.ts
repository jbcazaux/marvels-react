import * as React from 'react';
import {shallow} from 'enzyme';
import Marvel from '../src/components/marvel';
import {Character} from '../src/model/character';

describe('<Marvel>', () => {
    const marvel = new Character(
        1,
        'name',
        'description',
        'image.png',
        [],
        [],
        [{type: 'link', url: 'url'}]);

    it('should render clickable image', () => {
        const wrapper = shallow(React.createElement(Marvel, {character: marvel}));
        expect(wrapper.find('Link img')).toHaveLength(1);
        expect(wrapper.find('Link[to="/marvels/1"]')).toHaveLength(1);
    });
    it('should render name of marvel', () => {
        const wrapper = shallow(React.createElement(Marvel, {character: marvel}));
        expect(wrapper.find('.name').text()).toBe('name');
    });
    it('should render external link', () => {
        const wrapper = shallow(React.createElement(Marvel, {character: marvel}));
        expect(wrapper.find('.links ExtLink')).toHaveLength(1);
    });
});
