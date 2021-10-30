<template>
  <article
    @mouseover="show = true"
    @mouseleave="show = false"
    :class="[
      'project-grid__item',
      `project-grid__item--${index + 1}`,
      `project-grid__item--height-${project.height}`,
    ]"
    :style="getProjectStyles(project)"
  >
    <figure class="project-grid__item-image">
      <n-link :to="project.path">
        <img
          :src="`${imageUrl(project.featured)}`"
          :alt="`${project.title}: Proyecto Triscaideca de interiorismo y arquitectura`"
          :style="getImageStyles(project)"
        />
      </n-link>
    </figure>
    <transition name="slide-left">
      <n-link
        v-show="show"
        :to="project.path"
        tag="div"
        class="project-grid__item-info"
      >
        <project-title-with-meta
          :title="project.title"
          :tags="project.tags"
          tag="h2"
        />
      </n-link>
    </transition>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Project } from '@/types/index'
import GlobalMixin from '@/mixins/index.vue'

export default Vue.extend({
  name: 'ProjectGridItem',

  mixins: [GlobalMixin],

  props: {
    project: {
      type: Object as () => Project,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      show: false,
    }
  },

  computed: {
    getProjectStyles(): object {
      return (project): string => {
        const useColSpan = !project['grid-column'].includes('/')
        const useRowSpan = !project['grid-row'].includes('/')

        const colValue = useColSpan
          ? `span ${project['grid-column']}`
          : project['grid-column']

        const rowValue = useRowSpan
          ? `span ${project['grid-row']}`
          : project['grid-row']

        return `
          grid-column: ${colValue};
          grid-row: ${rowValue}
        `
      }
    },

    getImageStyles(): object {
      return (project): string => {
        return `
          object-position: ${project['image-position'] || 'center'}
        `
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.project-grid {
  &__item {
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 991px) {
      grid-column: auto !important;
    }

    &--height-full,
    &--height-half {
      height: $--item-height;
    }

    @include breakpoint(sm) {
      &--height-half {
        height: calc((#{$--item-height} - #{$--gap}) / 2);
      }
    }

    @include breakpoint(lg) {
      &--height-full {
        height: $--item-height--lg;
      }
      &--height-half {
        height: calc((#{$--item-height--lg} - #{$--gap}) / 2);
      }
    }
  }

  &__item-image {
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__item-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-light);
    cursor: pointer;
    padding: 12px 6px;
    display: flex;
    align-items: flex-end;
  }
}
</style>
