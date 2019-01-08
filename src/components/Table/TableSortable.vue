<template>
  <table class="p-table--sortable p-table--mobile-card" role="grid">
    <thead>
      <tr role="row">
        <th v-on:click="sortColumn" scope="col" role="columnheader" id="t-title" aria-sort="none">Title</th>
        <th scope="col" role="columnheader" id="t-runtime" aria-label="Runtime" aria-sort="none" class="u-align--left">Runtime</th>
        <th scope="col" role="columnheader" id="t-release-date" aria-label="Release Date" aria-sort="none" class="u-align--left">Release<br />Date</th>
        <th scope="col" role="columnheader" id="t-rating" aria-label="Rating" aria-sort="none" class="u-align--left">Rating</th>
        <th scope="col" role="columnheader" id="t-actions" aria-label="Actions" aria-sort="none" class="u-align--left">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="movie in movies" role="row">
        <td role="rowheader"><a class="p-matrix__link" :href="`/movies/${movie.imdbID}`">{{ movie.Title }}</a></td>
        <td role="gridcell" class="u-align--left">{{ movie.Runtime }}</td>
        <td role="gridcell" class="u-align--left">{{ movie.Released }}</td>
        <td role="gridcell" class="u-align--left">
          <star-rating v-if="movie.imdbRating !== 'N/A'" :rating="movie.imdbRating | ratingAsNumber" :read-only="true" v-bind:increment="0.1" :star-size="10"></star-rating>
          <span v-else>N/A</span>
        </td>
        <td>
          <a class="actions" href="#"><img v-bind:src="require('../../assets/icons/pencil.svg')" alt="edit"></a>
          <a class="actions" href="#"><img v-bind:src="require('../../assets/icons/trash.svg')" alt="delete"></a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  components: {
    StarRating,
  },
  name: 'TableSortable',
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
  filters: {
    ratingAsNumber(number) {
      const rating = (number / 10) * 5;
      return rating;
    },
  },
  methods: {
    sortColumn: (evt) => {
      const sort = evt.currentTarget.getAttribute('aria-sort');
      if (sort === 'none') {
        evt.currentTarget.setAttribute('aria-sort', 'ascending');
      }
      if (sort === 'ascending') {
        evt.currentTarget.setAttribute('aria-sort', 'descending');
      }
      if (sort === 'descending') {
        evt.currentTarget.setAttribute('aria-sort', 'ascending');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .actions {
    img {
      width: 20px;
    }
  }
</style>
