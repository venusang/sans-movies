<template>
  <div class="carousel">
    <h1>Featured Movies</h1>
    <carousel :pullDrag="true" :margin="20" :autoplay="true" :responsive="{0:{items:1,nav:false},600:{items:3,nav:false}}">
      <div class="thumbnail" v-for="movie in movies">
        <a class="p-matrix__link" :href="`/movie/${movie.id}`"><img class="thumbnail__image" v-bind:src="require(`../assets/${movie.thumbnail}`)" :alt="`${movie.alt}`"/></a>
        <div class="thumbnail__description"><a class="p-matrix__link" :href="`/movies/${movie.id}`">{{ movie.original_title }}</a></div>
      </div>
    </carousel>
    <a href="/movies" class="p-button--brand">View All Movies</a>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel';
import json from '../api/featured.json';

export default {
  components: { carousel },
  name: 'Carousel',
  data() {
    return {
      movies: json,
    };
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 500px;
}
.thumbnail {
  &__description {
    height: 50%;
    text-align: left;
  }
}
</style>
