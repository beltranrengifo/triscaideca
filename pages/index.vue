<template>
  <container tag="section">
    <project-list v-if="$state.listView" :projects="all" />
    <home-carousel v-else :upper="upper" :lower="lower" />
  </container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',

  async asyncData({ $content }): Promise<Object> {
    return {
      upper: await $content('projects')
        .only(['featured', 'title', 'path'])
        .where({ slider: { $eq: 1 } })
        .sortBy('order')
        .fetch(),
      lower: await $content('projects')
        .only(['featured', 'title', 'path'])
        .where({ slider: { $eq: 2 } })
        .sortBy('order')
        .fetch(),
      all: await $content('projects')
        .only(['featured', 'title', 'path'])
        .sortBy('title')
        .fetch(),
    }
  },
})
</script>
