import libraries, { React, Enzyme } from './testLibraries';
import App from '../components/App';

it('renders without crashing', () => {
  Enzyme.shallow(<App />);
});
