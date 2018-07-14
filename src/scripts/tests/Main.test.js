import libraries, { React, shallow } from './testLibraries';
import Main from '../components/Main';

describe('Main', () => {
  it('renders without crashing', () => {
    shallow(<Main/>);
  });
});
