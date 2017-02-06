import * as React from 'react';
import {shallow} from 'enzyme';
import Appearances from '../src/components/appearances';

describe('<Appearances>', () => {
    it('should render title and 2 elements', () => {
        const appearances: ReadonlyArray<string> = ['comic1', 'comic2'];
        const wrapper = shallow(React.createElement(Appearances, {title: 'titre', appearances}));
        expect(wrapper.find('h4').text()).toBe('titre');
        expect(wrapper.find('li')).toHaveLength(2);
        expect(wrapper.text()).toContain('comic1');
        expect(wrapper.text()).toContain('comic2');
    });
    it('should render properly with title only and no elements if no appearances', () => {
        const wrapper = shallow(React.createElement(Appearances, {title: 'titre', appearances: []}));
        expect(wrapper.find('h4').text()).toBe('titre');
        expect(wrapper.find('li')).toHaveLength(0);
    });
});
