import libraries, { React, shallow } from './testLibraries';
import Header from '../components/Header';

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Header/>);
  });
  const wrapper = shallow(<Header/>);
  it('renders the menu button', () => {
    expect(wrapper.find('.Header__button').length).toEqual(1);
  });
  it('renders the menu links', () => {
    expect(wrapper.find('.Header__links').length).toEqual(1);
  });
});
