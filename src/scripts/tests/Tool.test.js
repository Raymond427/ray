import libraries, { React, shallow } from './testLibraries';
import Tool from '../components/Tool';

describe('Tool', () => {
  it('renders without crashing', () => {
    expect(shallow(<Tool/>).exists()).toEqual(true);
  });

  it('renders a Tool component with proper properties', ()=> {
    const mockTool = { id: 1, name: "foo", img: "#" };
    const wrapperElement = shallow(
      <Tool
        name={mockTool.name}
        img={mockTool.img}/>
    ).getElements()[0];
    expect(wrapperElement.props.children[0].type).toEqual('img');
    expect(wrapperElement.props.children[0].props.alt).toEqual(mockTool.name);
    expect(wrapperElement.props.children[0].props.src).toEqual('#');
    expect(wrapperElement.props.children[1].type).toEqual('p');
    expect(wrapperElement.props.children[1].props.children).toEqual(mockTool.name);
  });
});
