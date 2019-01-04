<template>
  <div class="movie" >

    <table class="p-table-expanding" role="grid">
        <thead>
            <tr role="row">
                <th scope="col" id="t-name" aria-sort="none">Name</th>
                <th scope="col" id="t-users" aria-sort="none" class="u-align--right">Users</th>
                <th scope="col" id="t-units" aria-sort="none" class="u-align--right">Units</th>
                <th scope="col" id="t-revenue" aria-sort="none" class="u-align--right">Actions</th>
                <th class="u-hide"><!-- empty cell required for validation --></th>
            </tr>
        </thead>
        <tbody>
            <tr role="row">
                <td role="rowheader" aria-label="Name">Grape</td>
                <td role="gridcell" aria-label="Users" class="u-align--right">8</td>
                <td role="gridcell" aria-label="Units" class="u-align--right">19</td>
                <td role="gridcell" class="u-align--right">
                    <button v-on:click="showDetails" class="u-toggle" aria-controls="expanded-row" aria-expanded="false" data-shown-text="Hide" data-hidden-text="Show">Show</button>
                </td>
                <td id="expanded-row" class="p-table-expanding__panel" aria-hidden="true">
                    <div class="row">
                        <div class="col-6">
                            <h3>Expanding table cell</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum dicta beatae nostrum eligendi similique earum, dolorem fuga quis, sequi voluptates architecto ipsa dolorum eaque rem expedita inventore voluptas odit aspernatur alias molestias facere, eum accusamus dolor, assumenda. Eaque, id! Dolorem perferendis reprehenderit eum, odio minima ad commodi earum non, iste suscipit.</p>
                        </div>
                        <div class="col-6">
                            <img src="https://via.placeholder.com/1024x325" alt="">
                        </div>
                    </div>
                </td>
            </tr>
            <tr role="row">
                <td role="rowheader" aria-label="Name">Melon</td>
                <td role="gridcell" aria-label="Users" class="u-align--right">12</td>
                <td role="gridcell" aria-label="Units" class="u-align--right">23</td>
                <td role="gridcell" class="u-align--right">
                    <button v-on:click="showDetails" class="u-toggle" aria-controls="#expanded-row-2" aria-expanded="false" data-shown-text="Hide" data-hidden-text="Show">Show</button>
                </td>
                <td id="expanded-row-2" class="p-table-expanding__panel" aria-hidden="true">
                    <div class="row">
                        <div class="col-6">
                            <h3>Expanding table cell</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum dicta beatae nostrum eligendi similique earum, dolorem fuga quis, sequi voluptates architecto ipsa dolorum eaque rem expedita inventore voluptas odit aspernatur alias molestias facere, eum accusamus dolor, assumenda. Eaque, id! Dolorem perferendis reprehenderit eum, odio minima ad commodi earum non, iste suscipit.</p>
                        </div>
                        <div class="col-6">
                            <img src="https://via.placeholder.com/1024x325" alt="">
                        </div>
                    </div>
                </td>
            </tr>
            <tr role="row">
                <td role="rowheader" aria-label="Name">Apple</td>
                <td role="gridcell" aria-label="Users" class="u-align--right">9</td>
                <td role="gridcell" aria-label="Units" class="u-align--right">17</td>
                <td role="gridcell" class="u-align--right">
                    <button class="u-toggle" aria-controls="#expanded-row-3" aria-expanded="false" data-shown-text="Hide" data-hidden-text="Show">Show</button>
                </td>
                <td id="expanded-row-3" class="p-table-expanding__panel" aria-hidden="true">
                    <div class="row">
                        <div class="col-6">
                            <h3>Expanding table cell</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum dicta beatae nostrum eligendi similique earum, dolorem fuga quis, sequi voluptates architecto ipsa dolorum eaque rem expedita inventore voluptas odit aspernatur alias molestias facere, eum accusamus dolor, assumenda. Eaque, id! Dolorem perferendis reprehenderit eum, odio minima ad commodi earum non, iste suscipit.</p>
                        </div>
                        <div class="col-6">
                            <img src="https://via.placeholder.com/1024x325" alt="">
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>


    <table class="p-table--sortable" role="grid">
      <thead>
        <tr role="row">
          <th v-on:click="sortColumn" scope="col" role="columnheader" id="t-name" :aria-sort="sortSetting">Title</th>
          <th scope="col" role="columnheader" id="t-users" aria-sort="none" class="u-align--left">Tagline</th>
          <th scope="col" role="columnheader" id="t-units" aria-sort="none" class="u-align--left">Runtime (minutes)</th>
          <th scope="col" role="columnheader" id="t-revenue" aria-sort="none" class="u-align--left">Release Date</th>
          <th scope="col" role="columnheader" id="t-revenue" aria-sort="none" class="u-align--left">Vote Average</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movie in movies" role="row">
          <td role="rowheader"><a class="p-matrix__link" :href="`/movie/${movie.id}`">{{ movie.original_title }}</a></td>
          <td role="gridcell" class="u-align--left">{{ movie.tagline }}</td>
          <td role="gridcell" class="u-align--left">{{ movie.runtime }}</td>
          <td role="gridcell" class="u-align--left">{{ movie.release_date }}</td>
          <td role="gridcell" class="u-align--left">{{ movie.vote_average }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import json from '../../api/movie-listings.json';

export default {
  name: 'MovieList',
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
  data() {
    return {
      sortSetting: 'none',
      movies: json,
      logo: 'sans-blue.png',
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
