<template>
  <header id="navigation" class="p-navigation">
    <div class="p-navigation__banner">
      <div class="p-navigation__logo">
        <a class="p-navigation__link" href="/">
          <img class="p-navigation__image logo" src="/static/sanslogo-blue.png" alt="" width="95">
        </a>
      </div>
      <a href="#navigation" class="p-navigation__toggle--open" title="menu">Menu</a>
      <a href="#navigation-closed" class="p-navigation__toggle--close" title="close menu">Close menu</a>
    </div>
    <nav class="p-navigation__nav" role="menubar">
      <span class="u-off-screen">
        <a href="#main-content">Jump to main content</a>
      </span>
      <ul class="p-navigation__links" role="menu">
        <li class="p-navigation__link is-selected" role="menuitem">
          <a href="/movies">Movies ({{moviesCount}})</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import json from '../api/movie-listings.json';

export default {
  name: 'Navigation',
  data() {
    return {
      moviesCount: json.length.toLocaleString(),
    };
  },
};
</script>

<style lang="scss" scoped>
  .p-navigation {
    margin-bottom: 10px;
  }
</style>
