<template>
  <container tag="section">
    <project-grid :projects="all" />
  </container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',

  async asyncData({ $content }): Promise<Object> {
    return {
      all: await $content('projects')
        .only([
          'featured',
          'title',
          'path',
          'grid-column',
          'grid-row',
          'image-position',
          'height',
          'tags',
        ])
        .sortBy('order', 'desc')
        .fetch(),
    }
  },
})
</script>
