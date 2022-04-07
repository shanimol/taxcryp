import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../button';

configure({ adapter: new Adapter() });

const mockFn = jest.fn();

describe('Button Component', () => {
  it('Renders button', () => {
    const component = shallow(
      <Button
        onClick={mockFn}
        label="Save"
        className=''
      />
    );
    const tree = shallowToJson(component);
    expect(tree).toMatchSnapshot();
  });
  it('Handles onClick', () => {
    const component = shallow(
      <Button
        onClick={mockFn}
        label="Save"
        className=''
      />
    );
    component.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});