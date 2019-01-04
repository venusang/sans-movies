<template>
  <div class="movie">
    <TableExpand :movies="movies" />
    <TableSortable :movies="movies" />
  </div>
</template>

<script>
import json from '../../api/movie-listings.json';
import TableExpand from '../Table/TableExpand';
import TableSortable from '../Table/TableSortable';

export default {
  name: 'MovieList',
  components: {
    TableExpand,
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
