<template>
  <nav class="tags">
    <ul v-if="tags && tags.length">
      <li v-for="tag in tagsAsArray" :key="tag">
        <n-link
          :to="`/projects/tag/${tag}`"
          class="tags__tag cursor-pointer px-1 inline-block mb-1"
        >
          {{ tag }}
        </n-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ProjectTags',

  props: {
    tags: {
      type: String,
      required: true,
    },
  },

  computed: {
    tagsAsArray(): object | boolean {
      return (
        (this.tags && this.tags.split(',').map((tag) => tag.trim())) || false
      )
    },
  },
})
</script>
