import libraries, { React, shallow } from './testLibraries';
import SocialMediaLink from '../components/SocialMediaLink';

describe('SocialMediaLink', () => {
  it('renders without crashing', () => {
    expect(shallow(
      <SocialMediaLink
      name={mockSocialMediaLink.name}
      url={mockSocialMediaLink.url}
      img={mockSocialMediaLink.img}/>
    ).exists()).toEqual(true);
  });

  const mockSocialMediaLink = { id: 1, name: "foo", url: "www.bar.com", img: "code.png" };
  const wrapperElement = shallow(
    <SocialMediaLink
      name={mockSocialMediaLink.name}
      url={mockSocialMediaLink.url}
      img={mockSocialMediaLink.img}/>
  ).getElements()[0];
  const aElement = wrapperElement.props;
  const imgElement = aElement.children;

  it('renders the social media link', () => {
    expect(aElement.className).toEqual('SocialMediaLink');
    expect(aElement.href).toEqual(mockSocialMediaLink.url);
    expect(aElement.target).toEqual('blank');
  });

  it('renders the social media link image', ()=> {
    expect(imgElement.type).toEqual('img');
    expect(imgElement.props.alt).toEqual(mockSocialMediaLink.name);
    expect(imgElement.props.src).toEqual('code.png');
  });
});
