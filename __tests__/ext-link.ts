import * as React from 'react';
import {shallow} from 'enzyme';
import ExtLink from '../src/components/ext-link';

describe('<ExtLink>', () => {
    it('should render image and text inside an href link', () => {
        const url = {type: 'type', url: 'url'};
        const wrapper = shallow(React.createElement(ExtLink, {url}));
        expect(wrapper.find('a > img')).toHaveLength(1);
        expect(wrapper.find('a').text()).toBe('type');
    });
});
