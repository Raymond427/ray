import libraries, { React, shallow } from './testLibraries';
import Footer from '../components/Footer';

describe('Footer', () => {
  it('renders without crashing', () => {
    shallow(<Footer/>);
  });
});
