import libraries, { React, shallow } from './testLibraries';
import socialMediaData from '../../data/socialMedia.json';
import Resume from '../components/Resume';
import experienceData from '../../data/experience';
import publicationData from '../../data/publications';
import certificateData from '../../data/certificates';
import awardData from '../../data/awards';

describe('Resume', () => {
  it('renders without crashing', () => {
    shallow(<Resume/>);
  });
  const wrapper = shallow(<Resume/>);
  it('renders the download button', () => {
    expect(wrapper.find('.Resume__download-button').length).toEqual(1);
  });
  it('renders my personal info', () => {
    expect(wrapper.find('ResumeInfo').length).toEqual(1);
  });
  it('renders all work experience', () => {
    expect(wrapper.find('Experience').length).toEqual(experienceData.workExperience.length + experienceData.volunteerExperience.length);
  });
  it('renders all publications', () => {
    expect(wrapper.find('Publication').length).toEqual(publicationData.length);
  });
  it('renders all awards', () => {
    expect(wrapper.find('Award').length).toEqual(awardData.length);
  });
});
