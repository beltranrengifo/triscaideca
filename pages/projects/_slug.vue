<template>
  <article>
    <carousel :images="project.images" :title="project.title" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Project',

  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()

    return { project }
  },
})
</script>
