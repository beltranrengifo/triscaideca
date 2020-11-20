<template>
  <component :is="tag" class="container">
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Container',

  props: {
    tag: {
      type: String,
      default: 'section',
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  max-width: rem(1920);
  margin: 0 auto;
}
</style>
