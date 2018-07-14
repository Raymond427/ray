import libraries, { React, shallow } from './testLibraries';
import SkillLevel from '../components/SkillLevel';

describe('SkillLevel', () => {
  it('renders without crashing', () => {
    shallow(<SkillLevel/>);
  });
  const wrapper = shallow(<SkillLevel/>);
  it('renders the skill name', () => {
    expect(wrapper.find('.SkillLevel__name').length).toEqual(1);
  });
  it('renders the progess bar', () => {
    expect(wrapper.find('.SkillLevel__bar').length).toEqual(1);
  });
});
