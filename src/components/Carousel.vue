<template>
  <div class="carousel" >
    <carousel :pullDrag="true" :autoplay="true" :responsive="{0:{items:1,nav:false},600:{items:3,nav:true}}">
      <div class="thumbnail" v-for="movie in movies">
        <img class="thumbnail__image" v-bind:src="require(`../assets/${movie.imgUrl}`)" :alt="`${movie.alt}`"/>
        <div class="thumbnail__description">{{ movie.title }}</div>
      </div>
    </carousel>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel';
import json from '../api/featured-movies.json';

export default {
  components: { carousel },
  name: 'Carousel',
  data() {
    return {
      movies: json.movies,
    };
  },
};
</script>

<style lang="scss" scoped>
.thumbnail {
  &__description {
    width: 50%;
    text-align: left;
  }
}
</style>
