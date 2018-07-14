import libraries, { React, shallow } from './testLibraries';
import Award from '../components/Award';
import honorData from '../../data/awards';

describe('Award', () => {
  it('renders without crashing', () => {
    shallow(<Award/>);
  });
  const honor = honorData[0];
  const wrapper = shallow(
    <Award
      title={honor.title}
      organization={honor.organization}
      dateReceived={honor.dateReceived}
      description={honor.description} />
  );
  it('renders the title', () => {
    expect(wrapper.find('.Award__title').length).toEqual(1);
  });
  it('renders the organization', () => {
    expect(wrapper.find('.Award__organization').length).toEqual(1);
  });
  it('renders the dateReceived', () => {
    expect(wrapper.find('.Award__date-received').length).toEqual(1);
  });
  it('renders the description', () => {
    expect(wrapper.find('.Award__description').length).toEqual(1);
  });
});
