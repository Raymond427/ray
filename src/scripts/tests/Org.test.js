import libraries, { React, shallow } from './testLibraries';
import Org from '../components/Org';

describe('Org', () => {
  it('renders without crashing', () => {
    expect(shallow(
      <Org
        name={mockOrg.name}
        img={mockOrg.img}
        logo={mockOrg.logo}
        description={mockOrg.description} />
    ).exists()).toEqual(true);
  });

  const mockOrg = { id: 1, name: "fizz", logo: "code.png", img: "code.png", description: "buzz", url:"#" };
  const wrapperElement = shallow(
    <Org
      name={mockOrg.name}
      img={mockOrg.img}
      logo={mockOrg.logo}
      description={mockOrg.description}/>
  ).getElements()[0];

  const imgElement = wrapperElement.props.children.props.children[0];
  const pElement = wrapperElement.props.children.props.children[1].props.children[0];
  const aElement = wrapperElement.props.children.props.children[1].props.children[1];

  it('renders the background image', () => {
    expect(wrapperElement.props.style.backgroundImage).toEqual(`url(${mockOrg.img})`);
  });

  it('renders the org image', () => {
    expect(imgElement.type).toEqual('img');
    expect(imgElement.props.alt).toEqual(mockOrg.name);
    expect(imgElement.props.src).toEqual(mockOrg.img);
  });

  it('renders the org description', ()=> {
    expect(pElement.type).toEqual('p');
    expect(pElement.props.children).toEqual(mockOrg.description);
  });

  it('renders the org link', ()=> {
    expect(aElement.type).toEqual('a');
    expect(aElement.props.children).toEqual("Learn More");
  });
});
