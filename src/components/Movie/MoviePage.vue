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
            <CarouselMovie :thumbnails="movie.Images" />
            <a href="/movies" class="p-button--brand">View All Movies</a>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import json from '../../api/film.json';
import CarouselMovie from '../../components/Carousel/CarouselMovie';

export default {
  name: 'MoviePage',
  components: {
    CarouselMovie,
  },
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
      thumbnails: this.filterById(json, this.$route.params.id).Images,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
