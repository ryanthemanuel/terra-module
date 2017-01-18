import React from 'react';
import { shallow } from 'enzyme';
import Module from '../../src/TerraModule';

const defaultVariety = <Module />;
const primaryVariety = <Module name="primary" variant="terra-Module--primary" />;


// Snapshot Tests
it('should render a default component', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper).toMatchSnapshot();
});

it('should render a primary component', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper).toMatchSnapshot();
});


// Prop Tests
it('should have the class terra-Module--default', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.prop('className')).toContain('terra-Module terra-Module--default');
});

it('should have the class terra-Module--primary', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper.prop('className')).toContain('terra-Module terra-Module--primary');
});


// Event Tests
it('should toggle the class u-selected on default', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Module--default').simulate('click');
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Module--default').simulate('click');
  expect(wrapper).toMatchSnapshot();
});

it('should toggle the class u-selected on primary', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Module--primary').simulate('click');
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-Module--primary').simulate('click');
  expect(wrapper).toMatchSnapshot();
});
