<template>
  <div class="carousel">
    <carousel :pullDrag="true" :margin="20" :autoplay="true" :responsive="{0:{items:1,nav:false},600:{items:3,nav:false}}">
      <div class="thumbnail" v-for="thumbnail in thumbnails">
        <img :src="`${ thumbnail }`" />
      </div>
    </carousel>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel';

export default {
  components: {
    carousel,
  },
  name: 'CarouselMovie',
  props: {
    thumbnails: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
