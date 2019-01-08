<template>
  <div class="movie-page" >
      <div class="row">
          <div class="col-12">
            <h2>{{movie.Title}}</h2>
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
            <img :src="`${movie.Poster}`" :alt="`${movie.Title}`">
          </div>
      </div>
  </div>
</template>

<script>
import json from '../../api/film.json';

export default {
  name: 'MoviePage',
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
