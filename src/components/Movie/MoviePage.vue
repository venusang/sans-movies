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
                <th scope="col">Rating</th>
              </tr>
              </thead>
              <tbody>
                <td>{{movie.Rated}}</td>
                <td>{{movie.Genre}}</td>
                <td>{{movie.Released}}</td>
                <td>
                  <star-rating v-if="movie.imdbRating !== 'N/A'" :rating="movie.imdbRating | ratingAsNumber" :read-only="true" v-bind:increment="0.1" :star-size="10"></star-rating>
                  <span v-else>N/A</span>
                </td>
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
import StarRating from 'vue-star-rating';
import json from '../../api/film.json';
import CarouselMovie from '../../components/Carousel/CarouselMovie';

export default {
  name: 'MoviePage',
  components: {
    StarRating,
    CarouselMovie,
  },
  data() {
    return {
      movie: this.filterById(json, this.$route.params.id),
      thumbnails: this.filterById(json, this.$route.params.id).Images,
    };
  },
  filters: {
    ratingAsNumber(number) {
      const rating = (number / 10) * 5;
      return rating;
    },
  },
  methods: {
    filterById(jsonObject, id) {
      const result = jsonObject.find(item => item.imdbID === id);
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
