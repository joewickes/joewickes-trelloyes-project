import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('List component', () => {
  it('renders List without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the Card as expected', () => {
    const tree = renderer
      .create(<List header="Title" cards={[
        {
          id: 1,
          title: 'a',
          content: 'b',
        },{
          id: 2,
          title: 'c',
          content: 'd',
        }]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});