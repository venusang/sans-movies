<template>
  <table class="p-table--sortable p-table--mobile-card" role="grid">
    <thead>
      <tr role="row">
        <th v-on:click="sortColumn" scope="col" role="columnheader" id="t-title" aria-sort="none">Title</th>
        <th scope="col" role="columnheader" id="t-tagline" aria-label="Tagline" aria-sort="none" class="u-align--left">Tagline</th>
        <th scope="col" role="columnheader" id="t-runtime" aria-label="Runtime" aria-sort="none" class="u-align--left">Runtime</th>
        <th scope="col" role="columnheader" id="t-release-date" aria-label="Release Date" aria-sort="none" class="u-align--left">Release<br />Date</th>
        <th scope="col" role="columnheader" id="t-rating" aria-label="Rating" aria-sort="none" class="u-align--left">Rating</th>
        <th scope="col" role="columnheader" id="t-actions" aria-label="Actions" aria-sort="none" class="u-align--left">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="movie in movies" role="row">
        <td role="rowheader"><a class="p-matrix__link" :href="`/movies/${movie.id}`">{{ movie.original_title }}</a></td>
        <td role="gridcell" class="u-align--left">{{ movie.tagline }}</td>
        <td role="gridcell" class="u-align--left">{{ movie.runtime }}</td>
        <td role="gridcell" class="u-align--left">{{ movie.release_date }}</td>
        <td role="gridcell" class="u-align--left">{{ movie.vote_average }}</td>
        <td>
          <a class="actions" href="#"><img v-bind:src="require('../../assets/icons/pencil.svg')" alt="edit"></a>
          <a class="actions" href="#"><img v-bind:src="require('../../assets/icons/trash.svg')" alt="delete"></a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableSortable',
  props: {
    movies: {
      type: Array,
      required: true,
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
