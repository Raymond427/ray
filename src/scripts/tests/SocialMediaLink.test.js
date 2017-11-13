import libraries, { React, shallow } from './testLibraries';
import SocialMediaLink from '../components/SocialMediaLink';

describe('SocialMediaLink', () => {
  it('renders without crashing', () => {
    expect(shallow(<SocialMediaLink/>).exists()).toEqual(true);
  });

  it('renders a SocialMediaLink component with proper properties', ()=> {
    const mockSocialMediaLink = { id: 1, name: "foo", url: "www.bar.com", img: "#" };
    const wrapperElement = shallow(
      <SocialMediaLink
        name={mockSocialMediaLink.name}
        url={mockSocialMediaLink.url}
        img={mockSocialMediaLink.img}/>
    ).getElements()[0];
    expect(wrapperElement.props.className).toEqual('SocialMediaLink');
    expect(wrapperElement.props.href).toEqual(mockSocialMediaLink.url);
    expect(wrapperElement.props.target).toEqual('blank');
    expect(wrapperElement.props.children.type).toEqual('img');
    expect(wrapperElement.props.children.props.alt).toEqual(mockSocialMediaLink.name);
    expect(wrapperElement.props.children.props.src).toEqual('#');
  });
});
