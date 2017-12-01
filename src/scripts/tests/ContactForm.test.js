import libraries, { React, shallow } from './testLibraries';
import ContactForm from '../components/ContactForm';

describe('ContactForm', () => {
  it('renders without crashing', () => {
    shallow(<ContactForm/>);
  });
  const wrapper = shallow(<ContactForm/>);
  it('renders the first name field', () => {
    expect(wrapper.find('#ContactForm__first-name').length).toEqual(1);
  });
  it('renders the last name field', () => {
    expect(wrapper.find('#ContactForm__last-name').length).toEqual(1);
  });
  it('renders the email field', () => {
    expect(wrapper.find('#ContactForm__email').length).toEqual(1);
  });
  it('renders the phone field', () => {
    expect(wrapper.find('#ContactForm__phone').length).toEqual(1);
  });
  it('renders the message textarea', () => {
    expect(wrapper.find('#ContactForm__message').length).toEqual(1);
  });
});
