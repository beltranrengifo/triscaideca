<template>
  <section class="carousel">
    <slick v-bind="options">
      <div v-for="(image, i) in images" :key="image" class="carousel__item">
        <img
          :src="`${imageUrl(image)}`"
          :alt="`${title} imagen - ${i} | Triscaideca`"
          class="carousel__image"
        />
      </div>
    </slick>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Carousel',

  props: {
    images: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: 'Triscaideca',
    },
  },

  computed: {
    imageUrl(): object {
      return (image: object) => require(`@/assets/images/projects/${image}`)
    },

    options() {
      return {
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
      }
    },
  },
})
</script>

<style scoped lang="scss">
.carousel {
  &__image {
    height: 75vh;
    pointer-events: none;
  }
}
</style>
