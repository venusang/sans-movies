<template>
  <div class="form-stacked">
    <h3>Add New Movie</h3>
    <form>
      <label for="title">Title</label>
      <input type="text" id="title" placeholder="Title" required="">
      <label for="tagline">Tagline</label>
      <input type="text" id="tagline" placeholder="Tagline" required="">
      <label for="runtime">Runtime</label>
      <input type="text" id="runtime" placeholder="Runtime" required="">
      <label for="title">Release Date</label>
      <input type="date" id="release-date" placeholder="Release Date" required="">
      <label for="rating">Rating</label>
      <input type="text" id="rating" placeholder="Rating" required="">
      <label for="image">Image</label>
      <input type="file" id="image">
      <button class="p-button--positive">Add Movie</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormStacked',
};
</script>

<style lang="scss" scoped>
</style>
