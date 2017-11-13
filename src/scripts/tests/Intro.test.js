import libraries, { React, shallow } from './testLibraries';
import Intro from '../components/homepage/Intro';
import socialMediaData from '../../data/socialMedia.json';

describe('Intro', () => {
  it('renders without crashing', () => {
    shallow(<Intro />);
  });

  it('renders all social media links', ()=> {
    const socialMediaDataLength = socialMediaData.length;
    const socialMediaIntroLength = shallow(<Intro/>).find("SocialMediaLink").length;
    expect(socialMediaIntroLength).toEqual(socialMediaDataLength);
  });
});
