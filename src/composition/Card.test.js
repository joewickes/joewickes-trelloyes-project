import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Card from './Card';

describe('Card Component', () => {

  // The component renders without crashing
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // given the 
  it('renders the Card as expected', () => {
    const wrapper = shallow(<Card title="Title" content="Content"/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });


  // when remove card is clicked, it removes card from state (lists and allCards)
  it('removes the right card when deleted', function() {
    const wrapper = shallow(<Card title="Title" content="Content"/>);
    wrapper.find('button').simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});