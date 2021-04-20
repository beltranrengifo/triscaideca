<template>
  <container tag="section" boxed class="project-list">
    <header>
      <h1 class="text-xl">Proyectos de Triscaideca</h1>
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
import { Project } from '@/types/index'

export default Vue.extend({
  name: 'ProjectList',

  props: {
    projects: {
      type: Array as () => Project[],
      required: true,
    },
  },
})
</script>

<style lang="scss">
.project-list {
  padding: rem(16);
}
</style>
