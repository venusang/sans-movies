import { shallow } from 'vue-test-utils';
import MovieList from '@/components/Movie/MovieList';

describe('MovieList.vue', () => {

  const wrapper = shallow(MovieList);
  it('renders the title', () => {
    expect(wrapper.find('h1').exists());
  });
});
