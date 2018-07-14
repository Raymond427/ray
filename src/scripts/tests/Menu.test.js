import libraries, { React, shallow } from './testLibraries';
import Menu from '../components/Menu';

describe('Menu', () => {
  it('renders without crashing', () => {
    shallow(<Menu/>);
  });
});
