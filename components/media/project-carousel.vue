<template>
  <section class="project-carousel">
    <slick v-bind="options">
      <template v-for="(image, i) in images">
        <div v-if="image" :key="image">
          <img
            :src="`${imageUrl(image)}`"
            :alt="`${title} imagen - ${i} | Triscaideca`"
            class="project-carousel__image"
          />
        </div>
      </template>
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
  name: 'ProjectCarousel',

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
    imageUrl(): object | string {
      return (image: object) => {
        try {
          return require(`@/assets/images/projects/${image}`)
        } catch (e) {
          return ''
        }
      }
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
        autoplaySpeed: 4000,
        speed: 1200,
      }
    },
  },
})
</script>

<style scoped lang="scss">
.project-carousel {
  &__image {
    height: 76vh;
    max-width: 96vw;
    pointer-events: none;
    margin: 0 rem(8);
  }
}
</style>

<style lang="scss">
.project-carousel {
  .slick-track {
    cursor: grab;
  }
  .slick-list {
    height: 76vh;
  }
}
</style>
