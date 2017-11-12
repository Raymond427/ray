import libraries, { React, shallow } from './testLibraries';
import Home from '../components/homepage/Home';

it('renders without crashing', () => {
  shallow(<Home />);
});
