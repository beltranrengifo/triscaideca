<template>
  <container tag="article">
    <project-single :project="project" />
  </container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Project',

  async asyncData({ $content, params }): Promise<Object> {
    const project = await $content('projects', params.slug).fetch()
    return { project }
  },
})
</script>
