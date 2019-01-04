<template>
  <table class="p-table--sortable p-table--mobile-card" role="grid">
    <thead>
      <tr role="row">
        <th v-on:click="sortColumn" scope="col" role="columnheader" id="t-name" :aria-sort="sortSetting">Title</th>
        <th scope="col" role="columnheader" id="t-users" aria-sort="none" class="u-align--left">Tagline</th>
        <th scope="col" role="columnheader" id="t-units" aria-sort="none" class="u-align--left">Runtime</th>
        <th scope="col" role="columnheader" id="t-revenue" aria-sort="none" class="u-align--left">Release Date</th>
        <th scope="col" role="columnheader" id="t-revenue" aria-sort="none" class="u-align--left">Vote Average</th>
        <th scope="col" role="columnheader" id="t-revenue" aria-sort="none" class="u-align--left">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="movie in movies" role="row">
        <td role="rowheader"><a class="p-matrix__link" :href="`/movie/${movie.id}`">{{ movie.original_title }}</a></td>
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
      type: Object,
      required: true,
    },
  },
  methods: {
    showDetails: (evt) => {
      const elementIdName = evt.currentTarget.getAttribute('aria-controls');
      let elementVisibility = document.getElementById(elementIdName).getAttribute('aria-hidden');
      if (elementVisibility) {
        document.getElementById(elementIdName).setAttribute('aria-hidden', false);
        elementVisibility = false;
      } else {
        console.log('FALSE!');
        document.getElementById(elementIdName).setAttribute('aria-hidden', true);
        elementVisibility = true;
      }
    },
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
