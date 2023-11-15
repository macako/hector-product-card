import React from 'react';
import render from 'react-test-renderer';

import { ProductTitle } from '../../src/components';

describe('<ProductTitle />', () => {
  test('should display component as expected', () => {
    const wrapper = render.create(<ProductTitle title="test" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
