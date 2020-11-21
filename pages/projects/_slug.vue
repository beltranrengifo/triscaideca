<template>
  <container tag="article">
    <carousel :images="project.images" :title="project.title" />
    <project-info :project="project" />
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
