import libraries, { React, shallow } from './testLibraries';
import Intro from '../components/homepage/Intro';
import socialMediaData from '../../data/socialMedia.json';

describe('Intro', () => {
  it('renders without crashing', () => {
    shallow(<Intro />);
  });

  const socialMediaDataLength = socialMediaData.length;
  const socialMediaIntroLength = shallow(<Intro/>).find("SocialMediaLink").length;

  it('renders all social media links', ()=> {
    expect(socialMediaIntroLength).toEqual(socialMediaDataLength);
  });
});
