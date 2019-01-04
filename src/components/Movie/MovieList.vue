<template>
  <div class="movie">
    <!-- <TableExpanding :movies="movies" /> -->
    <TableSortable :movies="movies" />
  </div>
</template>

<script>
import json from '../../api/movie-listings.json';
import TableExpanding from '../Table/TableExpanding';
import TableSortable from '../Table/TableSortable';

export default {
  name: 'MovieList',
  components: {
    TableExpanding,
    TableSortable,
  },
  data() {
    return {
      movies: json,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
