<template>
  <section class="carousel">
    <slick v-bind="options">
      <div v-for="(image, i) in images" :key="image">
        <img
          :src="`${imageUrl(image)}`"
          :alt="`${title} imagen - ${i} | Triscaideca`"
          class="carousel__image"
        />
      </div>
      <template #customPaging>
        <span
          class="block cursor-pointer rounded-sm my-2 mx-1 w-2 h-2 bg-soft-light hover:bg-soft transition duration-200"
        />
      </template>
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
        arrows: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 1200,
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
    margin: 0 rem(8);
  }
}
</style>
