import libraries, { React, shallow } from './testLibraries';
import Tool from '../components/Tool';

describe('Tool', () => {
  it('renders without crashing', () => {
    expect(shallow(
      <Tool
      name={mockTool.name}
      img={mockTool.img}/>
    ).exists()).toEqual(true);
  });

  const mockTool = { id: 1, name: "foo", img: "css3.png" };
  const wrapperElements = shallow(
    <Tool
      name={mockTool.name}
      img={mockTool.img}/>
  ).getElements()[0];
  const imgElement = wrapperElements.props.children[0];
  const pElement = wrapperElements.props.children[1]

  it('renders the tool image', ()=> {
    expect(imgElement.type).toEqual('img');
    expect(imgElement.props.alt).toEqual(mockTool.name);
    expect(imgElement.props.src).toEqual(mockTool.img);
  });

  it('renders the tool name as a p tag', () => {
    expect(pElement.type).toEqual('p');
    expect(pElement.props.children).toEqual(mockTool.name);
  });
});
