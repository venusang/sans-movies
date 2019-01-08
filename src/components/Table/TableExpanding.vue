<template>
  <table class="p-table-expanding p-table--mobile-card" role="grid">
      <thead>
        <tr role="row">
          <th scope="col" role="columnheader" id="t-title" aria-sort="none">Title</th>
          <th scope="col" role="columnheader" id="t-runtime" aria-label="Runtime" aria-sort="none" class="u-align--left">Runtime</th>
          <th scope="col" role="columnheader" id="t-release-date" aria-label="Release Date" aria-sort="none" class="u-align--left">Release<br />Date</th>
          <th scope="col" role="columnheader" id="t-rating" aria-label="Rating" aria-sort="none" class="u-align--left">imdb<br />Rating</th>
          <th scope="col" role="columnheader" id="t-actions" aria-label="Actions" aria-sort="none" class="u-align--left">Actions</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="movie in movies" role="row">
              <td role="rowheader" aria-label="Title">{{movie.Title}}</td>
              <td role="gridcell" aria-label="Date" class="u-align--right">{{movie.Releases}}</td>
              <td role="gridcell" aria-label="Runtime" class="u-align--right">{{movie.Runtime}}</td>
              <td role="gridcell" class="u-align--right">
                  <button v-on:click="showMovieDetails" class="u-toggle" :id="`button-${movie.id}`" :aria-controls="`expanded-row-${movie.id}`" aria-expanded="false" data-shown-text="Hide" data-hidden-text="Show">Show</button>
              </td>
              <td :id="`expanded-row-${movie.id}`" class="p-table-expanding__panel" aria-hidden="true">
                  <div class="row">
                      <div class="col-6">
                          <h3>{{movie.Title}}</h3>
                          <p><span class="p-heading--five">Plot:</span> {{movie.Plot}}</p>
                          <p><span class="p-heading--five">Runtime:</span> {{movie.Runtime}}</p>
                          <p><span class="p-heading--five">Released:</span> {{movie.Released}}</p>
                          <p><span class="p-heading--five">imdb Rating:</span> {{movie.imdbRating}}</p>
                      </div>
                      <div class="col-6">
                          <img class="movie-poster" :src="`${movie.Poster}`" alt="">
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
        movieDetails.setAttribute('aria-hidden', true);
        buttonText.innerHTML = buttonText.getAttribute('data-hidden-text');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
