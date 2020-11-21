<template>
  <container tag="section" boxed>
    <header>
      <h1 class="text-xl">{{ $t('tagPage.title', { tag }) }}</h1>
    </header>
    <main>
      <ul>
        <li
          v-for="(project, index) in projects"
          :key="`${project.title} - ${index}`"
        >
          <n-link :to="project.path" class="text-4xl leading-relaxed">
            {{ project.title }}
          </n-link>
        </li>
      </ul>
    </main>
  </container>
</template>

<script lang="ts">
import Vue from 'vue'
import { capitalize } from '@/utils'

export default Vue.extend({
  name: 'TagArchive',

  async asyncData({ $content, params }): Promise<Object> {
    const projects = await $content('projects', params.slug)
      .where({
        tags: {
          $regex: [params.tag, 'i'],
        },
      })
      .without('body')
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      projects,
      tag: capitalize(params.tag),
    }
  },
})
</script>
