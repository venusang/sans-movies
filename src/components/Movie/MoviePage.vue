<template>
  <div class="movie-page" >
    <section class="p-strip--dark is-light">
      <div class="row">
          <div class="col-6">
            <h2>{{movie.title}}</h2>
            <p>{{movie.tagline}}</p>
            <p>{{movie.overview}}</p>
            <p>{{movie.release_date}}</p>
          </div>
          <div class="col-6">
              <img src="https://via.placeholder.com/1024x600" alt="">
          </div>
      </div>
    </section>

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
