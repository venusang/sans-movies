<template>
  <div id="app">
    <Navigation />
    <FormInline />
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
import FormInline from '@/components/Form/FormInline';

export default {
  name: 'app',
  components: {
    Navigation,
    FormInline,
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
