import libraries, { React, shallow } from './testLibraries';
import Modal from '../components/Modal';

describe('Modal', () => {
  it('renders without crashing', () => {
    shallow(<Modal/>);
  });
  const wrapper = shallow(<Modal/>);
  it('renders the modal content', () => {
    expect(wrapper.find('.Modal__content').length).toEqual(1);
  });
});
