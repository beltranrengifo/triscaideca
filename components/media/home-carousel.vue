<template>
  <section class="home-carousel">
    <template v-for="carousel in carousels">
      <slick :key="carousel.name" v-bind="carousel.options">
        <template v-for="(project, i) in carousel.items">
          <div v-if="imageUrl(project.featured)" :key="project.title">
            <n-link :to="project.path">
              <img
                :src="`${imageUrl(project.featured)}`"
                :alt="`${project.title} imagen - ${i} | Triscaideca`"
                class="home-carousel__image"
              />
            </n-link>
            <h2 class="pl-2 text-xl">{{ project.title }}</h2>
          </div>
        </template>
      </slick>
    </template>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Project } from '@/types/index'

export default Vue.extend({
  name: 'HomeCarousel',

  props: {
    upper: {
      type: Array as () => Project[],
      required: true,
    },
    lower: {
      type: Array as () => Project[],
      required: true,
    },
  },

  computed: {
    carousels(): object {
      return {
        upper: {
          items: this.upper,
          name: 'upper',
          options: this.options,
        },
        lower: {
          items: this.lower,
          name: 'lower',
          options: {
            ...this.options,
            rtl: true,
            autoplaySpeed: 6500,
            speed: 1300,
          },
        },
      }
    },

    imageUrl(): object {
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
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 2,
        variableWidth: true,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 7200,
        speed: 1200,
      }
    },
  },
})
</script>

<style scoped lang="scss">
.home-carousel {
  &__image {
    height: 40vh;
    pointer-events: none;
    margin: 0 rem(8);
  }
  .slick-slider {
    &:first-child {
      margin-bottom: rem(8);
    }
  }
}
</style>
