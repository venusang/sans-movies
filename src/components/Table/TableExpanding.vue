<template>
  <table class="p-table-expanding p-table--mobile-card" role="grid">
      <thead>
          <tr role="row">
              <th scope="col" id="t-title" aria-sort="none">Title</th>
              <th scope="col" id="t-release-date" aria-sort="none" class="u-align--right">Release Date</th>
              <th scope="col" id="t-runtime" aria-sort="none" class="u-align--right">Runtime</th>
              <th scope="col" id="t-actions" aria-sort="none" class="u-align--right">Actions</th>
              <th class="u-hide"><!-- empty cell required for validation --></th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="movie in movies" role="row">
              <td role="rowheader" aria-label="Title">{{movie.original_title}}</td>
              <td role="gridcell" aria-label="Date" class="u-align--right">{{movie.release_date}}</td>
              <td role="gridcell" aria-label="Runtime" class="u-align--right">{{movie.runtime}}</td>
              <td role="gridcell" class="u-align--right">
                  <button v-on:click="showMovieDetails" class="u-toggle" :id="`button-${movie.id}`" :aria-controls="`expanded-row-${movie.id}`" aria-expanded="false" data-shown-text="Hide" data-hidden-text="Show">Show</button>
              </td>
              <td :id="`expanded-row-${movie.id}`" class="p-table-expanding__panel" aria-hidden="true">
                  <div class="row">
                      <div class="col-6">
                          <h3>{{movie.original_title}}</h3>
                          <p>{{movie.tagline}}</p>
                          <p>{{movie.runtime}} minutes</p>
                          <p>{{movie.release_date}}</p>
                          <p>{{movie.vote_average}}</p>
                      </div>
                      <div class="col-6">
                          <img src="https://via.placeholder.com/1024x325" alt="">
                      </div>
                  </div>
              </td>
          </tr>
      </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableExpanding',
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: false,
      theDetailsId: '',
      theDetailsButtonId: '',
    };
  },
  methods: {
    showMovieDetails: (evt) => {
      const currentTargetId = evt.currentTarget.getAttribute('aria-controls');
      const currentButtonId = evt.currentTarget.getAttribute('id');
      const lastTargetId = document.getElementById(this.DetailsId);
      const lastButtonId = document.getElementById(this.theDetailsButtonId);
      const movieDetails = document.getElementById(currentTargetId);
      const buttonText = evt.currentTarget;

      if (lastTargetId) {
        lastTargetId.setAttribute('aria-hidden', true);
        lastButtonId.innerHTML = lastButtonId.getAttribute('data-hidden-text');
      }
      this.isExpanded = !this.isExpanded;
      this.DetailsId = currentTargetId;
      this.theDetailsButtonId = currentButtonId;

      if (this.isExpanded) {
        movieDetails.setAttribute('aria-hidden', false);
        buttonText.innerHTML = buttonText.getAttribute('data-shown-text');
      } else {
        console.log('isExpanded is false');
        movieDetails.setAttribute('aria-hidden', true);
        buttonText.innerHTML = buttonText.getAttribute('data-hidden-text');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
