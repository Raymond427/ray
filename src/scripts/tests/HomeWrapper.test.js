import libraries, { React, shallow, mount } from './testLibraries';
import HomeWrapper from '../components/HomeWrapper';
import Intro from '../components/homepage/Intro';

describe('HomeWrapper', () => {
  it('renders without crashing', () => {
    shallow(<HomeWrapper/>)
  });

  it('renders Intro component', () => {
    const wrapper = mount(<HomeWrapper/>);
    expect(wrapper.find('.Intro').length).toEqual(1);
  });

  it('renders Software Engineer component', () => {
    const wrapper = mount(<HomeWrapper/>);
    expect(wrapper.find('.SoftwareEngineer').length).toEqual(1);
  });

  it('renders two Hobby component', () => {
    const wrapper = mount(<HomeWrapper/>);
    expect(wrapper.find('.Hobby').length).toEqual(2);
  });

  it('renders Scholar component', () => {
    const wrapper = mount(<HomeWrapper/>);
    expect(wrapper.find('.Scholar').length).toEqual(1);
  });
});
