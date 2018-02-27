import libraries, { React, shallow } from './testLibraries';
import SoftwareEngineer from '../components/homepage/SoftwareEngineer';
import toolData from '../../data/tools.json';

describe('Software Engineer', () => {
  it('renders without crashing', () => {
    shallow(<SoftwareEngineer/>);
  });

  const wrapper = shallow(<SoftwareEngineer/>);
  const toolDataCount = toolData.length;
  const engineerToolCount = wrapper.find('Tool').length;
  const wrapperContent = wrapper.getElements()[0].props.children.props.children.props.children;

  it('renders the header', () => {
    expect(wrapperContent[0].type).toEqual('h2');
    expect(wrapperContent[0].props.children).toEqual('Software Engineer');
  });

  it('renders the subheader', () => {
    expect(wrapperContent[1].type).toEqual('h3');
  });

  it('renders the project button', () => {
    expect(wrapper.find('.SoftwareEngineer__project-button').length).toEqual(1);
  });

  it('renders all tools', () => {
    expect(engineerToolCount).toEqual(toolDataCount);
  });
});
