<template>
  <container tag="div" class="project-grid">
    <article
      :class="[
        'project-grid__item',
        `project-grid__item--${index + 1}`,
        `project-grid__item--height-${project.height}`,
      ]"
      v-for="(project, index) in projects"
      :key="`${project.title} - ${index}`"
      :style="getProjectStyles(project)"
    >
      <figure class="project-grid__image">
        <n-link :to="project.path">
          <img
            :src="`${imageUrl(project.featured)}`"
            :alt="`${project.title}: Proyecto Triscaideca de interiorismo y arquitectura`"
            :style="getImageStyles(project)"
          />
        </n-link>
      </figure>
    </article>
  </container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Project } from '@/types/index'
import GlobalMixin from '@/mixins'

export default Vue.extend({
  name: 'ProjectGrid',

  mixins: [GlobalMixin],

  props: {
    projects: {
      type: Array as () => Project[],
      required: true,
    },
  },

  computed: {
    getProjectStyles(): function {
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

    getImageStyles(): function {
      return (project): string => {
        return `
          object-position: ${project['image-position'] || 'center'}
        `
      }
    },
  },
})
</script>

<style lang="scss">
.project-grid {
  $--gap: 12px;
  $--item-height: 680px;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: calc(#{$--item-height} / 2);
  grid-gap: $--gap;

  &__item {
    &--height-full {
      height: $--item-height;
    }
    &--height-half {
      height: calc((#{$--item-height} - #{$--gap}) / 2);
    }
  }

  &__image {
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
