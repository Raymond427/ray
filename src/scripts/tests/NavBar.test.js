import libraries, { React, shallow } from './testLibraries';
import NavBar from '../components/NavBar';

describe('NavBar', () => {
  it('renders without crashing', () => {
    shallow(<NavBar/>);
  });
  const wrapper = shallow(<NavBar/>);
  it('renders the menu button', () => {
    expect(wrapper.find('.NavBar__button').length).toEqual(1);
  });
  it('renders the menu links', () => {
    expect(wrapper.find('.NavBar__links').length).toEqual(1);
  });
});
