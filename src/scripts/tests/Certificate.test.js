import libraries, { React, shallow } from './testLibraries';
import Certificate from '../components/Certificate';

describe('Certificate', () => {
  it('renders without crashing', () => {
    expect(shallow(<Certificate/>).exists()).toEqual(true);
  });

  const mockCertificate = { id: 1, name: "foo", school: "buzzU", url: "www.bar.com", img: "#" };
  const wrapperElement = shallow(
    <Certificate
      name={mockCertificate.name}
      url={mockCertificate.url}
      img={mockCertificate.img}
      school={mockCertificate.school}/>
  ).getElements()[0];
  const imgElement = wrapperElement.props.children[0];
  const pElement = wrapperElement.props.children[1];
  const p2Element = wrapperElement.props.children[2];

  it('renders the certificate image', () => {
    expect(imgElement.type).toEqual('img');
    expect(imgElement.props.src).toEqual(mockCertificate.img);
    expect(imgElement.props.alt).toEqual(mockCertificate.name);
  });

  it('renders the certificate name', () => {
    expect(pElement.type).toEqual('p');
    expect(pElement.props.children).toEqual(mockCertificate.name);
  });
  
  it('renders the certificate school', () => {
    expect(p2Element.type).toEqual('p');
    expect(p2Element.props.children).toEqual(mockCertificate.school);
  });
});
