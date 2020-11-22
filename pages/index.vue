<template>
  <container tag="section">
    <home-carousel :upper="upper" :lower="lower" />
  </container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',

  async asyncData({ $content }): Promise<Object> {
    return {
      upper: await $content('projects')
        .only(['featured', 'title', 'path', 'tags'])
        .where({ slider: { $eq: 1 } })
        .sortBy('order')
        .fetch(),
      lower: await $content('projects')
        .only(['featured', 'title', 'path', 'tags'])
        .where({ slider: { $eq: 2 } })
        .sortBy('order')
        .fetch(),
    }
  },
})
</script>
