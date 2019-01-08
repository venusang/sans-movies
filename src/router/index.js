import Vue from 'vue';

import Router from 'vue-router';
import Carousel from '@/components/Carousel';
import MovieList from '@/components/Movie/MovieList';
import MoviePage from '@/components/Movie/MoviePage';

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
    {
      path: '/movies/:id',
      name: 'Movie/MoviePage',
      component: MoviePage,
    },
  ],
});
