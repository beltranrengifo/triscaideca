<template>
  <section class="home-carousel">
    <template v-for="carousel in carousels">
      <slick
        :key="carousel.name"
        v-bind="carousel.options"
        @swipe="swiping = true"
        @afterChange="swiping = false"
      >
        <template v-for="(project, i) in carousel.items">
          <n-link
            v-if="imageUrl(project.featured)"
            :key="project.title"
            :to="project.path"
            tag="article"
            :class="[swiping ? 'pointer-events-none' : 'cursor-pointer']"
          >
            <img
              :src="`${imageUrl(project.featured)}`"
              :alt="`${project.title} imagen - ${i} | Triscaideca`"
              class="home-carousel__image"
            />

            <h2 class="pl-2 text-xl">
              <n-link :to="project.path">
                {{ project.title }}
              </n-link>
            </h2>
          </n-link>
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

  data() {
    return {
      swiping: false,
    }
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

    options(): object {
      return {
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 4,
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
