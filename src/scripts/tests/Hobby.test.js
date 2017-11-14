import libraries, { React, shallow } from './testLibraries';
import Hobby from '../components/homepage/Hobby';
import hobbyData from '../../data/hobbies.json';

describe('Hobby', () => {
  it('renders without crashing', () => {
    shallow(<Hobby hobby={hobbyData[0]}/>);
  });

  const wrapper = shallow(<Hobby hobby={hobbyData[0]}/>);
  const wrapperElements = wrapper.getElements()[0];
  const h1Element = wrapperElements.props.children[0].props.children[0];
  const pElement = wrapperElements.props.children[0].props.children[1];
  const hobbyOrgDataCount = hobbyData[0].orgs.length;
  const hobbyOrgCount = wrapper.find('Org').length;

  it('renders the hobby type as an h2 tag', () => {
    expect(h1Element.type).toEqual('h2');
    expect(h1Element.props.children).toEqual(hobbyData[0].type);
  });

  it('renders the hobby description as a p tag', () => {
    expect(pElement.type).toEqual('p');
    expect(pElement.props.children).toEqual(hobbyData[0].description);
  });

  it('renders all of the orgs inside the hobby object', () => {
    expect(hobbyOrgCount).toEqual(hobbyOrgDataCount);
  })
});
