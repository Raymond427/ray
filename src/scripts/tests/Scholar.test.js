import libraries, { React, shallow } from './testLibraries';
import Scholar from '../components/homepage/Scholar';
import certificateData from '../../data/certificate.json';

describe('Scholar', () => {
  it('renders without crashing', () => {
    shallow(<Scholar/>);
  });

  const certificateDataCount = certificateData.length;
  const scholarCertificateCount = shallow(<Scholar/>).find('Certificate').length;

  it('renders all certificates as children', () => {
    expect(scholarCertificateCount).toEqual(certificateDataCount);
  });
});
