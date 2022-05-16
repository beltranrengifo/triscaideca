<template>
  <container tag="div" class="project-grid">
    <project-grid-item
      v-for="(project, index) in projects"
      :key="`${project.title} - ${index}`"
      :project="project"
      :index="index"
    />
  </container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Project } from '@/types/index'

export default Vue.extend({
  name: 'ProjectGrid',

  props: {
    projects: {
      type: Array as () => Project[],
      required: true,
    },
  },

  data() {
    return {
      isActive: false,
    }
  },
})
</script>

<style lang="scss" scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: calc(#{$--item-height} / 2);
  grid-gap: $--gap;

  @include breakpoint(sm) {
    grid-template-columns: repeat(4, 1fr);
  }

  @include breakpoint(md) {
    grid-template-rows: calc(#{$--item-height--lg} / 2);
  }
}
</style>
