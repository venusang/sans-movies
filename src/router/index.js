import Vue from 'vue';

import Router from 'vue-router';
import CarouselHomepage from '@/components/Carousel/CarouselHomepage';
import MovieList from '@/components/Movie/MovieList';
import MoviePage from '@/components/Movie/MoviePage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CarouselHomepage',
      component: CarouselHomepage,
    },
    {
      path: '/movies',
      name: 'Movie/MovieList',
      component: MovieList,
    },
    {
      path: '/movies/:id',
      name: 'Movie/MoviePage',
      component: MoviePage,
    },
  ],
});
