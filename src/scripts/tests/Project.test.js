import libraries, { React, shallow } from './testLibraries';
import Project from '../components/Project';

describe('Project', () => {
  it('renders without crashing', () => {
    shallow(<Project
      key={mockProject.id}
      name={mockProject.name}
      type={mockProject.type}
      description={mockProject.description}
      img={mockProject.img}
      codeURL={mockProject.codeURL}
      siteURL={mockProject.siteURL}
      color={mockProject.color}/>);
  });

  const mockProject = {
    id: 1,
    name: "foo",
    type: "bam",
    description: "bizz",
    img: "youxpertBackground.jpg",
    codeURL: "www.bar.com",
    siteURL: "www.buzz.com",
    color: "01, 01, 01"
  };

  const wrapper = shallow(
  <Project
    key={mockProject.id}
    name={mockProject.name}
    type={mockProject.type}
    description={mockProject.description}
    img={mockProject.img}
    codeURL={mockProject.codeURL}
    siteURL={mockProject.siteURL}
    color={mockProject.color} />
  );
  const wrapperElements = wrapper.getElements()[0].props;
  const backgroundShade = wrapperElements.children[0];
  const codeLink = wrapperElements.children[4];
  const siteLink = wrapperElements.children[5];

  it('has the backgroud image from the data', () => {
    expect(wrapperElements.style.backgroundImage).toEqual(`url(${mockProject.img})`);
  });

  it('has the backgroud color from the data', () => {
    expect(wrapperElements.children.props.style.backgroundColor).toEqual(`rgba(${mockProject.color}, 0.8)`);
  });

  it('renders the project name', () => {
    expect(wrapper.find('.Project__name').length).toEqual(1);
  });

  it('renders the project type', () => {
    expect(wrapper.find('.Project__type').length).toEqual(1);
  });

  it('renders the project description', () => {
    expect(wrapper.find('.Project__description').length).toEqual(1);
  });

  describe('renderLinkIfPresent', () => {
    it('renders the link if the data is present', () => {
      expect(wrapper.find(`.Project__view-code`).length).toEqual(1);
      expect(wrapper.find(`.Project__view-site`).length).toEqual(1);
    })
  });
});
