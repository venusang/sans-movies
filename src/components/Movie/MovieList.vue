<template>
  <div class="movie" >
    <ul class="p-matrix u-clearfix">
      <li v-for="movie in movies" class="p-matrix__item">
        <img v-if="movie.thumbnail" class="p-matrix__img" v-bind:src="require(`../../assets/${movie.thumbnail}`)" :alt="`${movie.alt}`"/>
        <div class="p-matrix__content">
          <h3 class="p-matrix__title"><a class="p-matrix__link" :href="`${movie.homepage}`">{{ movie.original_title }}</a></h3>
          <div class="p-matrix__desc">
            <p v-if="movie.tagline" class="tagline">{{ movie.tagline }}</p>
            <p v-if="movie.runtime" class="runtime">Runtime:  {{ movie.runtime }} minutes</p>
            <p v-if="movie.release_date" class="release_date">Release Date: {{ movie.release_date }}</p>
            <p v-if="movie.vote_average" class="rating">Vote Average {{ movie.vote_average }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import json from '../../api/movie-listings.json';

export default {
  name: 'MovieList',
  data() {
    return {
      movies: json,
      logo: 'sanslogo-blue.png',
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
