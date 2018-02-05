import libraries, { React, shallow } from './testLibraries';
import Menu from '../components/Menu';

describe('Menu', () => {
  it('renders without crashing', () => {
    shallow(<Menu/>);
  });
  const wrapper = shallow(<Menu/>);
  it('renders the menu button', () => {
    expect(wrapper.find('.Menu__button').length).toEqual(1);
  });
  it('renders the menu links', () => {
    expect(wrapper.find('.Menu__links').length).toEqual(1);
  });
});
