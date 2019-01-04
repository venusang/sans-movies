<template>
  <div id="app">
    <Navigation />
    <Form />
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
import Form from '@/components/Form';

export default {
  name: 'app',
  components: {
    Navigation,
    Form,
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
