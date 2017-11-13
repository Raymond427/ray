import libraries, { React, shallow } from './testLibraries';
import Scholar from '../components/homepage/Scholar';

it('renders without crashing', () => {
  shallow(<Scholar/>);
});
