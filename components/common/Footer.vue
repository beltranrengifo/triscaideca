<template>
  <footer>
    <p>
      <small>
        {{ copy }}
      </small>
    </p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',

  computed: {
    copy(): string {
      return `© ${new Date().getFullYear()} Triscaideca`
    },
  },
})
</script>
