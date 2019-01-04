<template>
  <div class="carousel" >
    <carousel :pullDrag="true" :margin="20" :autoplay="true" :responsive="{0:{items:1,nav:false},600:{items:3,nav:false}}">
      <div class="thumbnail" v-for="movie in movies">
        <img class="thumbnail__image" v-bind:src="require(`../assets/${movie.thumbnail}`)" :alt="`${movie.alt}`"/>
        <div class="thumbnail__description">{{ movie.title }}</div>
      </div>
    </carousel>
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
.thumbnail {
  &__description {
    height: 50%;
    text-align: left;
  }
}
</style>
