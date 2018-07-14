import libraries, { React, shallow } from './testLibraries';
import publicationData from '../../data/publications'
import Publication from '../components/Publication';

describe('Publication', () => {
  it('renders without crashing', () => {
    shallow(<Publication/>);
  });
  const pubData = publicationData[0];
  const wrapper = shallow(
    <Publication
      title={pubData.title}
      datePublished={pubData.datePublished}
      publicationCompany={pubData.publicationCompany}
      description={pubData.description}/>
  );
  it('renders the title', () => {
    expect(wrapper.find('.Publication__title').length).toEqual(1);
  });
  it('renders the company', () => {
    expect(wrapper.find('.Publication__company').length).toEqual(1);
  });
  it('renders the date', () => {
    expect(wrapper.find('.Publication__date').length).toEqual(1);
  });
  it('renders the description', () => {
    expect(wrapper.find('.Publication__description').length).toEqual(1);
  });
});
