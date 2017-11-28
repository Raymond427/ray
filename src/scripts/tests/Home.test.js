import libraries, { React, shallow, mount } from './testLibraries';
import Home from '../components/Home';
import Intro from '../components/homepage/Intro';

describe('Home', () => {
  it('renders without crashing', () => {
    shallow(<Home/>)
  });

  it('renders Intro component', () => {
    const wrapper = shallow(<Home/>);
    expect(wrapper.find('Intro').length).toEqual(1);
  });

  it('renders Software Engineer component', () => {
    const wrapper = shallow(<Home/>);
    expect(wrapper.find('SoftwareEngineer').length).toEqual(1);
  });

  it('renders two Hobby component', () => {
    const wrapper = shallow(<Home/>);
    expect(wrapper.find('Hobby').length).toEqual(2);
  });

  it('renders Scholar component', () => {
    const wrapper = shallow(<Home/>);
    expect(wrapper.find('Scholar').length).toEqual(1);
  });
});
