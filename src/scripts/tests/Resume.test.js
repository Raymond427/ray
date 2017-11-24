import libraries, { React, shallow } from './testLibraries';
import socialMediaData from '../../data/socialMedia.json';
import Resume from '../components/Resume';
import info from '../../data/contactInfo';
import experienceData from '../../data/experience';
import publicationData from '../../data/publications';
import certificateData from '../../data/certificates';

describe('Resume', () => {
  it('renders without crashing', () => {
    shallow(<Resume/>);
  });
  const wrapper = shallow(<Resume/>);
  it('renders the download button', () => {
    expect(wrapper.find('.Resume__download-button').length).toEqual(1);
  });
  it('renders my image', () => {
    expect(wrapper.find('.Resume__img').length).toEqual(1);
  });
  it('renders my name', () => {
    expect(wrapper.find('.Resume__name').props().children).toEqual(`${info.firstName} ${info.lastName}`);
  });
  it('renders my phone number', () => {
    expect(wrapper.find('.Resume__phone-number').props().children).toEqual(info.phoneNumber)
  });
  it('renders my email address', () => {
    expect(wrapper.find('.Resume__email-address').props().children).toEqual(info.emailAddress)
  });
  it('renders the social media links', () => {
    expect(wrapper.find('SocialMediaLink').length).toEqual(socialMediaData.length);
  });
  it('renders the skill levels', () => {
    expect(wrapper.find('SkillLevel').length).toBeGreaterThan(0);
  });
  it('renders all work experience', () => {
    expect(wrapper.find('Experience').length).toEqual(experienceData.workExperience.length + experienceData.volunteerExperience.length);
  });
});
