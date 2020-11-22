<template>
  <section
    class="single-project px-5 my-5 flex flex-col sm:flex-row justify-between"
  >
    <header>
      <h1>
        <component
          :is="getLinkTag"
          v-bind="getLinkProps"
          class="font-normal text-lg"
        >
          {{ project.title }}
        </component>
      </h1>
    </header>
    <main>
      <project-tags :tags="project.tags" />
      <social-share :url="$route.fullPath" :title="project.title" />
    </main>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Project } from '@/types/index'

export default Vue.extend({
  name: 'ProjectInfo',

  props: {
    project: {
      type: Object as () => Project,
      required: true,
    },
  },

  computed: {
    getLinkTag(): string {
      return this.project.link ? 'a' : 'span'
    },

    getLinkProps(): object | null {
      return this.project.link
        ? {
            href: this.project.link,
            target: '_blank',
          }
        : null
    },
  },
})
</script>
