import libraries, { React, shallow } from './testLibraries';
import Experience from '../components/Experience';
import experienceData from '../../data/experience';

describe('Experience', () => {
  const experience = experienceData.workExperience[0];
  it('renders without crashing', () => {
    shallow(<Experience
              title={experience.title}
              company={experience.company}
              logo={experience.logo}
              startDate={experience.startDate}
              endDate={experience.endDate}
              achievements={experience.achievements} />);
  });
  const wrapper = shallow(
    <Experience
      title={experience.title}
      company={experience.company}
      logo={experience.logo}
      startDate={experience.startDate}
      endDate={experience.endDate}
      achievements={experience.achievements} />
  );
  it('renders the company logo', () => {
    expect(wrapper.find('.Experience__logo').length).toEqual(1);
  });
  it('renders the job title', () => {
    expect(wrapper.find('.Experience__title').length).toEqual(1);
  });
  it('renders the job date', () => {
    expect(wrapper.find('.Experience__date').length).toEqual(1);
  });
  it('renders the job company', () => {
    expect(wrapper.find('.Experience__company').length).toEqual(1);
  });
  it('renders the job title', () => {
    expect(wrapper.find('.Experience__title').length).toEqual(1);
  });
  it('renders the job achievements', () => {
    expect(wrapper.find('.Experience__achievement').length).toBeGreaterThan(-1);
  });
});
