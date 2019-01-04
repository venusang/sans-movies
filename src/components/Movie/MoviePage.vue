<template>
  <div class="movie-page" >
      <div class="row">
          <div class="col-12">
            <h2>{{movie.title}}</h2>
            <p>{{movie.tagline}}</p>
            <p>{{movie.overview}}</p>
            <p>{{movie.release_date}}</p>
            <p><img src="https://via.placeholder.com/1024x600" alt=""></p>
          </div>
      </div>
  </div>
</template>

<script>
import json from '../../api/movie-listings.json';

export default {
  name: 'MoviePage',
  methods: {
    filterById(jsonObject, id) {
      const result = jsonObject.find(item => item.id === id);
      return result;
    },
  },
  data() {
    return {
      movies: json,
      movie: this.filterById(json, this.$route.params.id),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
