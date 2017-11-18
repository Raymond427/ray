import libraries, { React, shallow } from './testLibraries';
import Projects from '../components/Projects';
import projectData from '../../data/projects.json';

describe('Projects', () => {
  it('renders without crashing', () => {
    shallow(<Projects/>);
  });

  const wrapper = shallow(<Projects/>);
  const wrapperElement = wrapper.getElements()[0];
  const h1Element = wrapperElement.props.children[0];
  const pElement = wrapperElement.props.children[1];

  it('renders the header', () => {
    expect(h1Element.type).toEqual('h1');
  });

  it('renders the subheader', () => {
    expect(pElement.type).toEqual('p');
  });

  it('renders all of the projects', () => {
    expect(wrapper.find('Project').length).toEqual(projectData.length);
  });
});
