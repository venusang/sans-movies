import Vue from 'vue';

import Router from 'vue-router';
import Carousel from '@/components/Carousel';
import MovieList from '@/components/Movie/MovieList';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Carousel',
      component: Carousel,
    },
    {
      path: '/movies',
      name: 'Movie/MovieList',
      component: MovieList,
    },
  ],
});
