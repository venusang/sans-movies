<template>
  <div id="app">
    <Navigation />

    <div class="row">
      <div class="col-5"><FormStacked /></div>
      <div class="col-7"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
import FormInline from '@/components/Form/FormInline';
import FormStacked from '@/components/Form/FormStacked';

export default {
  name: 'app',
  components: {
    Navigation,
    FormInline,
    FormStacked,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
