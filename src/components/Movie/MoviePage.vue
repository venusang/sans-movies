<template>
  <div class="movie-page" >
      <div class="row">
          <div class="col-12">
            <h2>{{movie.Title}}</h2>
            <img :src="`${movie.Poster}`" :alt="`${movie.Title}`">
            <blockquote class="p-pull-quote">
              <p>{{movie.Plot}}</p>
            </blockquote>
            <table>
              <thead>
              <tr>
                <th scope="col">Rated</th>
                <th scope="col">Genre</th>
                <th scope="col">Released</th>
                <th scope="col">imdb Rating</th>
              </tr>
              </thead>
              <tbody>
                <td>{{movie.Rated}}</td>
                <td>{{movie.Genre}}</td>
                <td>{{movie.Released}}</td>
                <td>{{movie.imdbRating}}</td>
              </tr>
              </tbody>
            </table>
            <div class="carousel">
              <carousel :pullDrag="true" :margin="20" :autoplay="true" :responsive="{0:{items:1,nav:false},600:{items:3,nav:false}}">
                <div class="thumbnail" v-for="thumbnail in movie.Images">
                  <img :src="`${ thumbnail }`" />
                </div>
              </carousel>
              <a href="/movies" class="p-button--brand">View All Movies</a>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel';
import json from '../../api/film.json';

export default {
  name: 'MoviePage',
  components: { carousel },
  methods: {
    filterById(jsonObject, id) {
      const result = jsonObject.find(item => item.imdbID === id);
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
