<template>
  <div class="movie">
    <h1>All Movies ({{moviesCount}})</h1>
    <div class="table-wrapper">
      <!-- <TableExpanding :movies="movies" /> -->
      <TableSortable :movies="movies" />
    </div>
  </div>
</template>

<script>
import json from '../../api/film.json';
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
      moviesCount: json.length.toLocaleString(),
    };
  },
};
</script>

<style lang="scss" scoped>
  .table-wrapper {
    width: 100%;
    height: 500px;
    overflow-x:hidden;
    overflow-y: scroll;
  }
</style>
