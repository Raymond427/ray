import libraries, { React, shallow } from './testLibraries';
import Modal from '../components/Modal';

describe('Modal', () => {
  it('renders without crashing', () => {
    shallow(<Modal/>);
  });
});
