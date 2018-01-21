import libraries, { React, shallow } from './testLibraries';
import ResumeInfo from '../components/ResumeInfo';
import socialMediaData from '../../data/socialMedia';
import info from '../../data/contactInfo';

describe('ResumeInfo', () => {
  it('renders without crashing', () => {
    shallow(<ResumeInfo contactInfo={info} />);
  });
  const wrapper = shallow(<ResumeInfo contactInfo={info} />);
  it('renders my image', () => {
    expect(wrapper.find('.ResumeInfo__img').length).toEqual(1);
  });
  it('renders my name', () => {
    expect(wrapper.find('.ResumeInfo__name').props().children).toEqual(`${info.firstName} ${info.lastName}`);
  });
  it('renders my phone number', () => {
    expect(wrapper.find('.ResumeInfo__phone-number').props().children).toEqual(info.phoneNumber)
  });
  it('renders my email address', () => {
    expect(wrapper.find('.ResumeInfo__email-address').props().children).toEqual(info.emailAddress)
  });
  it('renders the social media links', () => {
    expect(wrapper.find('SocialMediaLink').length).toEqual(socialMediaData.length);
  });
  it('renders the skill levels', () => {
    expect(wrapper.find('SkillLevel').length).toBeGreaterThan(0);
  });
})
