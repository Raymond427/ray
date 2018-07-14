import libraries, { React, shallow } from './testLibraries';
import Scholar from '../components/homepage/Scholar';
import certificateData from '../../data/certificates';

describe('Scholar', () => {
  it('renders without crashing', () => {
    shallow(<Scholar/>);
  });
  
  const scholarCertificateCount = shallow(<Scholar/>).find('Certificate').length;

  it('renders six certificates as children', () => {
    expect(scholarCertificateCount).toEqual(6);
  });
});
