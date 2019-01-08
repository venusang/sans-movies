import { shallow } from 'vue-test-utils';
import CarouselHomepage from '@/components/Carousel/CarouselHomepage';

describe('/Carousel/CarouselHome.vue', () => {
  const json = {
    photos: [{
      imageUrl: '01.jpg',
      alt: 'short description',
      description: 'Some text goes here',
    }, {
      imageUrl: '02.jpg',
      alt: 'short description',
      description: 'some text goes here',
    }],
  };

  const wrapper = shallow(CarouselHomepage, {
    propsData: { photos: json.photos },
  });
  it('renders the carousel', () => {
    expect(wrapper.find('div.carousel').exists());
  });
  it('renders the thumbnail image', () => {
    expect(wrapper.find('.thumbnail__image').exists());
  });
  it('renders the thumbnail description', () => {
    expect(wrapper.find('.thumbnail__description').exists());
  });
  it('renders the carousel navigation dots', () => {
    expect(wrapper.find('.owl-dots').exists());
  });
  it('renders the view all movies button', () => {
    expect(wrapper.find('.p-button--brand').exists());
  });
});
