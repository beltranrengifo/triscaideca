<template>
  <container tag="article">
    <carousel :images="project.images" :title="project.title" />
    <section class="px-5 my-5">
      <header>
        <h1 class="text-lg">
          <component
            :is="getLinkTag(project)"
            :href="project.link"
            target="_blank"
          >
            {{ project.title }}
          </component>
        </h1>
      </header>
    </section>
  </container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Project } from '@/types/index'

export default Vue.extend({
  name: 'Project',

  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()

    return { project }
  },

  computed: {
    getLinkTag() {
      return (project: Project): string => {
        return project.link ? 'a' : 'span'
      }
    },
  },
})
</script>
